import classes from "./style.module.sass";

import MyImage from "../../assets/images/myimage.jpg";
import MyImage2 from "../../assets/images/myimage2.jpg";
import MyImage3 from "../../assets/images/myimage3.jpg";
import { useEffect, useRef, useState } from "react";

const AboutPage = () => {
  const [images, setImages] = useState<string[]>([]);
  const [index, setIndex] = useState<number>(0);
  const imageRef = useRef<HTMLImageElement>(null);

  const increaseIndex = () => {
    if (!imageRef.current) return;
    imageRef.current.classList.add("imageAnimation");
    if (images.length - 1 === index) {
      setIndex(0);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
    setTimeout(() => {
      if (!imageRef.current) return;
      imageRef.current.classList.remove("imageAnimation");
    }, 500);
  };

  useEffect(() => {
    setImages([MyImage, MyImage2, MyImage3]);
  }, []);

  return (
    <div className={classes.aboutPage}>
      <div className={classes.wrapper}>
        <div className={classes.header}>
          <div className={classes.title}>
            <h2>Shota Donguzashvili</h2>
            <h4>Software Developer</h4>
          </div>
          <div ref={imageRef} onMouseOver={increaseIndex} className={classes.imageWrapper}>
            <img src={images[index]} alt="myImage" />
          </div>
        </div>
        <div className={classes.body}>
          <p>
            Hello and welcome to my portfolio! My name is Shota, and I am a React.js developer with expertise in a variety of technologies such as Redux, Redux Toolkit, SCSS, SASS, CSS, TypeScript,
            JavaScript, MUI, and JQuery.
          </p>
          <p>
            I have been working with React.js for 3 years and have gained extensive experience in developing complex applications using Redux and Redux Toolkit for state management. My expertise in
            CSS, SCSS, and SASS has helped me to create visually appealing and responsive user interfaces that provide an excellent user experience.
          </p>
          <p>
            Additionally, I have a solid understanding of TypeScript and JavaScript, which enables me to write clean, maintainable, and efficient code. I have experience working with MUI and JQuery,
            which are popular front-end frameworks used in web development.
          </p>
          <p>
            I am passionate about creating innovative solutions and enjoy working on projects that challenge me to grow as a developer. My ability to work in a team, attention to detail, and strong
            communication skills make me an asset to any project.
          </p>
          <p>Thank you for taking the time to learn a little bit about me. I am excited to hear about your project and how I can contribute to its success.</p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
