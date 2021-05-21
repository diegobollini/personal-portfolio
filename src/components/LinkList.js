import React from "react";
import { ListGroup, Image } from "react-bootstrap";
import LinkButton from "./LinkButton";

const LinkList = () => {
  const links = [
    "https://github.com/diegobollini/personal-portfolio",
    "https://github.com/diegobollini",
    "https://gitlab.com/diegobollini",
    "https://www.linkedin.com/in/diegobollini/",
    "https://twitter.com/diegobollini",
    "https://www.polywork.com/bolli",
  ];

  return (
    <ListGroup>
      <div className="mx-lg-5 mr-3 ml-3 d-flex flex-column align-items-center">
        <Image
          alt="logo"
          width="150"
          height="150"
          src={`${process.env.PUBLIC_URL}/avatar_diego.png`}
          className="mb-3"
        />
        <h5 className="mb-4 text-white">devops in evopslution (?)</h5>
        {links.map((link) => (
          <LinkButton key={link} link={link} />
        ))}
      </div>
    </ListGroup>
  );
};

export default LinkList;
