import { useState } from "react"
import { useGetProductsQuery } from "../api/apiSlice"
import usefilterContext from "../hooks/usefilterContext"

const SideBar = () => {
    const [keywords] = useState([
        "Apple", "Watch", "Fashion", "Trend", "Shoes", "Shirt"
    ])
    const {query, setQuery, min, setMin, setMax, max, setCategory, category, setKeyword, setFilter} = usefilterContext()
    const {data: products} = useGetProductsQuery({category})
    const categories = Array.from(new Set(products?.products?.map((product: []) => product.category)))

    const handleReset = () => {
        setQuery("")
        setCategory("")
        setFilter("")
    }

  return (
    <header className="max-w-[300px] bg-gray-100 py-4 px-3 fixed h-full ">
      <h1 className="font-bold text-2xl mb-10">shopT</h1>
      <form>
        <input className="border-gray-300 border text-gray-600 placeholder:text-gray-400 px-2 py-1 w-full outline-none" type="text" placeholder="Search Product" value={query} onChange={e => setQuery(e.target.value)}  />
        <div className="flex gap-2 my-3">
            <input className="border-gray-300 border text-gray-600 placeholder:text-gray-400 py-1 px-2 outline-none w-full" min={0} type="number" placeholder="Max" value={max} onChange={e => setMax(Number(e.target.value))} />
            <input className="border-gray-300 border text-gray-600 placeholder:text-gray-400 py-1 px-2 outline-none w-full" min={0} type="number" placeholder="Min" value={min} onChange={e => setMin(Number(e.target.value))} />
        </div>
        <h2 className="font-semibold mb-1">Categories</h2>
        {categories.map((cat, index) => (
            <label className="flex gap-2 font-extralight cursor-pointer" key={index}>
                <input value={cat} onClick={e => setCategory(e.target.value)} type="radio" name="category"  />
                {cat.toUpperCase()}
                <br />
            </label>
        ))}
      </form>
      <h2 className="font-semibold my-2">Keywords</h2>
        {keywords.map((item, index) => (
            <ul key={index}>
                <li className="font-extralight">
                    <button name={item} onClick={(e) => setKeyword(e.target.name)} className="cursor-pointer mb-1">{item.toUpperCase()}</button>
                </li>
            </ul>
        ))}
        <button className="bg-gray-800 font-extralight text-white w-full py-2 mt-3 hover:font-normal cursor-pointer hover:bg-black duration-200" onClick={handleReset}>Reset Filters</button>
    </header>
  )
}

export default SideBar
