import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import LoginPage from './Pages/LoginPage'
import SignInPage from './Pages/SignInPage'
import UserPage from './Pages/UserPage'
import {StoreProvider} from './Providers/StoreProvider'
import { Navbar, Container, Nav } from 'react-bootstrap';
import ArticlesPage from './Pages/ArticlesPage';
import SingleArticlePage from './Pages/SingleArticlePage';
import CategoriesPage from './Pages/CategoriesPage';



function App() {
  return (
    <StoreProvider>

      <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/signin">SignIn</Nav.Link>
              <Nav.Link href="/login">Login</Nav.Link>
              <Nav.Link href="/user">User</Nav.Link>
              <Nav.Link href="/articles">Articles</Nav.Link>
              <Nav.Link href="/articles/categories">Categories</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
      <BrowserRouter>
          <Routes>
            <Route path="/signin" element={<SignInPage/>} > </Route>
            <Route path="/login" element={<LoginPage/>} > </Route>
            <Route path="/user" element={<UserPage/>} > </Route>
            <Route path="/articles" element={<ArticlesPage/>} > </Route>
            <Route path="/articles/:id" element={<SingleArticlePage/>} > </Route>
            <Route path="/articles/categories" element={<CategoriesPage/>} > </Route>
          </Routes>
      </BrowserRouter>

    </StoreProvider>
  );
}

export default App;
