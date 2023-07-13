import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { CostPlanning } from './pages/CostPlanning'
import { DateIdea } from './pages/DateIdea'
import { GymCalendar } from './pages/GymCalendar'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/Home" element={<Home />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/CostPlanning" element={<CostPlanning />} />
      <Route path="/DateIdea" element={<DateIdea />} />
      <Route path="/GymCalendar" element={<GymCalendar />} />
    </Routes>
  )
}