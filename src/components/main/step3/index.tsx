import classes from "./stepThree.module.sass";

import { faLaptop, faServer, faCube } from "@fortawesome/free-solid-svg-icons";
import { faFigma } from "@fortawesome/free-brands-svg-icons";
import SkillItem from "./skill_item/skillItem";
import { useEffect, useRef } from "react";

const SkillArray = [
  {
    icon: faLaptop,
    title: "FrontEnd",
    description:
      "As a front-end developer, I have a strong foundation in core web development technologies such as HTML, CSS, and JavaScript. I am experienced in using modern front-end frameworks such as React.js, Redux, and Redux Toolkit to create scalable and responsive web applications. I am also proficient in using CSS preprocessors like SCSS/Sass and front-end libraries like Bootstrap and jQuery to create visually stunning and user-friendly interfaces.",
  },
  {
    icon: faServer,
    title: "BackEnd",
    description:
      "I have a solid foundation in core web development technologies such as Node.js, Express.js, and MongoDB. Although I have not yet worked on a real project. While I haven't yet applied these skills to real-world projects, I am passionate about backend development and am eager to gain more experience by working on real projects in the future.",
  },
  {
    icon: faFigma,
    title: "Design",
    description:
      "As a designer, I am familiar with using Figma, a popular design tool, to create user interfaces for web and mobile applications. While my skills are still developing, I am committed to improving and learning more about the software to create high-quality designs.",
  },
  {
    icon: faCube,
    title: "3D",
    description:
      "As a hobbyist, I have been exploring the world of 3D graphics using three.js and Blender. Three.js is a popular JavaScript library used for creating 3D animations and visualizations that can be rendered in the web browser. I am still a junior in using this library, but I have gained an understanding of how to create 3D models, apply textures, and animate them. I have also explored Blender, a 3D modeling and animation software, where I have gained an understanding of how to create 3D models, apply textures, and animate them.",
  },
];

const StepThree: React.FC = () => {
  return (
    <section className={classes.stepThree}>
      <div className={classes.wrapper}>
        <div className={classes.head}>
          <span>What i can</span>
          <h2>Why i am good?</h2>
        </div>
        <div className={classes.body}>
          {SkillArray.map((el, indx) => (
            <SkillItem key={indx} icon={el.icon} title={el.title} description={el.description} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepThree;
