import React from 'react'
import { Routes , Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Auth from './Pages/Auth/Auth'
import Questions from './Pages/Questions/Questions'
import AskQuestion from './Pages/AskQuestions/AskQuestion'
import DisplayQuestions from './Pages/Questions/DisplayQuestions'


const AllRoutes = () => {
  return (
  <Routes>
    <Route exact path='/' element={<Home />} />
    <Route exact path='/Auth' element={<Auth />} />
    <Route exact path='/Questions' element={<Questions />} />
    <Route exact path='/AskQuestion' element={<AskQuestion />} />
    <Route exact path='/Questions/:id' element={<DisplayQuestions />} />
  </Routes>
  )
}

export default AllRoutes
