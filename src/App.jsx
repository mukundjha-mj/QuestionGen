import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Auth from './pages/Auth';
import Layout from './layout/Layout';
import Services from './pages/Services';



function App() {

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/account/login" element={<Auth />} />
          <Route path="/account/signup" element={<Auth />} />
          <Route path='/services' element={<Services />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App