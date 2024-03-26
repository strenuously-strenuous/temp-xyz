import { NavLink } from 'react-router-dom'
import './Header.css';

function Header() {
  return ( 
    <>
    <nav
      class="navbar navbar-expand-sm navbar-light bg-light"
    >
      <div class="container">
        <a class="navbar-brand" href="#">Navbar</a>
        <button
          class="navbar-toggler d-lg-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavId">
        <nav className='d-flex gap-5'>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/contact">contact</NavLink>
          <NavLink to="/blog">blog</NavLink>
          <NavLink to="/product">product</NavLink>
        </nav>
       
        </div>
      </div>
    </nav>
    
    </>
   );
}

export default Header;