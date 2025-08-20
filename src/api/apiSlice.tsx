import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

const BASE_URL = "https://dummyjson.com"


export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => '/products'
        }),
         getProductsByCat: builder.query({
            query: (category) => `./products/category/${category}`
        }),
        getProductById: builder.query({
            query: (id) => `./products/${id}`
        })
    }
       
    )
})

export const {useGetProductsQuery, useGetProductsByCatQuery, useGetProductByIdQuery} = apiSlice

