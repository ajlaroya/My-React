import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1), minWidth: 120, marginTop: '30px', m: 1,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  loading: {
    height: '600px', display: 'flex', justifyContent: 'center', alignItems: 'center',
  },
  container: {
    padding: '25px',
  },
  marginBottom: {
    marginBottom: '30px',
  },
  list: {
    height: '75vh', overflow: 'auto',
  },
}));