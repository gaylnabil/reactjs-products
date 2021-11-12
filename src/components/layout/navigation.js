// import { Link } from "react-router-dom";
// import css from './navigation.module.css'
// import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

// Using CSS in JS
// const navStyle = {
//   backgroundColor: "#e3f2fd",
// };

const MainNavigation = () => {
 
    return (
      <Navbar collapseOnSelect expand="lg" className="navbar-dark bg-primary">
        <Container>
          <Navbar.Brand href="/">React Products</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Products</Nav.Link>
              <Nav.Link href="/new-meetup">New Product</Nav.Link>
              <Nav.Link href="/favorites">Favorites</Nav.Link>
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