// @ts-ignore
import Cv from "../../assets/cv/Shota Donguzashvili.pdf";
import classes from "./style.module.sass";

const CvPage = () => {
  return (
    <div className={classes.cvPage}>
      <object data={Cv + "#zoom=75"}>
        <p>cv</p>
      </object>
    </div>
  );
};

export default CvPage;
