import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
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
      LET ME <span className="purple"> INTRODUCE </span> MY SKILLS
    </h1>
    <p className="home-about-body">
      I have expertise in the following technologies:
      <br />
      <br />I am proficient in
      <i>
        <b className="purple"> HTML, CSS, JavaScript, and ReactJS. </b>
      </i>
      <br />
      <br />
      My skills also include working with
      <i>
        <b className="purple"> Bootstrap </b> and other modern CSS frameworks.
      </i>
      <br />
      <br />
      I specialize in developing high-performance and responsive
      <i>
        <b className="purple"> Web Applications </b>
      </i>
      using
      <i>
        <b className="purple"> ReactJS and React Router.</b>
      </i>
      <br />
      <br />
      I am also experienced in state management with
      <i>
        <b className="purple"> Redux and Context API.</b>
      </i>
      <br />
      <br />
      Additionally, I work with APIs and integrate third-party services in
      <i>
        <b className="purple"> ReactJS applications. </b>
      </i>
      <br />
      <br />
      I am continuously improving my skills in
      <i>
        <b className="purple"> Web Development </b> and keeping up with the
        latest technologies.
      </i>
    </p>
  </Col>
  <Col md={4} className="myAvtar">
    <Tilt>
      <img src={myImg} className="img-fluid" alt="avatar" />
    </Tilt>
  </Col>
</Row>

        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/hikamran/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/Kamiray001/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/muhammad-kamran-b48916218/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/kamiray001/"
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
