import ReactDOM from "react-dom";

// ** import icons
import {
  faFacebookF,
  faLinkedinIn,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

// ** import state

// ** import style
import classes from "./index.module.sass";
import React, { useContext } from "react";
import { DataContext } from "../../state";
import { useNavigate } from "react-router-dom";

const NavigationModal = () => {
  const navigate = useNavigate();
  const { setMenu } = useContext(DataContext);

  const updateMenuState = (
    event: React.MouseEvent<HTMLDivElement> | React.MouseEvent<SVGElement>
  ) => {
    event.stopPropagation();
    setMenu(false);
  };

  return ReactDOM.createPortal(
    <div className={classes.navigationLayout}>
      <div className={classes.layout} onClick={updateMenuState}></div>
      <nav className={classes.navigation}>
        <div className={classes.navigationWrapper}>
          <div className={classes.head}>
            <span>navigation</span>
            <FontAwesomeIcon icon={faXmark} onClick={updateMenuState} />
          </div>
          <ul className={classes.body}>
            <li onClick={() => navigate("/")}>
              <a>Home</a>
            </li>
            <li onClick={() => navigate("/projects")}>
              <a>Projects</a>
            </li>
            <li onClick={() => navigate("/cv")}>
              <a>CV</a>
            </li>
          </ul>
          <p>
            I will find any solution to solve your issue, I am capable to
            fulfill your dream project, to contact me you can choose any
            platform you want
          </p>
          <div className={classes.socialIcns}>
            <FontAwesomeIcon icon={faFacebookF} />
            <FontAwesomeIcon icon={faLinkedinIn} />
            <FontAwesomeIcon icon={faGithub} />
            <FontAwesomeIcon icon={faInstagram} />
          </div>
        </div>
      </nav>
    </div>,
    document.getElementById("navigation")!
  );
};

export default NavigationModal;
