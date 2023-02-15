import classes from "./style.module.sass";

const localData = {
  name: "Shota Donguzashvili",
  email: "shota.nope@gmail.com",
};

const Footer: React.FC = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.footerWrapper}>
        <div className={classes.upperContent}>
          <div>
            <h3>{localData.name}</h3>
            <p>{localData.email}</p>
          </div>
          <div>
            <span>
              Be my friend on <a href="https://www.linkedin.com/in/shota-donguzashvili-457280202/">linkedin</a>
            </span>
          </div>
        </div>
        <div className={classes.copyrightContent}>
          <p>© Copyright Shota Donguzashvili 2023</p>
          <span></span>
          <p>Site Template by Shota Donguzashvili</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
