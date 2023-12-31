import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={5} className="mx-auto" style={{ paddingTop: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hello there!!!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                🌟
                </span>
                <span className="wave" role="img" aria-labelledby="wave">
                🤩
                </span>
                <span className="wave" role="img" aria-labelledby="wave">
                🌟
                </span>
              </h1>

              <h1 className="heading-name">
                I am
                <strong className="main-name"> Hrithik Prativadi Bhayankara</strong>
              </h1>

              <div style={{ paddingTop: 10, paddingBottom: 50, textAlign: "right" }}>
                <Type />
              </div>
            </Col>

          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
