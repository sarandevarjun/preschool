import "./App.css";
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
function App() {
  return (
    <div className="container-xxl bg-white p-0">
      <BrowserRouter>
        <Navbar
          bg="white"
          expand="lg"
          sticky="top"
          className="px-4 px-lg-5 py-lg-0"
        >
          <Navbar.Brand href="index.html">
            <h1 className="m-0 text-primary">
              <i className="fa fa-book-reader me-3"></i>Kider
            </h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarCollapse" />
          <Navbar.Collapse id="navbarCollapse">
            <Nav className="mx-auto">
              <Nav.Link href="index.html" className="active">
                Home
              </Nav.Link>
              <Nav.Link href="about.html">About Us</Nav.Link>
              <Nav.Link href="classes.html">Classes</Nav.Link>
              <NavDropdown title="Pages" id="navbarDropdown">
                <NavDropdown.Item href="facility.html">
                  School Facilities
                </NavDropdown.Item>
                <NavDropdown.Item href="team.html">
                  Popular Teachers
                </NavDropdown.Item>
                <NavDropdown.Item href="call-to-action.html">
                  Become A Teacher
                </NavDropdown.Item>
                <NavDropdown.Item href="appointment.html">
                  Make Appointment
                </NavDropdown.Item>
                <NavDropdown.Item href="testimonial.html">
                  Testimonial
                </NavDropdown.Item>
                <NavDropdown.Item href="404.html">404 Error</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="contact.html">Contact Us</Nav.Link>
            </Nav>
            <Button
              href=""
              className="btn btn-primary rounded-pill px-3 d-none d-lg-block"
            >
              Join Us<i className="fa fa-arrow-right ms-3"></i>
            </Button>
          </Navbar.Collapse>
        </Navbar>

        <Routes>
          <Route path="/index.html" exact Component={Home} />
          <Route path="/about.html" Component={About} />
          <Route path="/contact.html" Component={Contact} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
