import { useGetProductsQuery } from "../api/apiSlice"
import usefilterContext from "../hooks/usefilterContext"
import FilterListIcon from "@mui/icons-material/FilterList"
import Dropdown from "./Dropdown"
import { lazy, useState } from "react"
import Loading from "./Loading"
const Card = lazy(() => import("./Card"))

const Products = () => {
  const { query, category, filter, min, max } = usefilterContext()
  const { data: items,  isLoading, isError } = useGetProductsQuery({ category, filter })

  const [showDropdown, setShowDropdown] = useState(false)
  const filteredItems = items?.products
    ?.filter((item: any) => 
      item.title.toLowerCase().includes(query.toLowerCase())
    )
    ?.filter((item: any) => {
      // If min and maxPrice are set, filter by them
      if (min !== undefined && max !== undefined) {
        return item.price >= min && item.price <= max
      }
      return true // otherwise, keep all
    })
  
  if(isLoading){
    return <Loading />
  }
  if(isError){
    return <h2>error</h2>
  }

  return (
    <main className="p-2 pl-[310px] py-5">
      <div className="flex gap-2 items-center h-15">
        <FilterListIcon
          style={{ cursor: "pointer" }}
          onClick={() => setShowDropdown(!showDropdown)}
        />
        {!showDropdown && <h3>Filter</h3>}
        {showDropdown && <Dropdown />}
      </div>

      <div className="grid grid-cols-4 gap-5">
        {filteredItems?.map((item: any) => (
          <Card
            key={item.id}
            id={item.id}
            img={item.images[0]}
            price={item.price}
            title={item.title}
            rating={item.rating}
          />
        ))}
      </div>
    </main>
  )
}

export default Products
