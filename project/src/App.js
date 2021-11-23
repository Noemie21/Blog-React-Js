import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import LoginPage from './Pages/Login'
import {StoreProvider} from './Providers/StoreProvider'
import { Navbar, Container, Nav } from 'react-bootstrap';



function App() {
  return (
    <StoreProvider>

      <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/login">Login</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
      <BrowserRouter>
          <Routes>
              <Route path="/login" element={<LoginPage/>} > </Route>
          </Routes>
      </BrowserRouter>

    </StoreProvider>
  );
}

export default App;
