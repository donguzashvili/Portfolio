import { useContext, useEffect } from "react";
import { DataContext } from "../../state";
import NavigationModal from "../navigationModal";
import classes from "./header.module.sass";
import { CSSTransition } from "react-transition-group";

// import CodeIcon from "@mui/icons-material/Code";

const Navigation = () => {
  const { menu, setMenu } = useContext(DataContext);

  useEffect(() => {
    console.log(menu);
  }, [menu]);

  return (
    <div className={classes.navigation}>
      <div className={classes.menuWrapper}>
        <span className={classes.menuToggle} onClick={() => setMenu(!menu)}>
          <p>Menu</p>
          <span></span>
        </span>
        <CSSTransition in={menu} unmountOnExit timeout={500} classNames={classes.navUnmount}>
          <NavigationModal />
        </CSSTransition>
      </div>
    </div>
  );
};

export default Navigation;
