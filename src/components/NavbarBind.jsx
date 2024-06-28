import React from 'react'

const NavbarBind = () => {
  return (
    <div>

<nav class="navbar navbar-expand-lg bg-body-tertiary ">
  <div class="container-fluid">
    <Link class="navbar-brand" to="/">COPYCRAFT STUDIO</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        
        <li class="nav-item">
          <Link class="nav-link" to="/Binding">BINDING</Link>
        </li>
      
        <li class="nav-item ">
          <Link class="nav-link" to="/searchbind">SEARCH BIND</Link>
        </li>
       
        <li class="nav-item ">
          <Link class="nav-link" to="/userbindview">USER BIND VIEW</Link>
        </li>
        
        
      </ul>
    </div>
  </div>
</nav>


    </div>
  )
}

export default NavbarBind