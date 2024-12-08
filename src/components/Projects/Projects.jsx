import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import gemini from "../../Assets/Projects/gemini.png";
import workflow from "../../Assets/Projects/workflow.png";
import opticam from "../../Assets/Projects/opticam.png";
import windsor from "../../Assets/Projects/windsor.png";
import portfolio from "../../Assets/Projects/portfolio.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gemini}
              isBlog={false}
              title="Gemini Clone"
              description="created Gemini clone with Gemini API and React as a good practice of using API's."
              ghLink="https://github.com/hikamran/gemini"
              demoLink="https://hikamran.github.io/gemini/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={workflow}
              isBlog={false}
              title="Uni Workflow"
              description="Design Landing page in React as a practice of one page Website"
              ghLink="https://github.com/hikamran/workFlow"
              demoLink="https://hikamran.github.io/workFlow/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={windsor}
              isBlog={false}
              title="Windsor Consultancy"
              description="A client Website for buisness and travelling agency. This website is created in WordPress Theme using Elementor, Jquery and JS. Multipages Website"
              ghLink="/"
              demoLink="https://demo.opticamstudio.com/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={opticam}
              isBlog={false}
              title="Opticamstudio"
              description="We specialize in turning your milestones into lasting memories. From the joy of weddings and engagements to timeless portraits and professional headshots. A client Website for his buisness"
              ghLink="/"
              demoLink="https://opticamstudio.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Portfolio"
              description="My portfolio showcases my journey and skills in web and app development. With a focus on creating seamless user experiences, I specialize in building dynamic, responsive websites using React and other modern technologies."
              ghLink="https://github.com/hikamran/portfolio"
              demoLink="https://hikamran.github.io/portfolio/" 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
