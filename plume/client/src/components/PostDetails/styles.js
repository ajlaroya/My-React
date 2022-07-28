import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  media: {
    borderRadius: "20px",
    objectFit: "cover",
    width: "100%",
    float: "right",
    maxHeight: "600px",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "20px",
    },
  },
  card: {
    display: "flex",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      flexWrap: "wrap",
      flexDirection: "column",
    },
  },
  section: {
    borderRadius: "20px",
    margin: "10px",
    width: "60%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  imageSection: {
    marginLeft: "20px",
    marginRight: "20px",
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
    },
  },
  recommendedPosts: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  loadingPaper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    borderRadius: "15px",
    height: "39vh",
  },
  paper: {
    borderRadius: theme.shape.borderRadius,
    padding: "20px",
  },
  commentsOuterContainer: {
    display: 'column',
    justifyContent: 'space-between',
  },
  commentsInnerContainer: {
    height: '200px',
    overflowY: 'auto',
    marginRight: '30px'
  }
}));
