import { useContext, useEffect } from "react";
import { DataContext } from "../../state";
import NavigationModal from "../navigationModal";
import classes from "./header.module.sass";

// import CodeIcon from "@mui/icons-material/Code";

const Navigation = () => {
  const { menu, setMenu } = useContext(DataContext);

  useEffect(() => {
    console.log(menu);
  }, [menu]);

  if (menu) return <NavigationModal />;

  return (
    <div className={classes.navigation}>
      <div className={classes.menuWrapper}>
        <span className={classes.menuToggle} onClick={() => setMenu(!menu)}>
          <p>Menu</p>
          <span></span>
        </span>
      </div>
    </div>
  );
};

export default Navigation;
