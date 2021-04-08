import React from 'react';
import { Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import logo from '../../images/logo.png'
import './Header.css'


const Header = () => {


    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand> <Link to='/' className='navbar-brand'> <img className='logoS' src={logo} alt=""/> </Link> </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Link to='/' className='nav-link mr-3'>Home</Link>
                        <Link to='/cart' className='nav-link mr-3'>Cart</Link>
                        <Link to='/login' className='nav-link mr-3'>Login</Link>
                        <Link to='/signUp' className='nav-link mr-3'>SignUp</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            <div>
                <SearchBar></SearchBar>
            </div>

            <div className="row">
                <div className="col"></div>
                <div className="col-sm-8 col-md-8 col-lg-6 col-xlg-6 mt-3">
                    <Nav variant="tabs" className="justify-content-center">
                        <Nav.Item>
                            <Link to='/breakfast' className='nav-link mr-3 font-weight-bold'>Breakfast</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link to='/lunch' className='nav-link mr-3 font-weight-bold'>Lunch</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link to='/dinner' className='nav-link mr-3 font-weight-bold'>Dinner</Link>
                        </Nav.Item>
                    </Nav>
                </div>
                <div className="col"></div>
            </div>
        </div>
    );
};

export default Header;