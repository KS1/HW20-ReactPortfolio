import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am K S 1 from Wonderland.
            <br /> 
            <br />I am working over 20 years in Information Technology.
            <br /> 
            <br /> Managed large portfolio programs and global teams.
            <br /> 
            <br /> Highly experienced in architecting, designing and developing large-scale enterprise EAI and B2B applications.
            <br /> 
            <br /> 
            And, I realized now coding is my passion !!
          </p>
          

          {/* <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Keep coding...!!!"{" "}
          </p> */}
          {/* <footer className="blockquote-footer">K S</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
