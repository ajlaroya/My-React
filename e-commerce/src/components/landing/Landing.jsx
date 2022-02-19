import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import { Collapse, IconButton } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import tropical from "../../assets/repeat.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    backgroundImage: `url(${tropical})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: "3rem",
    color: 'black'
  },
  container: {
    textAlign: "center",
  },
  expand: {
    color: 'black',
    fontSize: "3.5rem",
  },
  toolbar: theme.mixins.toolbar,
}));

const Landing = () => {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
      setChecked(true);
  },[])
  return (
    <div className={classes.root}>
      <div className={classes.toolbar} />
      <Collapse
        in={checked}
        {...(checked ? { timeout: 1000 } : {})}
        collapseHeight={50}
      >
        <div className={classes.container}>
          <p className={classes.title}>Welcome to Gaea</p>
          <IconButton>
            <ExpandMoreIcon className={classes.expand} />
          </IconButton>
        </div>
      </Collapse>
    </div>
  );
};

export default Landing;
