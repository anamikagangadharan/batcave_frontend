import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../assest/Logo.svg';
import './faq.css'
import { Navbar, Nav, Container } from 'react-bootstrap';
import Close from '../assest/close.svg'
import HomeNav from '../homeNav';


function FAQ() {

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

    return (
        <>
            <div className='container-fluid FaqContainer'>


                <Navbar expand="lg" id='home'  expanded={expanded} onToggle={() => setExpanded(!expanded)}>
                    <Container fluid >
                        <Navbar.Brand href="#home">
                            <img
                                src={Logo}
                                alt="Logo"
                                height="30"
                                className="d-inline-block align-top"
                            />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <img className='navclose' src={Close} alt='' onClick={() => setExpanded(false)} />

                            <Nav className="ml-auto">
                                <Nav.Link href="/#home" className={activeNavItem === 'home' ? 'pl-3 active' : 'pl-3'} onClick={() => handleNavClick('home')}>HOME</Nav.Link>
                                <span className="dot">.</span>
                                <Nav.Link href="/#pre-book" className={activeNavItem === 'pre-book' ? 'active' : ''} onClick={() => handleNavClick('pre-book')}>PRE-BOOK</Nav.Link>
                                <span className="dot">.</span>
                                <Nav.Link href="/#club-benefits" className={activeNavItem === 'club-benefits' ? 'active' : ''} onClick={() => handleNavClick('club-benefits')}>CLUB BENEFITS</Nav.Link>
                                <span className="dot">.</span>
                                <Nav.Link href="/#virtual-garage" className={activeNavItem === 'virtual-garage' ? 'active' : ''} onClick={() => handleNavClick('virtual-garage')}>VIRTUAL GARAGE</Nav.Link>
                                <span className="dot">.</span>
                                <Nav.Link href="/#contact" className={activeNavItem === 'contact' ? 'active' : ''} onClick={() => handleNavClick('contact')}>CONTACT</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                {/* <HomeNav/> */}

                <div className='row FaqContent'>

                    <div>FAQs</div>

                    <div>1. Who is eligible to join the Batcave Membership?</div>
                    <div>Anyone who is at least 18 years old and a legal resident of India can join the Batcave Membership.</div>

                    <div>2. How can I join the Batcave Membership?</div>
                    <div>You can join by visiting our website and completing the registration process.</div>

                    <div>3. What is Batcave OG?</div>
                    <div>Members who register on the launch week gets the OG status. OG members get lifetime access to the club membership & do not incur any additional charges for renewal. </div>

                    <div>4. What is Virtual Garage?</div>
                    <div>Batcave virtual garage is an app, that members can use to manage their cars, access details about events and avail discounts & offers on services.</div>

                    <div>5. How long is the membership valid for?</div>
                    <div>Membership is valid for two years from the date of purchase. Renewal fee is ₹1499 INR, except for Batcave OG members who enjoy lifetime membership.</div>

                    <div>6. How can I attend local meetups and special events?</div>
                    <div>All members can attend local meetups, and details about special events will be communicated through official channels and through our virtual garage. </div>

                    <div>7. How do I earn discounts on products and services?</div>
                    <div>Discounts are provided based on the points you accumulate through interactions with the club. Every interaction earns you points.</div>

                    <div>8. What discounts are available for vehicles and services?</div>
                    <div>Up to 15% discounts for car service at our authorized service centers. Up to 10% discounts on new car purchase through our virtual garage. Terms and conditions apply.</div>

                    <div>9. What happens if my membership is canceled?</div>
                    <div>Memberships can be canceled by Batcave for reasons such as misbehavior or violations of group rules. Membership purchases are non-refundable.</div>

                    <div>10. How do I renew my membership?</div>
                    <div>Non-Batcave OG members need to renew their membership every two years. Details on renewal will be provided closer to the expiration date.</div>

                </div>

                <div className='container-fluid Footer' id='HomeFooter'>
                    <div className='row' id='contact' >
                        <div className='col-lg-6' >
                            Copyright © 2022 - 2024 Invicious Automotive (P) Ltd
                        </div>
                        <div className='col-lg-6 footerlinks'>
                            <nav>
                                <ul className="d-flex align-items-center justify-content-center justify-content-lg-end mb-0">
                                    <li onClick={() => navigate('/faq')}>FAQs</li>
                                    <li><span className="line">|</span></li>
                                    <li onClick={() => navigate('/terms&Condition')}>Terms & conditions</li>
                                    <li><span className="line">|</span></li>
                                    <li onClick={() => navigate('/privacy-policy')}>Privacy policy</li>
                                    <li><span className="line">|</span></li>
                                    <li onClick={() => navigate('/refund-policy')}>Refund policy</li>
                                </ul>
                            </nav>

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default FAQ;