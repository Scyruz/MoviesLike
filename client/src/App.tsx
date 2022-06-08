import {
  Routes,
  Route,
  Navigate,
  BrowserRouter as Router,
} from "react-router-dom";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import MainPage from "./components/MainPage";
import OtherPage from "./components/OtherPage";

function App() {
  return (
    <div>
      <Router>
        <Navbar
          bg="light"
          expand="lg"
          style={{ position: "fixed", width: "100%", zIndex: "100" }}
        >
          <Container>
            <Navbar.Brand href="/">MoviesLike</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto"></Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Routes>
          <Route path="/" element={<MainPage></MainPage>} />
          <Route path="/other" element={<OtherPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
