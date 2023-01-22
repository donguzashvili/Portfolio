// ** Icon imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedinIn,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";

// ** Style imports
import classes from "./SocialIcons.module.sass";

// ** Types
type iconArrType = {
  name: string;
  url: string;
  icon: any;
}[];

// ** Data
const iconsArr: iconArrType = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/donshota/",
    icon: <FontAwesomeIcon icon={faFacebookF} />,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/shota-donguzashvili-457280202/",
    icon: <FontAwesomeIcon icon={faLinkedinIn} />,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/shota_donguzashvili/",
    icon: <FontAwesomeIcon icon={faInstagram} />,
  },
  {
    name: "Github",
    url: "https://github.com/donguzashvili",
    icon: <FontAwesomeIcon icon={faGithub} />,
  },
  {
    name: "mail",
    url: "https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=shota.nope@email.com",
    icon: <FontAwesomeIcon icon={faAt} />,
  },
];

// ** Component
const SocialIcons = () => {
  return (
    <ul className={classes.socialIconsWrapper}>
      {iconsArr?.map((el, indx) => {
        return (
          <li key={indx}>
            <a href={el.url}>
              <span>{el.name}</span>
              <i>{el.icon}</i>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default SocialIcons;
