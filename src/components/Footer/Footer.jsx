import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {
  AiFillGithub,
  AiFillMail,
  AiOutlineTwitter,
  AiFillInstagram,
} from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import logo from '../../assets/sLogo.png';

const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <span>Dedicated to creating impactful solutions!</span>
        </Col>
        <Col md="4" className="footer-copywright">
          <span>Copyright © {year}</span>
          <img src={logo} className="img-fluid logo" alt="brand" />
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/temple-19"
                style={{ color: 'white' }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="github"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://twitter.com/meta_temple2"
                style={{ color: 'white' }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="twitter"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/temple-ozoadibe-793761256/"
                style={{ color: 'white' }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="linkedin"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/_.temple_"
                style={{ color: 'white' }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="instagram"
              >
                <AiFillInstagram />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="mailto:templeozoadibe@outlook.com"
                style={{ color: 'white' }}
                target="_blank"
                rel="noreferrer"
                aria-label="mail"
              >
                <AiFillMail />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
