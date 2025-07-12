import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Auth from './pages/Auth';
import Layout from './layout/Layout';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';



function App() {

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/account/login" element={<Auth />} />
          <Route path="/account/signup" element={<Auth />} />
          <Route path='/services' element={<Services />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/dashboard' element={<Dashboard />} />

          <Route path='*' element={<div>404 Not Found</div>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App