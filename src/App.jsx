import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import LocalService from '../pages/LocalService'
import NotFound from '../pages/NotFound'
import './assets/global.css'
function App() {
  useEffect(() => {
    document.title = 'EVA - Juntos por una ciudad limpia' 
  },[])
  return (
    <BrowserRouter>
        <Routes>
          <Route path='*' element={<NotFound/>} />
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/inicio' element={<Home/>} />
          <Route exact path='/servicio-al-ciudadano' element={<LocalService/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
