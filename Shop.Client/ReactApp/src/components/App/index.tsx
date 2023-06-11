import './App.css'
import Header from '../Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainPage from '../../pages/MainPage'
import ProductsPage from '../../pages/ProductsPage'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { URL } from '../../const'
import { IProduct } from '../../../../../Shared/types'

function App() {
  const [products, setProducts] = useState<IProduct[]>([])

  const sumPrice = () => {
    let sum = 0
    products.forEach((product) => (sum += product.price))
    return sum
  }

  useEffect(() => {
    const req = axios.get(`${URL}/api/products`)
    req.then((data) => setProducts(data.data))
  }, [])
  return (
    <BrowserRouter>
      <div className="App">
        <div className="container">
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <MainPage
                  productsCount={products.length}
                  sumPrice={sumPrice()}
                />
              }
            />
            <Route path="/products-list" element={<ProductsPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
