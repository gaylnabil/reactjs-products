// import { Link } from "react-router-dom";
// import css from './navigation.module.css'
// import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import { useContext } from "react";
import FavoritesContext from './../../ammo/favorites-context'
// Using CSS in JS
// const navStyle = {
//   backgroundColor: "#e3f2fd",
// };

const MainNavigation = () => {
    const favContext = useContext(FavoritesContext);
    return (
      <Navbar collapseOnSelect expand="lg" className="navbar-dark bg-primary">
        <Container>
          <Link className="navbar-brand" to="/">React Products</Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Link className="nav-link" to="/">Products</Link>
              <Link className="nav-link" to="/new-product">New Product</Link>
              <Link className="nav-link"to="/favorites">Favorites <span className="badge bg-danger">{favContext.total}</span></Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}


export default MainNavigation;


// <header className="main-nav">
//         <div>Navigation of Products</div>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/">All Products</Link>
//             </li>
//             <li>
//               <Link to="/new-meetup">New Product</Link>
//             </li>
//             <li>
//               <Link to="/favorites">Favorites</Link>
//             </li>
//           </ul>
//         </nav>
//       </header>