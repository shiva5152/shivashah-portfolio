import React from "react";
const css = "/tech/css.png";
const github_tech = "/tech/github_tech.png";
const postman = "/tech/postman.png";
const cpp = "/tech/cpp.png";
const git = "/tech/git.png";
const html = "/tech/html.png";
const javascript = "/tech/javascript.png";
const mongodb = "/tech/mongodb.png";
const nodejs = "/tech/nodejs.png";
const reactjs = "/tech/reactjs.png";
const redux = "/tech/redux.png";
const tailwind = "/tech/tailwind.png";
const threejs = "/tech/threejs.svg";

const techStack = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },

  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Postman",
    icon: postman,
  },
  {
    name: "github",
    icon: github_tech,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "cpp",
    icon: cpp,
  },
];

const Tech = () => {
  return (
    <div>
      <div className="row g-4">
        {techStack.map((tool, index) => (
          <div
            key={index}
            className="col-lg-3 col-md-4 col-sm-6 wow animate fadeInDown"
            data-wow-delay="200ms"
            data-wow-duration="1500ms"
          >
            <div className="tools-card">
              <div className="tools-icon">
                <img src={tool.icon} alt="" style={{ width: "22px" }} />
              </div>
              <div className="tools-name">
                <span> {tool.name} </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tech;
