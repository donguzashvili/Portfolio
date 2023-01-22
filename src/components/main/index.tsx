import React, { useState } from "react";
import classes from "./main.module.sass";
import SocialIcons from "./socialIcons/SocialIcons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

import StepOne from "./step1";
import StepTwo from "./step2";

const MainPage = () => {
  const [page, setPage] = useState<number>(0);
  console.log(page);
  return (
    <>
      <StepOne nextPage={() => setPage((prevPage) => prevPage + 1)} />
      <StepTwo />
    </>
  );
};

export default MainPage;
