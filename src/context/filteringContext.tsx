import { createContext, useState, type ReactElement } from "react";

interface ContextType {
    query: string
    setQuery: React.Dispatch<React.SetStateAction<string>>
    max: number
    setMax: React.Dispatch<React.SetStateAction<number>>
    min: number
    setMin: React.Dispatch<React.SetStateAction<number>>
    category : string
    setCategory: React.Dispatch<React.SetStateAction<string>>
    keyword: string
    setKeyword: React.Dispatch<React.SetStateAction<string>>
    reset: undefined
    setReset : React.Dispatch<React.SetStateAction<undefined>>
}

export const filteringContext = createContext<ContextType | null>(null)


const ContextProvider = ({children}: {children: ReactElement}) => {

    const [query, setQuery] = useState('')
    const [max, setMax] = useState(0)
    const [min, setMin] = useState(0)
    const [category, setCategory] = useState('')
    const [keyword, setKeyword] = useState('')
    const [reset, setReset] = useState()

    return <filteringContext.Provider value={{query, setQuery, max, setMax, min, setMin, category, setCategory, keyword, setKeyword, reset,setReset}}>
        {children}
    </filteringContext.Provider>
}

export default ContextProvider