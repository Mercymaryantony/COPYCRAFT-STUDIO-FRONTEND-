import React from 'react'
import { Link } from 'react-router-dom'

const Navabar = () => {
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
          <Link class="nav-link active" aria-current="page" to="/Printing">PRINT</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/Binding">BINDING</Link>
        </li>
        <li class="nav-item ">
          <Link class="nav-link" to="#">SEARCH</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/view">VIEW</Link>
        </li>
        <li class="nav-item ">
          <Link class="nav-link" to="#">ADMIN VIEW</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navabar