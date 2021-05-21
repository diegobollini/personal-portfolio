import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Icon } from "@iconify/react";
import "./WidthLimit.scss";
import githubIcon from "@iconify/icons-simple-icons/github";
import gitlabIcon from "@iconify/icons-simple-icons/gitlab";
import twitterIcon from "@iconify/icons-simple-icons/twitter";
import linkedinIcon from "@iconify/icons-simple-icons/linkedin";
import starshipIcon from "@iconify/icons-simple-icons/starship";
import reactIcon from "@iconify/icons-simple-icons/react";

const LinkButton = (props) => {
  const [icon, setIcon] = useState("");
  useEffect(() => {
    if (props.link.includes("polywork")) {
      setIcon(<Icon icon={starshipIcon} />);
    } else if (props.link.includes("portfolio")) {
      setIcon(<Icon icon={reactIcon} />);
    } else if (props.link.includes("github")) {
      setIcon(<Icon icon={githubIcon} />);
    } else if (props.link.includes("gitlab")) {
      setIcon(<Icon icon={gitlabIcon} />);
    } else if (props.link.includes("twitter")) {
      setIcon(<Icon icon={twitterIcon} />);
    } else if (props.link.includes("linkedin")) {
      setIcon(<Icon icon={linkedinIcon} />);
    }
  }, [props]);
  return (
    <Button
      variant="outline-light"
      href={props.link}
      className="mb-3 max-button"
      size="lg"
      block
      target="_blank"
    >
      {icon}
    </Button>
  );
};

export default LinkButton;
