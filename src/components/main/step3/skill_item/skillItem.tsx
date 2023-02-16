import classes from "./style.module.sass";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useInViewport } from "react-in-viewport";
import { useEffect, useRef } from "react";

interface skillItemProp {
  icon: IconProp;
  title: string;
  description: string;
}

const SkillItem = ({ icon, title, description }: skillItemProp) => {
  const ref = useRef<HTMLDivElement>(null);

  const inViewPort = useInViewport(ref);

  useEffect(() => {
    if (!inViewPort.inViewport || ref.current?.classList.contains(classes.showContent)) return;
    ref.current?.classList.add(classes.showContent);
  }, [inViewPort]);
  return (
    <div className={classes.card} ref={ref}>
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
