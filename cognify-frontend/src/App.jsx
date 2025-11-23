import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Signup from './components/Signup'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import CareerAssessment from './components/CareerAssessment'
import CareerResults from './components/CareerResults'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* Landing page when you open the website */}
        <Route path="/" element={<Hero />} />

        {/* Auth pages */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Post-login dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Career assessment page */}
        <Route path="/career-assessment" element={<CareerAssessment />} />
        <Route path="/career-results" element={<CareerResults />} />
        <Route path="/colleges" element={<CareerResults />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App
