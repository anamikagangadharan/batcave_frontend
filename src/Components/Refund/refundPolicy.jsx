import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../assest/Logo.svg';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Close from '../assest/close.svg'

import './refund.css'


function RefundPolicy() {


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
      <div className='container-fluid RefundContainer'>

        <Navbar expand="lg" id='home' expanded={expanded} onToggle={() => setExpanded(!expanded)}>
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

        <div className='row RefundContent'>
          <div>
            Return and Refund Policy
          </div>

          <div>Last updated: March 27, 2024</div>   {/* 2  */}


          <div>Thank you for shopping at Batcave.</div>
          <div>If, for any reason, You are not completely satisfied with a purchase We invite You to review our policy on refunds and returns.</div>
          <div>The following terms are applicable for any products that You purchased with Us.</div>


          <div>Interpretation and Definitions</div>  {/* 6  */}
          <div>Interpretation</div>  {/* 7 */}

          <div>The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</div>


          <div>Definitions</div>  {/* 9 */}
          <div>For the purposes of this Return and Refund Policy:</div>  {/* 10  */}

          <ul>
            <li>Company (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to Invicious Automotive (P) Ltd., 28/1, Fourth Floor, Arima Wakelfield, Avinashi Road, Peelamedu, Coimbatore - 641004.</li>
            <li>Goods refer to the items offered for sale on the Service.</li>
            <li>Orders mean a request by You to purchase Goods from Us.</li>
            <li>Service refers to the Website.</li>
            <li>Website refers to Batcave, accessible from <a href='https://www.batcave.club'>https://www.batcave.club</a></li>
            <li>You means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</li>
          </ul>


          <div>Your Order Cancellation Rights</div>  {/* 12  */}

          <div>You are entitled to cancel Your Order within 7 days without giving any reason for doing so.</div>
          <div>The deadline for cancelling an Order is 7 days from the date on which You received the Goods or on which a third party you have appointed, who is not the carrier, takes possession of the product delivered.</div>
          <div>In order to exercise Your right of cancellation, You must inform Us of your decision by means of a clear statement. You can inform us of your decision by:</div>
          <ul><li>By email: <a href="mailto:info@batcave.club">info@batcave.club</a> </li></ul>
          <div>We will reimburse You no later than 14 days from the day on which We receive the returned Goods. We will use the same means of payment as You used for the Order, and You will not incur any fees for such reimbursement.</div>


          <div>Conditions for Returns</div>  {/* 18  */}

          <div>In order for the Goods to be eligible for a return, please make sure that:</div>
          <ul>
            <li>The Goods were purchased in the last 7 days</li>
            <li>The Goods are in the original packaging</li>
          </ul>

          <div>The following Goods cannot be returned:</div>
          <ul>
            <li>Digital Products including membership.</li>
            <li>The supply of Goods made to Your specifications or clearly personalized.</li>
            <li>The supply of Goods which according to their nature are not suitable to be returned, deteriorate rapidly or where the date of expiry is over.</li>
            <li>The supply of Goods which are not suitable for return due to health protection or hygiene reasons and were unsealed after delivery.</li>
            <li>The supply of Goods which are, after delivery, according to their nature, inseparably mixed with other items.</li>

          </ul>

          <div>We reserve the right to refuse returns of any merchandise that does not meet the above return conditions in our sole discretion.</div>
          <div>Only regular priced Goods may be refunded. Unfortunately, Goods on sale cannot be refunded. This exclusion may not apply to You if it is not permitted by applicable law.</div>


          <div>Returning Goods</div>  {/* 25  */}

          <div>You are responsible for the cost and risk of returning the Goods to Us. You should send the Goods at the following address:</div>
          <div>28/1, Fourth Floor, Arima Wakefield, Avinashi Road, Peelamedu, Coimbatore - 641004</div>
          <div>We cannot be held responsible for Goods damaged or lost in return shipment. Therefore, We recommend an insured and trackable mail service. We are unable to issue a refund without actual receipt of the Goods or proof of received return delivery.</div>


          <div>Gifts</div> {/* 29  */}

          <div>If the Goods were marked as a gift when purchased and then shipped directly to you, You'll receive a gift credit for the value of your return. Once the returned product is received, a gift certificate will be mailed to You.</div>
          <div>If the Goods weren't marked as a gift when purchased, or the gift giver had the Order shipped to themselves to give it to You later, We will send the refund to the gift giver.</div>


          <div>Contact Us</div> {/* 32  */}

          <div>If you have any questions about our Returns and Refunds Policy, please contact us:</div>
          <ul><li>By email:<a href="mailto:info@batcave.club">info@batcave.club</a></li></ul>

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

export default RefundPolicy;