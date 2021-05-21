import React from "react";
import { ListGroup, Image } from "react-bootstrap";
import LinkButton from "./LinkButton";

const LinkList = () => {
  const links = [
    "https://docs.google.com/presentation/d/1r9JAXI3UXGQ3AT3hu6cBgOJJMiYquPVyeyxaaKBIgOM/edit?usp=sharing",
    "https://sites.google.com/arbusta.net/plataformas",
    "https://stats.uptimerobot.com/l7g7zf2MGN",
    "https://arbusta.nubeadhoc.com/web#view_type=kanban&model=helpdesk.ticket&action=353&active_id=2&menu_id=231",
    "https://arbusta.nubeadhoc.com/web#action=948&cids=1%2C4%2C5&menu_id=131",
    "https://arbusta.nubeadhoc.com/",
    "https://arbustanet.slack.com/",
    "https://github.com/ArbustaIT",
    "https://gitlab.com/arbustait",
    "http://starmeup.com/login.html",
    "https://magic.ly/ciberarbusta",
  ];

  return (
    <ListGroup>
      <div className="mx-lg-5 mr-3 ml-3 d-flex flex-column align-items-center">
        <Image
          alt="logo"
          width="200"
          height="150"
          src={`${process.env.PUBLIC_URL}/pla-team01.svg`}
          className="mb-3"
        />
        <h5 className="mb-4 text-white">#plataformas_it</h5>
        {links.map((link) => (
          <LinkButton key={link} link={link} />
        ))}
      </div>
    </ListGroup>
  );
};

export default LinkList;
