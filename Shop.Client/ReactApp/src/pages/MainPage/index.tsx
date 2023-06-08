import { Route, Link } from 'react-router-dom'

function MainPage() {
  return (
    <>
      <h2 className="title">Shop.Client</h2>
      <p className="text">
        В базе данных находится n товаров общей стоимостью m»
      </p>
      <div className="buttons">
        <Link to="/products-list">Перейти к списку товаров</Link>
        <Link to="/admin">Перейти в систему администрирования</Link>
      </div>
    </>
  )
}

export default MainPage
