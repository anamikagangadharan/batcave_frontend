import { Navbar, Nav, Container } from 'react-bootstrap';
import React, { useRef, useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Logo from './assest/Logo.svg';
import Close from './assest/close.svg'


const HomeNav = () => {

    const navigate = useNavigate();

    const [activeNavItem, setActiveNavItem] = useState('home'); // Default active state is 'home'
    const [expanded, setExpanded] = useState(false);
    const navRef = useRef(null);
  
    // Function to handle click on navigation item
    const handleNavClick = (navItem) => {
      setActiveNavItem(navItem);
      setExpanded(false);
      // Update active state based on clicked item
    };
  
    const innerContainerRef = useRef(null);
  
    const handleDocumentClick = () => {
      // Scroll the inner container
      const innerContainer = innerContainerRef.current;
      if (innerContainer) {
        innerContainer.scrollBy({ top: 100, behavior: 'smooth' }); // Scroll by 100px, adjust as needed
      }
    };
  
    // Attach click event listener to the entire document
    React.useEffect(() => {
      document.addEventListener('click', handleDocumentClick);
  
      return () => {
        document.removeEventListener('click', handleDocumentClick);
      };
    }, []);
  
    function navigateToAnchor(anchor) {
      window.location.hash = anchor;
    }
    return (
      <>
         <Navbar expand="lg" id='home' expanded={expanded} onToggle={() => setExpanded(!expanded)}>
          <Container fluid >
            <Navbar.Brand href="#home">
              <img

                src={Logo}
                alt="Logo"
                height="30"
                className="d-inline-block align-top headerLogo"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <img className='navclose' src={Close} alt='' onClick={() => setExpanded(false)} />
              <Nav className="mr-auto ml-auto">
                <Nav.Link href="#home" className={activeNavItem === 'home' ? 'pl-3 active' : 'pl-3'} onClick={() => handleNavClick('home')}>HOME</Nav.Link>
                <span className="dot">.</span>
                <Nav.Link href="#pre-book" className={activeNavItem === 'pre-book' ? 'active' : ''} onClick={() => handleNavClick('pre-book')}>PRE-BOOK</Nav.Link>
                <span className="dot">.</span>
                <Nav.Link href="#club-benefits" className={activeNavItem === 'club-benefits' ? 'active' : ''} onClick={() => handleNavClick('club-benefits')}>CLUB BENEFITS</Nav.Link>
                <span className="dot">.</span>
                <Nav.Link href="#virtual-garage" className={activeNavItem === 'virtual-garage' ? 'active' : ''} onClick={() => handleNavClick('virtual-garage')}>VIRTUAL GARAGE</Nav.Link>
                <span className="dot">.</span>
                <Nav.Link href="#contact" className={activeNavItem === 'contact' ? 'active' : ''} onClick={() => handleNavClick('contact')}>CONTACT</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
      );
    };
    
    export default HomeNav;