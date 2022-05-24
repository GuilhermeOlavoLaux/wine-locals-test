import { Routes, Route } from 'react-router-dom'
import RestaurantMenu from '../components/RestaurantMenu'
import Restaurants from '../components/Restaurants'


export default function AppRoutes() {

  return (
    <Routes>
      <Route path="/" element={<Restaurants />} />

      <Route path="/restaurant-menu" element={<RestaurantMenu />} />

    </Routes>
  )
}