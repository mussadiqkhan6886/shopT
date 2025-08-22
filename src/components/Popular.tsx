    import { useGetProductsQuery } from "../api/apiSlice"
import Card from "./Card"
import Loading from "./Loading"

const PopularProducts = () => {
  const { data: items, isLoading, isError } = useGetProductsQuery({})

  if (isLoading) return <Loading />
  if (isError) return <h2>Error fetching products</h2>

  // sort by rating & take top 4
  const popular = items?.products
  ? [...items.products].sort((a, b) => b.rating - a.rating).slice(0, 4)
  : [];

  return (
    <section className="mt-10 p-4">
      <h2 className="text-2xl font-bold mb-5">Popular Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
        {popular?.map((item: any) => (
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

export default PopularProducts
