import React from "react";
import { Button, Card } from "react-bootstrap";
import { Icon } from "@iconify/react";
import gitIcon from "@iconify/icons-simple-icons/git";

const ProjectCard = (props) => {
  return (
    <Card className="col-12 col-md6 col-lg-3 mb-4 mx-3 mw-3">
      <Card.Body style={{ color: "black" }}>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <Card.Text>
          <strong>Language / Stack: </strong>
          {props.languages}
        </Card.Text>
      </Card.Body>
      <div className="d-flex flex-row justify-content-around mb-3">
        <Button variant="outline-primary" href={props.repo} target="_blank">
          <Icon icon={gitIcon} />
        </Button>
        {props.url !== "" && (
          <Button variant="outline-success" href={props.url} target="_blank">
            It's live!
          </Button>
        )}
      </div>
    </Card>
  );
};

export default ProjectCard;
