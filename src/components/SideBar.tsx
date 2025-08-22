import { useEffect, useState } from "react"
import { useGetProductCategoriesQuery } from "../api/apiSlice"
import useDebounce from "../hooks/useDebounce"
import usefilterContext from "../hooks/usefilterContext"
import Loading from "./Loading"

const SideBar = () => {
    const {query, setQuery, min, setMin, setMax, max, setCategory, category, setFilter} = usefilterContext()
    const {data: categories, isLoading, isError} = useGetProductCategoriesQuery()
    const [search, setSearch] = useState(query)
    const debounceValue = useDebounce(search, 300)


    useEffect(() => {
        setQuery(debounceValue)
    }, [debounceValue, setQuery])

    const handleReset = () => {
        setQuery("")
        setCategory("")
        setFilter("")
        setMax("")
        setMin("")
    }

    if(isLoading){
        return <Loading />
    }

    if(isError){
        return <h1>Error</h1>
    }

  return (
    <header className="lg:max-w-[300px] sm:max-w-[270px] max-w-[240px] bg-gray-100 py-4 px-3 fixed h-full overflow-scroll">
      <h1 className="font-bold text-2xl mb-5">shopT</h1>
      <form>
        <input className="border-gray-300 border text-gray-600 placeholder:text-gray-400 px-2 py-1 w-full outline-none" type="text" placeholder="Search Product" value={search} onChange={e => setSearch(e.target.value)}  />
        <div className="flex gap-2 my-3">
            <input className="border-gray-300 border text-gray-600 placeholder:text-gray-400 py-1 px-2 outline-none w-full" min={0} type="number" placeholder="Max" value={max} onChange={e => setMax(Number(e.target.value))} />
            <input className="border-gray-300 border text-gray-600 placeholder:text-gray-400 py-1 px-2 outline-none w-full" min={0} type="number" placeholder="Min" value={min} onChange={e => setMin(Number(e.target.value))} />
        </div>
        <h2 className="font-semibold mb-1">Categories</h2>
        <div className="flex flex-wrap gap-2">
            {categories?.map((cat: string, index: number) => (
                <label
                key={index}
                className={`cursor-pointer px-4 py-2 rounded-full border text-sm
                    transition-all duration-200
                    ${category === cat
                    ? "bg-gray-800 text-white border-black shadow-md"
                    : "bg-white text-gray-600 border-gray-300 hover:bg-gray-100"
                    }`}
                >
                <input
                    type="radio"
                    name="category"
                    value={cat}
                    checked={category === cat}
                    onChange={(e) => setCategory(e.target.value)}
                    className="hidden"
                />
                {cat.toUpperCase()}
                </label>
            ))}
            </div>
      </form>
        <button className="bg-gray-800 font-extralight text-white w-full py-2 mt-3 hover:font-normal cursor-pointer hover:bg-black duration-200" onClick={handleReset}>Reset Filters</button>
    </header>
  )
}

export default SideBar
