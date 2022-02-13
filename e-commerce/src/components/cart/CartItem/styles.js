import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
  root: {
    // maxWidth: 345, original width style
    maxWidth: "100%",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    display: "flex",
    justifyContent: "space-between",
  },
  cardActions: {
    justifyContent: "space-between",
  },
  buttons: {
    display: "flex",
    alignItems: "center",
  },
}));
