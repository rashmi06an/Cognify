import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Signup from './components/Signup'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
<<<<<<< HEAD
import CareerAssessment from './components/CareerAssessment'
=======
import CareerResults from './components/CareerResults'
>>>>>>> 439da3efe8b0b9bdb5d730f56dc56872a4a56262
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
<<<<<<< HEAD

        {/* Career assessment page */}
        <Route path="/career-assessment" element={<CareerAssessment />} />
=======
        <Route path="/career-results" element={<CareerResults />} />
        <Route path="/colleges" element={<CareerResults />} />
>>>>>>> 439da3efe8b0b9bdb5d730f56dc56872a4a56262
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App
