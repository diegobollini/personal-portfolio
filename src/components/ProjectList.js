import React from "react";
import ProjectCard from "./ProjectCard";

const ProjectList = () => {
  const projects = [
    {
      name: "La Libre website",
      url: "https://lalibrecf.com.ar",
      repo: "https://gitlab.com/diegobollini/web-la-libre",
      languages: "HTML, SCSS",
      description:
        "Website of La Libre, a feminist, associative and community bookstore in Rosario (a project of Ciudad Futura).",
    },
    {
      name: "La Libre testing website",
      url: "https://diegobollini.gitlab.io/proyecto-web-la-libre",
      repo: "https://gitlab.com/diegobollini/proyecto-web-la-libre",
      languages: "HTML, SCSS",
      description:
        "Web project for La Libre, a testing website for the Coderhouse web development course.",
    },
    {
      name: "Links like a tree",
      url: "https://diegobollini.gitlab.io/links-like-a-tree",
      repo: "https://gitlab.com/diegobollini/links-like-a-tree",
      languages: "HTML, SCSS",
      description:
        "For testing and learning purposes, I am building a linktree fork.",
    },
    {
      name: "Personal Portfolio with Create React App",
      url: "https://github.com/diegobollini/personal-portfolio",
      repo: "https://github.com/diegobollini/personal-portfolio",
      languages: "React.js",
      description:
        "Exploring react while making a mix between linktr.ee and personal portfolio",
    },
    {
      name: "La Libre Store",
      url: "https://tienda.lalibrecf.com.ar/",
      repo: "https://github.com/diegobollini/la-libre-catalogo",
      languages: "Typescript",
      description:
        "Online catalog and store for La Libre, forked from Goncy's 'Store with whatsapp checkout'.",
    },
    {
      name: "Test Project",
      url: "",
      repo: "https://github.com/diegobollini/",
      languages: "Testing",
      description:
        "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    },
  ];
  return (
    <div className="py-3 d-flex flex-column justify-content-center align-items-center align-content-center">
      <h2 className="mb-3" style={{color: "white"}}>Some things I have been experimenting with...</h2>
      <div className="container">
        <div className="row justify-content-center">
          {projects.map((project, index) => (
            <ProjectCard
            key={index}
            url={project.url}
            name={project.name}
            repo={project.repo}
            languages={project.languages}
            description={project.description}
            />
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
