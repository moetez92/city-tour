import React from 'react' ; 
import logo from '../logo.svg';
import './navbar.scss';
function Navbar (){

return  <nav className='navbar'>

<img src={logo} alt="company logo"/>
<ul className="nav-links">

<li ><a href="/" className="link">Home</a></li>
<li ><a href="/" className="link">About</a></li>
<li ><a href="/" className="link active">Tours</a></li>

</ul>

</nav>




}
export default Navbar  ; 