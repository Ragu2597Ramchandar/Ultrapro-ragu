import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Image } from 'react-bootstrap';
import React, { useState } from 'react';
import logo from '../assets/imgs/logo.png';
import banner from '../assets/imgs/banner.png';
import Announcement from './switchedComponents/Announcement';
import PressRelease from './switchedComponents/PressRelease';
import Footer from './Footer';

const HomeComponent = () => {
  const [activeLink, setActiveLink] = useState('');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <React.Fragment>
      {/* Existing Navbar */}
      <Navbar expand="lg" className="bg-nav" fixed="top">
        <Container fluid>
          <Navbar.Brand href="#">
            <Image src={logo} className="mx-5" alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0 mx-5" style={{ maxHeight: '100px' }} navbarScroll>
              <Nav.Link href="#home" className="text-white">Home</Nav.Link>
              <Nav.Link href="#ecosystem" className="text-white">EcoSystem</Nav.Link>
              <Nav.Link href="#about" className="text-white">About Us</Nav.Link>
              <Navbar.Brand href="#blog" className="blog-css fw-bold">Blog</Navbar.Brand>
              <Nav.Link href="#token" className="text-white">Token</Nav.Link>
              <Nav.Link href="#expo" className="text-white">Expo</Nav.Link>
              <Nav.Link href="#enterprises" className="text-white">Enhanced Enterprises</Nav.Link>
            </Nav>
            <Form className="d-flex mx-3">
              <Button variant=" me-2" className="btn-whitepaper">WhitePaper</Button>
              <Button className="me-2 btn-contact mx-3">Contact Us</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Banner Section */}
      <Container className="banner-container d-flex justify-content-center align-items-center">
        <Image src={banner} alt="Banner" className="banner-img" />
      </Container>

      {/* Bordered Box with Links */}
      <Container className="d-flex justify-content-center">
        <div className="bordered-box">
          {['Announcement', 'Press Release', 'Market Updates', 'Earn', 'Cryptocurrencies'].map((link, index) => (
            <span
              key={index}
              onClick={() => handleLinkClick(link)}
              className={`bordered-link mx-3 ${activeLink === link ? 'active-link' : ''}`}
            >
              {link}
            </span>
          ))}
        </div>
      </Container>
      <Container>
      <h1 className="text-white mb-4 text-center mt-2">INDIA'S MOST TRUSTED BITCOIN & CRYPTO BLOG</h1>
        {activeLink === 'Announcement' && <Announcement/>}
        {activeLink === 'Press Release' && <PressRelease/>}
      </Container>
      <Footer/>
    </React.Fragment>
  );
};

export default HomeComponent;
