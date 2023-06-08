import './App.css'
import Header from '../Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainPage from '../../pages/MainPage'
import ProductsPage from '../../pages/ProductsPage'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="container">
          <Header />
          <Routes>
            <Route path="/" element={<MainPage />}></Route>
            <Route path="/products-list" element={<ProductsPage />}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
