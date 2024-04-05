import React, { useRef, useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

import Logo from './assest/Logo.svg'
import Sec2 from './assest/Sec_2_img.svg'
import BatcaveText from './assest/BatcaveText.svg'
import BatcaveTextSec3 from './assest//BatcaveTextSec3.svg'
import Sec3Card from './assest/Sec3_Card.svg'
import Car1 from './assest/Car_1.svg'
import Car2 from './assest/Car_2.svg'
import Car3 from './assest/Car_3.svg'
import Car4 from './assest/Car_4.svg'
import Car5 from './assest/Car_5.svg'
import Car6 from './assest/Car_6.svg'

import Icon1 from './assest/Frame(7).svg'
import Icon2 from './assest/Frame(8).svg'
import Icon3 from './assest/Frame(9).svg'
import Icon4 from './assest/Frame(10).svg'
import Icon5 from './assest/Frame@2x.svg'

import Phone from './assest/iPhone.svg'
import Sec6Img from './assest/Sec_6_BG.svg'
import BatLogo from './assest/BatLogo.svg'
import Insta from './assest/instagram.svg'
import Mail from './assest/mail.svg'
import Wtsapp from './assest/whatsapp.svg'
import Close from './assest/close.svg'
import HomeNav from './homeNav';

import Count from './Countdown/count';
import './homeNew.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import RefundPolicy from "./Refund/refundPolicy";
import PrivacyPolicy from "./Privacy/privacy";
import FAQ from "./FAQ/faq";
import TermsConditions from "./Terms&Condition/terms";






function Home() {


  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page when component mounts
  }, []);

  const navigateTo = (path) => {
    window.scrollTo(0, 0); // Scrolls to the top of the page when navigating
    navigate(path);
  };


  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const scrollRef1 = useRef(null);
  const scrollRef2 = useRef(null);

  useEffect(() => {
    let scrollInterval1;
    let scrollInterval2;

    const handleMouseEnter1 = () => {
      clearInterval(scrollInterval1); // Pause scrolling for the first container
      setIsHovered1(true);
    };

    const handleMouseLeave1 = () => {
      setIsHovered1(false);
    };

    const handleMouseEnter2 = () => {
      clearInterval(scrollInterval2); // Pause scrolling for the second container
      setIsHovered2(true);
    };

    const handleMouseLeave2 = () => {
      setIsHovered2(false);
    };

    const startScrolling1 = () => {
      scrollInterval1 = setInterval(() => {
        if (scrollRef1.current && !isHovered1) {
          scrollRef1.current.scrollTop += 1; // Adjust scroll speed as needed
          // Check if reached the end of the scroll, then reset to the top
          if (scrollRef1.current.scrollTop + scrollRef1.current.clientHeight >= scrollRef1.current.scrollHeight) {
            scrollRef1.current.scrollTop = 0;
          }
        }
      }, 50); // Scroll speed for the first container: 50 milliseconds
    };

    const startScrolling2 = () => {
      scrollInterval2 = setInterval(() => {
        if (scrollRef2.current && !isHovered2) {
          scrollRef2.current.scrollTop += 1; // Adjust scroll speed as needed
          // Check if reached the end of the scroll, then reset to the top
          if (scrollRef2.current.scrollTop + scrollRef2.current.clientHeight >= scrollRef2.current.scrollHeight) {
            scrollRef2.current.scrollTop = 0;
          }
        }
      }, 50); // Scroll speed for the second container: 100 milliseconds
    };

    startScrolling1(); // Start scrolling for the first container
    startScrolling2(); // Start scrolling for the second container

    // Add event listeners for the first scroll container
    if (scrollRef1.current) {
      scrollRef1.current.addEventListener('mouseenter', handleMouseEnter1);
      scrollRef1.current.addEventListener('mouseleave', handleMouseLeave1);
    }

    // Add event listeners for the second scroll container
    if (scrollRef2.current) {
      scrollRef2.current.addEventListener('mouseenter', handleMouseEnter2);
      scrollRef2.current.addEventListener('mouseleave', handleMouseLeave2);
    }

    // Clean up event listeners and interval when the component unmounts
    return () => {
      clearInterval(scrollInterval1);
      clearInterval(scrollInterval2);
      if (scrollRef1.current) {
        scrollRef1.current.removeEventListener('mouseenter', handleMouseEnter1);
        scrollRef1.current.removeEventListener('mouseleave', handleMouseLeave1);
      }
      if (scrollRef2.current) {
        scrollRef2.current.removeEventListener('mouseenter', handleMouseEnter2);
        scrollRef2.current.removeEventListener('mouseleave', handleMouseLeave2);
      }
    };
  }, [isHovered1, isHovered2]);



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
      <div className='container-fluid bg-image1'>

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

        {/* <HomeNav/> */}

        <div className='row sec1_layout' >
          <div className='col-lg-6'>
            <div>Gateway to making every car lover’s dream a reality!</div>
            <div>Why wait, when you can be a
              <span className='BatcaveHover' onClick={() => navigateToAnchor('pre-book')}> BATCAVE <b>OG</b></span>

            </div>
          </div>
          <Count />

        </div>
      </div>

      {/* Section 2 */}

      <div className='container-fluid bg-image2 '>
        <div className='d-lg-flex  justify-content-lg-start '>
          <div className='col-lg-6 '>
            <img src={Sec2} className="sec2Img img-fluid" alt='img' />
          </div>

          <div className='col-lg-6 text-center mx-lg-5'>
            <div className='Sec2Head'>
              What's <span className='mx-2'> <img src={BatcaveText} className='pb-1 pl-2' alt='img' /></span>
            </div>
            <div className='Sec2Content' >
              Batcave is the ultimate destination that any gearhead id looking for.
              Yes, it’s not for possession, but for passion.
              We don’t care if you own a car or not. If your passion is aligned,
              dive inside our community, we got you covered.
            </div>
          </div>
        </div>
        <div id='pre-book'></div>
      </div>


      {/* PreBook Section-3 */}
      <div className='container-fluid bg-image3' >
        <div className='row'>
          <div className='col sec3Content'   >

            <div className='Sec3Content'>
              <div className='Prebook' >PRE-BOOK</div>
              <img src={BatcaveTextSec3} className='pb-1 pl-2' alt='img' />
              <div>Register as BATCAVE OG. It’s more than a membership.
                It’s you your hub to ultimate car enthusiast lifestyle.
                Join us today as we speed into the future together.
              </div>
            </div>
            <div className='secCount'>
              <Count />
            </div>
          </div>
          <div className='col-lg-6'>
            <img src={Sec3Card} className='' alt='img' />

          </div>
        </div>

        <div className='row Sec4Header'>
          <div className='col-lg-6'>
            Experience an unforgettable thrill
          </div>
          <div className='col-lg-6 d-block'>
            <div className='Seize'>
              Seize the opportunity to ride exotic cars on a racing circuit.
              Book now and be a part of the thrill, exclusively available as an add on only for OGs.
            </div> <br />
            <button disabled >SLOT BOOKING - COMING SOON</button>
          </div>

          <div className='row carContainer'>
            <div className='col text-center'>

              <div className='cars'>
                <img src={Car1} className='' alt='img' />
                <div>porsche 718 cayman</div>
              </div>

              <div className='cars'>
                <img src={Car2} className='' alt='img' />
                <div>Aston martin vantage</div>
              </div>

              <div className='cars'>
                <img src={Car3} className='' alt='img' />
                <div>Mercedes benz gle amg </div>
              </div>

              <div className='cars'>
                <img src={Car4} className='' alt='img' />
                <div>Ford mustang 5.0</div>
              </div>

              <div className='cars'>
                <img src={Car5} className='' alt='img' />
                <div>Audi rs5</div>
              </div>

              <div className='cars'>
                <img src={Car6} className='' alt='img' />
                <div>bmw m3</div>
              </div>

            </div>
          </div>
        </div>

        <div id='club-benefits'></div>

      </div>

      <div className='container-fluid Sec5Header'>

        <div className='row'>

          <div className='col d-block clubBenifits'>
            <div> <span>CLUB</span> BENEFITS</div>
            <div>Its not just a club, it’s a consortium of fun & opportunities.</div>
          </div>

          <div className='row scrollContainer1'>

            <div className='col-lg-6'>
              <div className='Access Monetary'>Access to exclusive events</div>
              <div className='ScrollHeading1'>Unlock Batcave's Exclusive Perks and Camaraderie Reserved Just for You!</div>
            </div>


            {/* <div className='col-lg-6 innerScrollContainer text-right'>

              <div  ref={scrollRef} className='innerScrollLayout pb-5' style={{ height: '200px', overflowY: 'scroll' }}>

                <div className='d-flex justify-content-between scrollHead'>
                  <div className='m-0'>Car Meet</div>
                  <div className='text-right'>01</div>
                </div>

                <div className='pb-2'>Join us ! Network with fellow enthusiasts, showcase your ride, and immerse yourself in a supportive community where you can learn, share knowledge, and stay updated about automotive technology.</div>
              </div>

              <div className='innerScrollLayout pb-5'>
                <div className='d-flex justify-content-between scrollHead'>
                  <div className='m-0 '>Car Shows</div>
                  <div className='text-right'>02</div>
                </div>
                <div className='pb-2'>Experience the dynamic showcase of automotive craftsmanship, where enthusiasts gather to admire, discuss, and celebrate all things automotive. From classic beauties to modern marvels. And also flaunt your vehicle, connect with fellow enthusiasts.</div>
              </div>

              <div className='innerScrollLayout pb-5'>
                <div className='d-flex justify-content-between scrollHead'>
                  <div className='m-0 '>Track Experiences</div>
                  <div className='text-right'>03</div>
                </div>
                <div className='pb-2'>Experience the thrill of exotic car performance on the track. exclusive track days where you can push the limits of iconic supercars, forge unforgettable memories. Don't just dream about driving exotic cars – make it a reality with our track experiences</div>
              </div>

              <div className='innerScrollLayout pb-5'>
                <div className='d-flex justify-content-between scrollHead'>
                  <div className='m-0 '>Road Trips</div>
                  <div className='text-right'>04</div>
                </div>
                <div className='pb-2'>Road trips for thrilling adventures with expert guidance and safety ensured by our dedicated medical crew and assist team. Unforgettable memories await as we explore scenic routes, bond over campfires, and forge lifelong friendships.</div>
              </div>


            </div> */}

            <div className='col-lg-6 innerScrollContainer text-right'>
              <div className='innerScrollLayout' style={{ height: '200px', overflowY: 'scroll' }}>
                <div className='innerScrollContent pb-5'>
                  <div className='d-flex justify-content-between scrollHead'>
                    <div className='m-0'>Car Meet</div>
                    <div className='text-right'>01</div>
                  </div>
                  <div className='pb-2'>Join us! Network with fellow enthusiasts, showcase your ride, and immerse yourself in a supportive community where you can learn, share knowledge, and stay updated about automotive technology.</div>
                </div>

                <div className='innerScrollContent pb-5'>
                  <div className='d-flex justify-content-between scrollHead'>
                    <div className='m-0 '>Car Shows</div>
                    <div className='text-right'>02</div>
                  </div>
                  <div className='pb-2'>Experience the dynamic showcase of automotive craftsmanship, where enthusiasts gather to admire, discuss, and celebrate all things automotive. From classic beauties to modern marvels. And also flaunt your vehicle, connect with fellow enthusiasts.</div>
                </div>

                <div className='innerScrollContent pb-5'>
                  <div className='d-flex justify-content-between scrollHead'>
                    <div className='m-0 '>Track Experiences</div>
                    <div className='text-right'>03</div>
                  </div>
                  <div className='pb-2'>Experience the thrill of exotic car performance on the track. exclusive track days where you can push the limits of iconic supercars, forge unforgettable memories. Don't just dream about driving exotic cars – make it a reality with our track experiences</div>
                </div>

                <div className='innerScrollContent pb-5'>
                  <div className='d-flex justify-content-between scrollHead'>
                    <div className='m-0 '>Road Trips</div>
                    <div className='text-right'>04</div>
                  </div>
                  <div className='pb-2'>Road trips for thrilling adventures with expert guidance and safety ensured by our dedicated medical crew and assist team. Unforgettable memories await as we explore scenic routes, bond over campfires, and forge lifelong friendships.</div>
                </div>
              </div>
            </div>


          </div>

          <div className='row scrollContainer2'>
            <div className='col-lg-6'>
              <div className='Monetary'>Monetary Benefits</div>
              <div className='ScrollHeading2'>Unlocking the Advantage : Explore the Benefits of Batcave </div>
            </div>


            {/* <div className='col-lg-6 innerScrollContainer2 text-right' ref={innerContainerRef}>

              <div className='innerScrollLayout pb-5'>
                <div className='d-flex justify-content-between scrollHead'>
                  <div className='m-0 '>car services</div>
                  <div className='text-right'>01</div>
                </div>
                <div className='pb-2'>Enjoy up to a 15% discount on car services! Unlock exclusive savings while benefiting from expert maintenance and care for your car.</div>
              </div>

              <div className='innerScrollLayout pb-5'>
                <div className='d-flex justify-content-between scrollHead'>
                  <div className='m-0 '>new car purchase</div>
                  <div className='text-right'>02</div>
                </div>
                <div className='pb-2'>Exclusive 10% discount on new car purchases! save big on your next speeding machine. On Purchase over our virtual garage.</div>
              </div>

              <div className='innerScrollLayout pb-5'>
                <div className='d-flex justify-content-between scrollHead'>
                  <div className='m-0 '>events & Products</div>
                  <div className='text-right'>03</div>
                </div>
                <div className='pb-2'>Unlock standard discounts on events and products, enriching your experience with exclusive savings. Whether attending thrilling car rallies or purchasing quality merchandise.</div>
              </div>

            </div> */}

            <div className='col-lg-6 innerScrollContainer text-right'>
              <div className='innerScrollLayout' style={{ height: '200px', overflowY: 'scroll' }}>
                <div className='innerScrollContent pb-5'>
                  <div className='d-flex justify-content-between scrollHead'>
                    <div className='m-0'>Car services</div>
                    <div className='text-right'>01</div>
                  </div>
                  <div className='pb-2'>Enjoy up to a 15% discount on car services! Unlock exclusive savings while benefiting from expert maintenance and care for your car.</div>
                </div>

                <div className='innerScrollContent pb-5'>
                  <div className='d-flex justify-content-between scrollHead'>
                    <div className='m-0 '>new car purchase</div>
                    <div className='text-right'>02</div>
                  </div>
                  <div className='pb-2'>Exclusive 10% discount on new car purchases! save big on your next speeding machine. On Purchase over our virtual garage.</div>
                </div>

                <div className='innerScrollContent pb-5'>
                  <div className='d-flex justify-content-between scrollHead'>
                    <div className='m-0 '>events & Products</div>
                    <div className='text-right'>03</div>
                  </div>
                  <div className='pb-2'>Unlock standard discounts on events and products, enriching your experience with exclusive savings. Whether attending thrilling car rallies or purchasing quality merchandise.</div>
                </div>
              </div>
            </div>

          </div>

        </div>


        <div className='row' id='virtual-garage'>
          <div className='col-lg-6 VGCol'>
            <div className='d-flex'>
              <img src={BatcaveText} className='pb-1.5 pl-2' alt='img' />
              <div className='vgText'>virtual garage</div>
            </div>
            <div className='VirtualGarage'>Batcave’s virtual garage is where your car stays. Our seamless application provide a wide range of accessibility & enable members to easily involve in club activities from anywhere.</div>


            <div className='VirtualGarageLists'>

              <div className='d-flex gap-2 mb-4'>
                <img src={Icon1} alt='img' width={25} />
                <div>Manage Vehicle & its documents</div>
              </div>

              <div className='d-flex gap-2 mb-4'>
                <img src={Icon5} alt='img' width={25} />
                <div>Manage & Redeem reward points</div>
              </div>

              <div className='d-flex gap-2 mb-4'>
                <img src={Icon2} alt='img' width={25} />
                <div>Explore & Book events</div>
              </div>

              <div className='d-flex gap-2 mb-4'>
                <img src={Icon3} alt='img' width={25} />
                <div>Manage Profile</div>
              </div>

              <div className='d-flex gap-2 mb-4'>
                <img src={Icon4} alt='img' width={25} />
                <div>Browse Batcave’s handpicked used cars</div>
              </div>
            </div>

          </div>
          <div className='col-lg-6 phoneImg'>
            <img className="img-fluid" src={Phone} alt='img' />
          </div>
        </div>

      </div>

      <div className='container-fluid Sec6Header' >
        <img className='carFooter' src={Sec6Img} alt='Img' />

        <div className='FooterNav'>
          <div className='col'>
            <img className="batlogo" src={BatLogo} alt='Img' />
          </div>

          <div className='col nav-container'>

            <nav>
              <ul className="d-flex align-items-center justify-content-center justify-content-lg-end mb-0">
                <li>
                  <a href="#home" className={activeNavItem === 'home' ? 'pl-3 active' : 'pl-3'} onClick={() => handleNavClick('home')}>HOME</a>
                </li>
                <li><span className="dot">.</span></li>
                <li>
                  <a href="#pre-book" className={activeNavItem === 'pre-book' ? 'active' : ''} onClick={() => handleNavClick('pre-book')}>PRE-BOOK</a>
                </li>
                <li><span className="dot">.</span></li>
                <li>
                  <a href="#club-benefits" className={activeNavItem === 'club-benefits' ? 'active' : ''} onClick={() => handleNavClick('club-benefits')}>CLUB BENEFITS</a>
                </li>
                <li><span className="dot">.</span></li>
                <li>
                  <a href="#virtual-garage" className={activeNavItem === 'virtual-garage' ? 'active' : ''} onClick={() => handleNavClick('virtual-garage')}>VIRTUAL GARAGE</a>
                </li>
                <li><span className="dot">.</span></li>
                <li>
                  <a href="#contact" className={activeNavItem === 'contact' ? 'active' : ''} onClick={() => handleNavClick('contact')}>CONTACT</a>
                </li>
              </ul>
            </nav>

          </div>

          <div className='col icons-container'>
            <a href="https://www.instagram.com/batcave.club?igsh=MTF5MmV2N2RjNG56cg==" target="_blank" rel="noopener noreferrer">

              <img src={Insta} alt='Instagram' />
            </a>
            <a href="mailto:info@batcave.club" target="_blank" >
              <img src={Mail} alt='Email' />
            </a>
            <a href="https://wa.me/7550057267" target="_blank">
              <img src={Wtsapp} alt='WhatsApp' />
            </a>
          </div>
        </div>

      </div>

      <div className='container-fluid Footer' id='HomeFooter'>
        <div className='row' id='contact' >
          <div className='col-lg-6' >
            Copyright © 2022 - 2024 Invicious Automotive (P) Ltd
          </div>
          <div className='col-lg-6 footerlinks'>
            <nav>
              <ul className="d-flex align-items-center justify-content-center justify-content-lg-end mb-0">
                <li onClick={() => navigateTo('/faq')}>
                  FAQs
                </li>
                
                <li><span className="line">|</span></li>
                <li onClick={() => navigateTo('/terms&Condition')}>Terms & conditions</li>
                <li><span className="line">|</span></li>
                <li onClick={() => navigate('/privacy-policy')}>Privacy policy</li>
                <li><span className="line">|</span></li>
                <li onClick={() => navigate('/refund-policy')}>Refund policy</li>
              </ul>
            </nav>

            {/* <nav>
              <ul className="d-flex align-items-center justify-content-center justify-content-lg-end mb-0">
                <li>
                  <Link onClick={() => navigateTo('/faq')}>FAQs</Link>
                </li>
                <li><span className="line">|</span></li>
                <li>
                  <Link to="/terms&Condition">Terms & conditions</Link>
                </li>
                <li><span className="line">|</span></li>
                <li>
                  <Link to="/privacy-policy">Privacy policy</Link>
                </li>
                <li><span className="line">|</span></li>
                <li>
                  <Link to="/refund-policy">Refund policy</Link>
                </li>
              </ul>
            </nav> */}

          </div>

        </div>
      </div>

    </>
  );
}

export default Home;
