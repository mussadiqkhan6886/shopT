// apiSlice.ts
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

const BASE_URL = "https://dummyjson.com"

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: ({ category, filter }: { category?: string; filter?: string }) => {
        if (category) {
          return `/products/category/${category}?sortBy=price&order=${filter}`
        }if(filter){
            return `/products?sortBy=price&order=${filter}`
        }
        return "/products"
      },
    }),
    getProductById: builder.query({
      query: (id: number) => `/products/${id}`,
    }),
  }),
})

export const { useGetProductsQuery, useGetProductByIdQuery } = apiSlice
