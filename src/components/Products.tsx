import { useGetProductsQuery } from "../api/apiSlice"
import usefilterContext from "../hooks/usefilterContext"
import FilterListIcon from "@mui/icons-material/FilterList"
import Card from "./Card"
import Dropdown from "./Dropdown"
import { useState } from "react"

const Products = () => {
  const { query, category, filter } = usefilterContext()
  const { data: items } = useGetProductsQuery({ category, filter })

  const [showDropdown, setShowDropdown] = useState(false)

  const filteredItems = items?.products?.filter((item: any) =>
    item.title.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <section className="p-2 pl-[310px] py-5">
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
    </section>
  )
}

export default Products
