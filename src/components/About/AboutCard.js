import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello all, I am <span className="purple">Hrithik Prativadi Bhayankara</span>,
            from <span className="purple"> Hyderabad, India.</span> I am a masters student pursuing computer science at Indiana University Bloomington. Additionally, I completed my Bachelor of Technology in Computer Science and Engineering at MIT ADT University.
          </p>
          <br />
          <br />
          <p style={{ textAlign: "justify" }}>My expertise spans a wide spectrum of technical skills, including proficiency in programming languages like JavaScript, Python, C++, and more. I have hands-on experience with popular frameworks such as ReactJS, NodeJS, Django, and possess a strong foundation in data science tools along with machine learning techniques.</p>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
