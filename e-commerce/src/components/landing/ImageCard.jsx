import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import watercolor from "../../assets/watercolor.png";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 645,
    background: "rgba(0,0,0,0.5)",
  },
  media: {
    height: 440,
  },
  title: {
      fontWeight: "bold",
      fontSize: '2rem',
      color: "white",
  }
}));

export default function ImageCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root} sx={{ maxWidth: 345 }}>
      <CardMedia
        className={classes.media}
        component="img"
        alt="watercolour plants"
        height="140"
        image={watercolor}
      />
      <CardContent>
        <Typography className={classes.title} gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="white">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
    </Card>
  );
}
