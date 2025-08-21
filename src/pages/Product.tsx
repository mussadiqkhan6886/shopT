import { useParams, useNavigate } from "react-router-dom"
import { useGetProductByIdQuery } from "../api/apiSlice"
import StarIcon from "@mui/icons-material/Star"
import PopularProducts from "../components/Popular"
import Loading from "../components/Loading"

const Product = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { data: item, isLoading, isError } = useGetProductByIdQuery(Number(id))

  if (isLoading) return <h2 className="text-center mt-10 text-gray-600"><Loading /></h2>
  if (isError) return <h2 className="text-center mt-10 text-red-500">Error fetching product</h2>
  if (!item) return <h2 className="text-center mt-10 text-gray-600">Item not found</h2>

  return (
    <div className="p-5">
      {/* Top Bar */}
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">shopT</h1>
        <button
          onClick={() => navigate(-1)}
          className="px-4 py-2 cursor-pointer rounded-lg bg-gray-800 text-white hover:bg-black transition"
        >
          Back
        </button>
      </header>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Product Details */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-md p-6">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Image */}
            <div className="flex-shrink-0 w-full md:w-1/2 flex justify-center">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="rounded-xl max-h-[350px] object-contain"
              />
            </div>

            {/* Info */}
            <div className="flex-1">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">{item.title}</h2>
              <p className="text-gray-600 mb-4">{item.description}</p>

              <div className="flex items-center gap-3 mb-3">
                <span className="text-xl font-bold text-green-600">${item.price}</span>
                <span className="flex items-center gap-1 text-yellow-600">
                  <StarIcon style={{ fontSize: "20px" }} /> {item.rating}
                </span>
              </div>

              <p className="text-gray-500 text-sm mb-1">
                <span className="font-medium">Brand:</span> {item.brand}
              </p>
              <p className="text-gray-500 text-sm mb-1">
                <span className="font-medium">Category:</span> {item.category}
              </p>
              <p className="text-gray-500 text-sm mb-1">
                <span className="font-medium">Stock:</span> {item.stock} available
              </p>
              <p className="text-gray-500 text-sm mb-1">
                <span className="font-medium">Warranty:</span> {item.warrantyInformation}
              </p>
              <p className="text-gray-500 text-sm mb-1">
                <span className="font-medium">Shipping:</span> {item.shippingInformation}
              </p>
              <p className="text-gray-500 text-sm mb-1">
                <span className="font-medium">Return Policy:</span> {item.returnPolicy}
              </p>
              <p className="text-gray-500 text-sm mb-1">
                <span className="font-medium">Dimensions:</span>{" "}
                {item.dimensions.width} x {item.dimensions.height} x {item.dimensions.depth} cm
              </p>
              <p className="text-gray-500 text-sm">
                <span className="font-medium">Weight:</span> {item.weight}g
              </p>

              <button className="mt-6 w-full py-3 bg-gray-800 text-white rounded-lg hover:bg-black transition">
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <aside className="bg-white rounded-2xl shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Customer Reviews</h3>
          {item.reviews && item.reviews.length > 0 ? (
            <div className="space-y-4">
              {item.reviews.map((review, index) => (
                <div
                  key={index}
                  className="border-b pb-3 last:border-b-0 last:pb-0"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-medium text-gray-700">{review.reviewerName}</span>
                    <span className="flex items-center text-yellow-600">
                      <StarIcon style={{ fontSize: "16px" }} /> {review.rating}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-1">"{review.comment}"</p>
                  <p className="text-xs text-gray-400">
                    {new Date(review.date).toLocaleDateString()}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">No reviews yet.</p>
          )}
        </aside>
      </div>
      <PopularProducts />
    </div>
  )
}

export default Product
