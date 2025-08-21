import { lazy, Suspense } from 'react'
import Loading from '../components/Loading'

const Products = lazy(() => import("../components/Products"))
const SideBar = lazy(() => import("../components/SideBar"))

const Shop = () => {
  return (
    <div className='flex'>
      <Suspense fallback={<Loading />}>
        <SideBar />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <Products />
      </Suspense>
    </div>
  )
}

export default Shop
