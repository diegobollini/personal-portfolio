import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Icon } from "@iconify/react";
import "./WidthLimit.scss";
import googledriveIcon from "@iconify/icons-simple-icons/googledrive";
import googlesearchconsoleIcon from "@iconify/icons-simple-icons/googlesearchconsole";
import statuspageIcon from "@iconify/icons-simple-icons/statuspage";
import helpdeskIcon from "@iconify/icons-simple-icons/helpdesk";
import pcgamingwikiIcon from "@iconify/icons-simple-icons/pcgamingwiki";
import slackIcon from "@iconify/icons-simple-icons/slack";
import photocrowdIcon from "@iconify/icons-simple-icons/photocrowd";
import githubIcon from "@iconify/icons-simple-icons/github";
import gitlabIcon from "@iconify/icons-simple-icons/gitlab";
import starshipIcon from "@iconify/icons-simple-icons/starship";

const LinkButton = (props) => {
  const [icon, setIcon] = useState("");
  useEffect(() => {
    if (props.link.includes("presentation")) {
      setIcon(<Icon icon={googledriveIcon} />);
    } else if (props.link.includes("sites")) {
      setIcon(<Icon icon={googlesearchconsoleIcon} />);
    } else if (props.link.includes("stats")) {
      setIcon(<Icon icon={statuspageIcon} />);
    } else if (props.link.includes("helpdesk")) {
      setIcon(<Icon icon={helpdeskIcon} />);
    } else if (props.link.includes("menu")) {
      setIcon(<Icon icon={pcgamingwikiIcon} />);
    } else if (props.link.includes("nubeadhoc")) {
      setIcon(<Icon icon={photocrowdIcon} />);
    } else if (props.link.includes("slack")) {
      setIcon(<Icon icon={slackIcon} />);
    } else if (props.link.includes("github")) {
      setIcon(<Icon icon={githubIcon} />);
    } else if (props.link.includes("gitlab")) {
      setIcon(<Icon icon={gitlabIcon} />);
    } else if (props.link.includes("ciber")) {
      setIcon(<Icon icon={starshipIcon} />);
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
