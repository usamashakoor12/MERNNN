
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import Home from './Components/Home.jsx'
import Navbar from './Components/Navbar.jsx'
import Register from './Components/Register.jsx'
import { Route, Routes } from 'react-router-dom'
import Edit from './Components/Edit.jsx'
import Details from './Components/Details.jsx'



function App() {
  

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/register' element={ <Register/>} />
        <Route path='/edit/:id' element={ <Edit/>} />
        <Route path='/view/:id' element={ <Details/>} />
      </Routes>
     
    </>
  )
}

export default App
