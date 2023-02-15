import Software from "../../../assets/images/featuredProjects/Software.ge.png";
import BPO from "../../../assets/images/featuredProjects/BPO.png";
import Swingers from "../../../assets/images/featuredProjects/Swingers.png";
import Storyhub from "../../../assets/images/featuredProjects/StoryHub.png";

import classes from "./stepFour.module.sass";

const featuredProjects = [
  [
    {
      link: "https://flatrockoutsourcing.com",
      picture: BPO,
      title: "Flatrockoutsourcing.com",
    },
    {
      link: "https://software.ge",
      picture: Software,
      title: "Software.ge",
    },
  ],
  [
    {
      link: "https://swingers.club",
      picture: Swingers,
      title: "Swingers.club",
    },
    {
      link: "https://digitalstoryhub.com",
      picture: Storyhub,
      title: "Digitalstoryhub.com",
    },
  ],
];

const StepFour: React.FC = () => {
  return (
    <div className={classes.stepFour}>
      <div className={classes.backgroundDecoration}></div>
      <div className={classes.wrapper}>
        <div className={classes.head}>
          <span>Recent works</span>
          <h3>This is all what i love to do</h3>
        </div>
        <div className={classes.body}>
          {featuredProjects.map((projectArray, outerIdx) => (
            <div className={classes.cardWrapper} key={outerIdx}>
              {projectArray.map((el, idx) => (
                <a key={idx} rel="noreferrer" href={el.link} target="_blank" className={classes.imageCard}>
                  <img src={el.picture} alt={el.title} />
                  <div className={classes.cardDescriptionLayout}>
                    <div className={classes.cardDescription}>
                      <p>{el.title}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StepFour;
