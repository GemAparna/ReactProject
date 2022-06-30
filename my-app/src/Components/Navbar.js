import React from 'react';
import image from '../Components/favicon.png';
import 'bootstrap/dist/css/bootstrap.min.css';


function Navbar(props) {
    return (
<div className="header" id="myHeader">
   <nav className="navbar navbar-expand-lg bg-success navbar-dark">
  <div className="container-fluid">
    <div className='mx-3' ><img src={image}/></div>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-3">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"><h2><i>Gemini Solutions Dashboard</i></h2></a>
        </li>
      </ul> 
    </div>
  </div>
</nav>
</div>
    );
}

export default Navbar;