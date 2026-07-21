import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Agence from './Pages/Agence'
import Project from './Pages/Project'
import Navbar from './components/Navigation/Navbar'
import FullScreenNav from './components/Navigation/FullScreenNav'


const App = () => {

  return (
    <div className=' overflow-hidden '>
    <Navbar/>
    <FullScreenNav />
      <Routes>
        <Route path ='/' element={<Home/>}/>
        <Route path ='/agence' element={<Agence/>}/>
        <Route path ='/projects' element={<Project/>}/>
      </Routes>
    </div>
  )
}

export default App

