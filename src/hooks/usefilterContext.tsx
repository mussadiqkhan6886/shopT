import { useContext } from "react";
import { filteringContext } from "../context/filteringContext";


const usefilterContext = () => {
    const context = useContext(filteringContext)
    if(context) return context
    else{
        throw new Error("Error in context")
    }
}

export default usefilterContext
