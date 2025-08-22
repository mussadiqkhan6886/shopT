import StarIcon from '@mui/icons-material/Star';
import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
    id: string
    img: string,
    price: string,
    title: string,
    rating: string
}

const Card = React.memo(({id, img, price, title, rating}: Props) => {
  return (
    <Link to={`/product/${id}`}>
        <div className="bg-gray-100 min-h-[260px] hover:bg-gray-200 duration-300 flex flex-col items-center p-3 shadow-2xl">
        <div className="bg-gray-200 w-full mb-2">
            <img className='w-[150px]' width={150} height={150} src={img} alt={title} />
        </div>
        <div className="flex gap-2 justify-between w-full">
            <div className='text-left'>
                <h3 className='font-semibold'>{title}</h3>
                <p className='font-extralight'>${price}</p>
            </div>
            <p className='flex gap-1 items-top font-extralight'><StarIcon style={{fontSize: "20px", color: "yellow"}} /> {rating}</p>
        </div>
        </div>
    </Link>
  )
})

export default Card
