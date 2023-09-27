import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/churn.svg";
import emotion from "../../Assets/Projects/pd.svg";
import editor from "../../Assets/Projects/hcdr.svg";
import chatify from "../../Assets/Projects/rental.svg";
import suicide from "../../Assets/Projects/ar.svg";
import bitsOfCode from "../../Assets/Projects/custy.svg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My few <strong className="purple">projects</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some of my projects and publications.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Rental and Services Management System "
              description="Developed a successful full-stack web application for efficient rental management, combining Django Python for a robust backend and React.js for an interactive frontend."
              ghLink="https://github.com/Hrithikpb/Quick-Wheels"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Retail Store Analysis"
              description="Created and deployed an RFM (Recency, Frequency, Monetary) analysis system for customer segmentation, enhancing customer engagement. Utilized association rule mining techniques to provide personalized item recommendations, boosting in sales."
              ghLink="https://github.com/Hrithikpb/CustomerAnalytics"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Home credit default risk"
              description="Developed a strong machine learning model to predict loan repayment likelihood. Employed advanced techniques, including feature engineering and hyperparameter tuning, and utilized a variety of algorithms such as Logistic Regression, Random Forest Classifier, Naive Bayes, and Multilayer Perceptron. Achieved an impressive accuracy rate of 92.04% through model optimization using GridSearchCV."
              ghLink="https://github.com/Hrithikpb/HCDR"             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Customer Analytics Research: Utilizing Unsupervised Machine Learning Techniques"
              description="Addressed challenges encountered by small retail stores in adapting to shifting customer behavior and market dynamics. Presented three primary customer analytics techniques: customer churn analysis, customer segmentation, and market basket analysis."
              ghLink="https://link.springer.com/chapter/10.1007/978-981-19-6004-8_41"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Energy Demand Rise forecasting by integrating AR, ARMA, ARIMA, LSTM"
              description="Created an integrated approach by combining multiple machine learning models for precise energy demand forecasting. Showcased the efficacy of AR (AutoRegressive), ARMA (AutoRegressive Moving Average), ARIMA (AutoRegressive Integrated Moving Average), and LSTM (Long Short-Term Memory) models in reducing errors and enhancing prediction accuracy. Accomplished an impressive accuracy rate of 93.92% in forecasting energy demand, effectively addressing a crucial challenge within the energy sector."
              ghLink="http://acors.org/Journal/Papers/Volume2/issue1/vol2_issue1_05.pdf"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Correction in Diagnosis of Parkinson’s Disease with Prediction "
              description="Conducted research aimed at early-stage diagnosis of Parkinson’s disease using patient voice recordings. Gathered electromyography (EMG) data to assess muscle activity and its connection to Parkinson’s disease. Integrated EMG sensors with machine learning techniques, specifically XGBoost, and conducted real-time data collection."
              ghLink="https://www.irjet.net/archives/V8/i2/IRJET-V8I2222.pdf"
            />
          </Col>
          

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Bits-0f-C0de"
              description=""
              ghLink=""
              demoLink=""
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
