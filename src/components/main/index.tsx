import React, { useState, useEffect, useRef } from "react";
import classes from "./main.module.sass";
import SocialIcons from "./socialIcons/SocialIcons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

import StepOne from "./step1";
import { StepTwo } from "./step2";
import StepThree from "./step3";
import StepFour from "./step4";

enum pageEnum {
  stepOne = 0,
  stepTwo = 1,
  stepThree = 2,
}

const MainPage = () => {
  const [page, setPage] = useState<pageEnum>(0);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const stepOne = useRef<HTMLDivElement>(null);
  const stepTwo = useRef<HTMLDivElement>(null);

  const scroll = (e: any) => {
    if (scrolled) return;
    setScrolled(true);
    const scroll = e.deltaY;

    setPage((prevPage) => {
      let newPage = 0;
      const lastElement =
        Object.values(pageEnum)[Object.values(pageEnum).length - 1];
      if (
        prevPage === lastElement &&
        scroll > 0 &&
        prevPage !== Object.values(pageEnum)[0]
      ) {
        newPage = prevPage;
      } else if (scroll > 0) newPage = prevPage + 1;
      else if (prevPage === 0 && scroll < 0) newPage = 0;
      else {
        newPage = prevPage - 1;
      }
      return newPage;
    });
  };

  useEffect(() => {
    console.log(page);
    // const secondView = stepTwo.current;
    // const firstView = stepOne.current;

    // switch (page) {
    //   case pageEnum.stepOne:
    //     return firstView?.scrollIntoView({
    //       behavior: "smooth",
    //       block: "center",
    //     });
    //   case pageEnum.stepTwo:
    //     return secondView?.scrollIntoView({
    //       behavior: "smooth",
    //       block: "center",
    //     });
    // }
  }, [page]);

  useEffect(() => {
    setTimeout(() => {
      setScrolled(false);
    }, 500);
  }, [page]);

  return (
    <div
      className={classes.main}
      onWheel={scroll}
      onKeyDown={scroll}
      onKeyUp={scroll}
    >
      <StepOne activePage={page === pageEnum.stepOne} />
      <StepTwo />
      <StepThree />
      <StepFour />
    </div>
  );
};

export default MainPage;
