import { createContext, useState, type ReactElement } from "react";

interface ContextType {
    query: string
    setQuery: React.Dispatch<React.SetStateAction<string>>
    max: number | string
    setMax: React.Dispatch<React.SetStateAction<number | string>>
    min: number | string
    setMin: React.Dispatch<React.SetStateAction<number | string>>
    category : string
    setCategory: React.Dispatch<React.SetStateAction<string>>
    keyword: string
    setKeyword: React.Dispatch<React.SetStateAction<string>>
    reset: undefined
    setReset : React.Dispatch<React.SetStateAction<undefined>>
    filter: string
    setFilter: React.Dispatch<React.SetStateAction<string>>
}

export const filteringContext = createContext<ContextType | null>(null)


const ContextProvider = ({children}: {children: ReactElement}) => {

    const [query, setQuery] = useState('')
    const [max, setMax] = useState<number | string>('')
    const [min, setMin] = useState<number | string>('')
    const [category, setCategory] = useState('')
    const [keyword, setKeyword] = useState('')
    const [reset, setReset] = useState()
    const [filter, setFilter] = useState("")

    return <filteringContext.Provider value={{query, setQuery, max, setMax, min, setMin, category, setCategory, keyword, setKeyword, reset,setReset, filter, setFilter}}>
        {children}
    </filteringContext.Provider>
}

export default ContextProvider