import React from 'react'
import { Link } from 'react-router-dom'

const Navbarcover = () => {
  return (
    <div>
<ul class="nav nav-pills ">
  <li class="nav-item ms-auto">

  <div class="btn-group" role="group">
    <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
      Login
    </button>
    <ul class="dropdown-menu">
      <li><Link class="dropdown-item" to="/login">User Login</Link></li>
      <li><Link class="dropdown-item" to="/adminlogin">Admin Login</Link></li>
    </ul>
  </div>

  </li>
</ul>
    </div>
  )
}

export default Navbarcover