// @ts-ignore
import Cv from "../../assets/cv/Shota Donguzashvili.pdf";
import classes from "./style.module.sass";

const CvPage = () => {
  return (
    <div className={classes.cvPage}>
      <object data={Cv + "#zoom=75"} type="application/pdf">
        <p>
          It appears you don't have Adobe Reader or PDF support in this web browser.{" "}
          <a href={Cv} download>
            Click here to download the PDF
          </a>
          . Or
          <a href="http://get.adobe.com/reader/" target="_blank" rel="noreferrer">
            click here to install Adobe Reader
          </a>
          .
        </p>
        <embed src={Cv} type="application/pdf" />
      </object>
    </div>
  );
};

export default CvPage;
