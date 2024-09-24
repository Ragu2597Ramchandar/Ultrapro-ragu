import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import logo from '../assets/imgs/logo.png';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <Container>
        {/* Using d-flex and justify-content-between to spread content */}
        <Row className="d-flex justify-content-between">
          {/* Logo and description column */}
          <Col md={2} sm={12} className="mb-3">
            <Image src={logo} />
            <p className="mt-3">
              The Ultrapro Blockchain is a global, decentralized network with developers.
            </p>
          </Col>

          {/* Explore Column */}
          <Col md={2} sm={12} className="mb-3">
            <h5>Explore</h5>
            <ul className="list-unstyled">
              <li className='mt-2'><a href="#support" className="text-white nav-link">UPRO Explorer</a></li>
              <li className='mt-3'><a href="#faq" className="text-white nav-link">Exchange</a></li>
              <li className = "mt-3"><a href="#contact" className="text-white nav-link">Wallet</a></li>
              <li className = "mt-3"><a href="#contact" className="text-white nav-link">DeFi</a></li>
              <li className = "mt-3"><a href="#contact" className="text-white nav-link">Payments</a></li>
              <li className = "mt-3"><a href="#contact" className="text-white nav-link">NFT</a></li>
            </ul>
          </Col>

          {/* Build Column */}
          <Col md={2} sm={12} className="mb-3">
            <h5>Build</h5>
            <ul className="list-unstyled">
              <li className = "mt-3"><a href="#crypto" className="text-white nav-link">Expo</a></li>
              <li className = "mt-3"><a href="#market" className="text-white nav-link">Whitepaper</a></li>
              <li className = "mt-3"><a href="#earn" className="text-white nav-link">services</a></li>
              <li className = "mt-3"><a href="#earn" className="text-white nav-link">Token</a></li>
              <li className = "mt-3"><a href="#earn" className="text-white nav-link">Staking</a></li>
              <li className = "mt-3"><a href="#earn" className="text-white nav-link">Events</a></li>
            </ul>
          </Col>

          {/* Community Column */}
          <Col md={2} sm={12} className="mb-3">
            <h5>Community</h5>
            <ul className="list-unstyled">
              <li className = "mt-3"><a href="#facebook" className="text-white nav-link">Save Crypto</a></li>
              <li className = "mt-3"><a href="#twitter" className="text-white nav-link">Telegram</a></li>
              <li className = "mt-3"><a href="#linkedin" className="text-white nav-link">Instagram</a></li>
              <li className = "mt-3"><a href="#linkedin" className="text-white nav-link">Facebook</a></li>
              <li className = "mt-3"><a href="#linkedin" className="text-white nav-link">Youtube</a></li>
              <li className = "mt-3"><a href="#linkedin" className="text-white nav-link">X</a></li>
              <li className = "mt-3"><a href="#linkedin" className="text-white nav-link">Medium</a></li>
            </ul>
          </Col>

          {/* About Column */}
          <Col md={2} sm={12} className="mb-3">
            <h5>About</h5>
            <ul className="list-unstyled">
              <li className = "mt-3"><a href="#privacy" className="text-white nav-link">Privacy Policy</a></li>
              <li className = "mt-3"><a href="#terms" className="text-white nav-link">Terms of Use</a></li>
              <li className = "mt-3"><a href="#careers" className="text-white nav-link">Careers</a></li>
              <li className = "mt-3"><a href="#contact" className="text-white nav-link">Contact Us</a></li>
              <li className = "mt-3"><a href="#blog" className="text-white nav-link">Blog</a></li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
