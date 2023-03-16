import { useEffect, useState } from "react";

// ** image imports
import Software from "../../assets/images/featuredProjects/Software.ge.png";
import BPO from "../../assets/images/featuredProjects/BPO.png";
import Swingers from "../../assets/images/featuredProjects/Swingers.png";
import Storyhub from "../../assets/images/featuredProjects/StoryHub.png";
import Quizz from "../../assets/images/Quizz.png";
import PasswordGenerator from "../../assets/images/RandomPassword.png";
import FoodOrder from "../../assets/images/FoodOrder.png";
import FindMeals from "../../assets/images/findFood.png";
import Callapp from "../../assets/images/callapp.png";
import Skote from "../../assets/images/skote.png";
import SentoBar from "../../assets/images/SentoBar.png";

// ** style imports
import classes from "./style.module.sass";

const projects = [
  {
    link: "https://software.ge",
    picture: Software,
    title: "Software.ge",
    description: [
      "Javascript, Typescript, React.js, Redux, Redux Toolkit, MUI, Webpack",
      "Responsible for project architecture, doing code reviews",
      "Code optimization",
      "Worked closely with other developers, UX designers, PM, QA",
      "Took part in project planning, analyzing tasks, created pixel perfect designs",
    ],
  },

  {
    link: "https://swingers.club",
    picture: Swingers,
    title: "Swingers.club",
    description: ["Javascript, Typescript, React.js, Redux", "Maintain old code", "performance optimization", "Developing new functionalities & new pages", "Responsible for ADA optimization"],
  },
  {
    link: "https://digitalstoryhub.com",
    picture: Storyhub,
    title: "Digitalstoryhub.com",
    description: ["Javascript, Typescript, React.js, Redux, Context, Styled Components", "Performance optimization", "Refactoring", "Worked closely with other developers, UX designers, PM, QA"],
  },
  {
    link: "https://flatrockoutsourcing.com",
    picture: BPO,
    title: "Flatrockoutsourcing.com",
    description: [
      "HTML, Scss, JQUERY, Javascript",
      "Responsible for project structure, doing code reviews",
      "Code optimization",
      "Worked closely with other developers, UX designers, PM, QA",
      "Took part in project planning, analyzing tasks, created pixel perfect designs",
    ],
  },
  {
    link: "https://donguzashvili.github.io/ReactQuizz/",
    picture: Quizz,
    title: "Test: Quizz",
    description: ["React.js, Css", "Develop template for learning purposes"],
  },
  {
    link: "https://donguzashvili.github.io/RandomPasswordGenerator/",
    picture: PasswordGenerator,
    title: "Test: Random password generator",
    description: ["React.js, Css", "Develop template for learning purposes"],
  },
  {
    link: "https://donguzashvili.github.io/Food-order-app/",
    picture: FoodOrder,
    title: "Test: Food order",
    description: ["React.js, Css", "Develop template for learning purposes"],
  },
  {
    link: "https://donguzashvili.github.io/foodPage/",
    picture: FindMeals,
    title: "Test: Find meals",
    description: ["HTML, Css, Javascript", "Develop template for learning purposes"],
  },
  {
    link: "https://donguzashvili.github.io/LoginPage/",
    picture: Callapp,
    title: "Test: callapp login page",
    description: ["HTML, Css, Javascript", "Develop template for learning purposes"],
  },
  {
    link: "https://donguzashvili.github.io/coding-with-scss/",
    picture: Skote,
    title: "Test: Skote",
    description: ["HTML, Css, Scss", "Develop template for learning purposes", "Everything was built by hand"],
  },
  {
    link: "https://donguzashvili.github.io/Sentobar/",
    picture: SentoBar,
    title: "Test: SENTOBAR",
    description: ["HTML, Css, Bootstrap", "Develop template for learning purposes", "First project"],
  },
];

const ProjectsPage = () => {
  const [data, setData] = useState<typeof projects>([] as typeof projects);

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const newData = projects.filter((el) => el.title.toLowerCase().startsWith(e.currentTarget.value.toLowerCase()));
    setData(newData);
  };

  useEffect(() => {
    setData(projects);
  }, []);

  return (
    <div className={classes.projectsPage}>
      <div className={classes.wrapper}>
        <div className={classes.header}>
          <h5>All Projects</h5>
          <h2>Projects i've done</h2>
        </div>
        <div className={classes.body}>
          <div className={classes.search}>
            <label htmlFor="">
              <input type="text" placeholder="Search for project..." onKeyUp={handleSearch} />
            </label>
          </div>
          <div className={classes.projectContainer}>
            {data.map((el, outerIdx) => (
              <a href={el.link} target="_blank" rel="noreferrer" key={outerIdx}>
                <div className={classes.project}>
                  <div className={classes.projectWrapper}>
                    <img src={el.picture} alt={el.title} />
                    <div className={classes.projectContent}>
                      <h5>{el.title}</h5>
                      <ul>
                        {el.description.map((list, idx) => (
                          <li key={idx}>
                            <span>
                              {idx === 0 && "Technologies:"} <p>{list}</p>
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
