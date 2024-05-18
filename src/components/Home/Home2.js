import React from "react";
import { Link } from 'react-router-dom';
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
<<<<<<< HEAD
              DEVOPS IS MY <span className="purple">JAM!</span> 
=======
              DEVOPS IS MY <span className="purple">SUPERPOWER</span> 
>>>>>>> 9694b2d03a0894684aa9db74a896b464e49e97bd
            </h1>
            <p className="home-about-body">
              My passion for cloud and DevOps fuels my drive to build innovative solutions. I bring a strong foundation in network administration to the table, ensuring a smooth and optimized experience.  
              <br />
              <br />
              <b>Key Skills:</b>
              <ul>
                <li>AWS</li>
                <li>Kubernetes (k8's)</li>
                <li>Agile Methodologies</li>
                <li>Linux</li>
                <li>Blockchain Exploration</li>
              </ul>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row className="home-about-social">
  <Col md={12}>
  <h1>
              <Link to="/Projects.js"><span className="purple">CHECK OUT MY PROJECTS</span></Link>
            </h1>


            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/issachenderson47"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/issachenderson"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/issachenderson"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/issachenderson"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
