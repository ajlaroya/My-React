import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  loading: {
    height: "600px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    padding: "25px",
  },
  marginBottom: {
    marginBottom: "30px",
  },
  list: {
    height: "70vh",
    overflow: "auto",
    display: "flex",
    paddingRight: "10px",
    "&::-webkit-scrollbar": { width: 10 },
    "&::-webkit-scrollbar-track": { background: '#f1f1f1' },
    "&::-webkit-scrollbar-thumb": { background: '#888' },
  },
}));
