import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import AuthenticationPage from './Pages/AuthenticationPage'
import CartPage from './Pages/CartPage'
import CheckoutPage from './Pages/CheckoutPage'

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/auth" element={<AuthenticationPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
    </Routes>
  )
}

export default App
