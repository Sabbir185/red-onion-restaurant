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
            
        </div>
    );
};

export default Header;