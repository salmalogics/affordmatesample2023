import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Navbar.css'
import Logo from '../assets/images/logo.png'

function NavScrollExample() {
  return (
    <div className=" nav-container">
    <Navbar bg="none" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">
          <img src={Logo.png} alt="" srcset="" />

          <h2 className='logo'><b><span className='blue-text'>eX</span><span className='white--text'>Store</span></b></h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1" className='text--styles'><b>Games</b></Nav.Link>
          
            <NavDropdown  className='text--styles' style={{color:'white'}} title={<b>Browse Games</b>} id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#action1"  className='text--styles'><b>Store</b></Nav.Link>
           
          </Nav>
         
          <div className='button--signin--login'>
            <Button variant="outline-primary active" >Sign Up</Button>
       
            <Button variant="outline-primary">Login</Button>
        </div> 
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default NavScrollExample;