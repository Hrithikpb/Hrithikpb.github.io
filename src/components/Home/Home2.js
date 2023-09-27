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
              <span className="purple">Me</span>,
              <span className="purple"> myself</span>, and
              <span className="purple"> I</span>.
            </h1>
            <p className="home-about-body">
              <b className="purple">Me</b> - Web designer
              <br />
              <b className="purple">Myself</b> - Web developer
              <br />
              <b className="purple">I</b>  - Machine learning enthusiast
              <br />
              <br />
              In hope to become the
              <i>
                <b className="purple"> best at all the three. </b> Hopefully one
                day.
              </i>
              <br />
              <br />
              "Life is like a&nbsp;
              <i>
                <b className="purple">roller coaster</b>; you have the choice to
                <b className="purple"> shut your eyes in fear</b>, patiently awaiting the ride's end, or to
                conquer your apprehensions, <b className="purple">wholeheartedly embrace the journey</b>,
                and savor each moment." -<b className="purple"> Hrithik P B</b>.
              </i>
              <br />
              <br />
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
            <h1>Connect with me?</h1>
            <p>
              <span className="purple">Don't hesitate to </span>reach out
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/hrithikpb/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://github.com/Hrithikpb"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/hrithikpb/"
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
