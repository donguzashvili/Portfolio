import classes from "./style.module.sass";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface skillItemProp {
  icon: IconProp;
  title: string;
  description: string;
}

const SkillItem = ({ icon, title, description }: skillItemProp) => {
  return (
    <div className={classes.card}>
      <div className={classes.cardWrapper}>
        <span>{<FontAwesomeIcon icon={icon} />}</span>
        <div className={classes.content}>
          <div className={classes.head}>
            <h2>{title}</h2>
          </div>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default SkillItem;
