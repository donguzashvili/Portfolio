import { useState, useEffect, useRef } from "react";
import classes from "./stepTwo.module.sass";

interface dataType {
  projects: number;
  experience: number;
  technologies: number;
  languages: number;
}
const data: dataType = {
  projects: 10,
  experience: 3,
  technologies: 10,
  languages: 2,
};
export const StepTwo = () => {
  const ref = useRef<HTMLElement>(null);

  const [numbers, setNumbers] = useState<dataType>({
    projects: 0,
    experience: 0,
    technologies: 0,
    languages: 0,
  });

  const everythingMatches = () => {
    const dataValues = Object.values(data);
    return Object.values(numbers).every((el, indx) => el === dataValues[indx]);
  };

  const propertyMatches = (
    prevNumber: number,
    property: "projects" | "experience" | "technologies" | "languages"
  ) => {
    if (prevNumber < data[property]) return prevNumber + 1;
    return prevNumber;
  };

  useEffect(() => {
    if (everythingMatches()) return;
    const numberInterval = setTimeout(() => {
      setNumbers((prevNumbers) => {
        return {
          projects: propertyMatches(prevNumbers.projects, "projects"),
          experience: propertyMatches(prevNumbers.experience, "experience"),
          technologies: propertyMatches(
            prevNumbers.technologies,
            "technologies"
          ),
          languages: propertyMatches(prevNumbers.languages, "languages"),
        };
      });
    }, 350);

    return () => {
      clearTimeout(numberInterval);
    };
  }, [numbers]);

  return (
    <section id="stepTwo" ref={ref} className={classes.stepTwo}>
      <div className={classes.wrapper}>
        <div className={classes.head}>
          <p>Hello There</p>
          <h3>
            My name is <span>Shota</span>
          </h3>
          <h5>I am software developer</h5>
        </div>
        <div className={classes.body}>
          <p>
            I am highly motivated hardworker person, who loves coding and and
            solving issues, always find satisfying when learning new
            technologies and tring them out, worked with AGILE/SCRUM and
            Waterfall my goal is to be senior MERN stack, also have worked with
            animations such as THREE.js and Blender
          </p>
        </div>
        <div className={classes.footer}>
          {Object.keys(data).map((el) => (
            <div>
              {/* @ts-ignore */}
              <p>{el === "technologies" ? `+${numbers[el]}` : numbers[el]}</p>
              <h5>{el}</h5>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
