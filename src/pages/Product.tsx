import { useParams } from "react-router-dom"
import { useGetProductByIdQuery } from "../api/apiSlice"
import StarIcon from '@mui/icons-material/Star';

const Product = () => {
  const {id} = useParams()

  const {data: item} = useGetProductByIdQuery(id)

  console.log(item)
  return (
    <div>
      <header>
        <h1>shopT</h1>
      </header>
      <button>Back</button>
      <section>
        <div>
          <img src={item.thumbnail} />
          <h1>{item.title}</h1>
          <p>{item.description}</p>
          <div>
            <span>Price: ${item.price}</span>
            <span>Rating: 
              <StarIcon style={{fontSize: "20px", color: "yellow"}} /> 
               {item.rating}</span>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Product
