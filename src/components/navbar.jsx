import React from 'react'
import {Link} from "react-router-dom"

export default function navbar() {
  return (
    // <nav className="navbar navbar-dark bg-dark mb-3 mt-2">
    //     <Link to ="/">
    //         <div className="nav-link">Home</div>
    //     </Link>
    //     <Link to="/account/create">
    //         <div className="nav-link">Create Account</div>
    //     </Link>

    // </nav>
    <nav class="navbar navbar-expand-lg bg-dark ">
  <div class="container-fluid">
    <a class="navbar-brand"  >ABC Bank</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
       
       <Link to ="/">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page"  >Home</a>
        </li>
        </Link>

        <Link to="/account/create">
        <li class="nav-item">
          <a class="nav-link">Create Account</a>
        </li>
        </Link>
         
        
      </ul>
      
    </div>
  </div>
</nav>

  )
}
