import React from 'react'
import { Link } from 'react-router-dom'

const Navbarcover = () => {
  return (
    <div>
<ul class="nav nav-pills ">
  <li class="nav-item ms-auto">
    <Link class="nav-link active" aria-current="page" to="/login">LOGIN</Link>
  </li>
</ul>
    </div>
  )
}

export default Navbarcover