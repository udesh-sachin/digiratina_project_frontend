import React from "react"
import Home from "./pages/Home"
import CreateAccount from "./pages/CreateAccount"
import EditAcoount from './pages/editAccount'
import   "./assets/css/bootstrap.css"
import Navbar from "./components/navbar"
import {Routes,Route} from "react-router-dom"

//sweetalert

// ES6 Modules or TypeScript
import Swal from 'sweetalert2'
// CommonJS

 
 export default function App() {
   return (
     <div className="container">
       <Navbar />
       <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/account/create"  element={<CreateAccount />}/>
         <Route path="/account/:id" element={<EditAcoount />}/> 
       </Routes>   
     </div>
   )
 }
 