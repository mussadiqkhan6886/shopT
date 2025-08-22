// apiSlice.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const BASE_URL = "https://dummyjson.com"

export interface Review {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
}

export interface Dimensions {
  width: number;
  height: number;
  depth: number;
}

export interface Meta {
  createdAt: string;
  updatedAt: string;
  barcode: string;
  qrCode: string;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: Dimensions;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: Review[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: Meta;
  images: string[];
  thumbnail: string;
}

export interface ProductResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

type ProductsQueryArg = { category?: string; filter?: "asc" | "desc" | string };

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getProducts: builder.query<ProductResponse, ProductsQueryArg | void>({
      query: (args) => {
        const { category, filter } = (args as ProductsQueryArg) ?? {};
        if (category) {
          return `/products/category/${category}?sortBy=price&order=${filter ?? "asc"}`;
        }
        if (filter) {
          return `/products?sortBy=price&order=${filter}`;
        }
        return "/products";
      },
      keepUnusedDataFor: 300
    }),

    getProductById: builder.query<Product, number>({
      query: (id: number) => `/products/${id}`,
    }),

    getProductCategories: builder.query<string[], void>({
      query: () => "/products/category-list",
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useGetProductCategoriesQuery,
} = apiSlice;
