import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Skills from './pages/Skills'
import Work from './pages/Work'
import Contact from './pages/Contact'
import Header from './components/layout/Header'


function App() {
 

  return (
    <div className="bg-black text-white h-full">
      <Header/>

      <Routes >

        <Route path='/' element={<Home />} />

        <Route path='/skills' element={<Skills />} />

        <Route path='/work' element={<Work />} />        
        
        <Route path='/contact' element={<Contact />} />

      </Routes>
      
    </div>
  )
}

export default App
