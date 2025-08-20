import Product from "./pages/Product"
import Shop from "./pages/Shop"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

const App = () => {
  return (
    <>
    <Router>
      <Routes>
      <Route path="/" element={<Shop />} />
      <Route path="/product/:id" element={<Product />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
