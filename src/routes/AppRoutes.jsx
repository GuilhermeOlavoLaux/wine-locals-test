import { Routes, Route } from 'react-router-dom'
import Restaurants from '../components/Restaurants'


export default function AppRoutes() {

  return (
    <Routes>
      <Route path="/" element={<Restaurants />} />
    </Routes>
  )
}