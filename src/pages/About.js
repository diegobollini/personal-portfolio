import React from "react";
import { ListGroup, Button, Image } from "react-bootstrap";
import "../components/WidthLimit.scss";

const About = () => {
  return (
    <ListGroup>
      <div className="mx-lg-5 mr-3 ml-3 mb-5 d-flex flex-column align-items-center text-center">
        <Image
          alt="logo"
          width="150"
          height="150"
          src={`${process.env.PUBLIC_URL}/profile_diego01.jpg`}
          className="mb-3"
          rounded
        />
        <h4 className="text-white mb-4">
          <strong>About me:</strong>
        </h4>
        <h5 className="text-white mb-5 max-button">
          Information Technology Generalist, formally working in IT since 2016.
          I learn by doing every day, searching and asking those who know what I
          don't know. These days I am studying devops, python and docker /
          kubernetes. I enjoy working in diverse and interdisciplinary teams.
        </h5>
        <Button
          variant="outline-light"
          href={`${process.env.PUBLIC_URL}DiegoBolliniResume.pdf`}
          target="_blank"
          size="lg"
          download
        >
          My 2021 resume
        </Button>
      </div>
    </ListGroup>
  );
};

export default About;
