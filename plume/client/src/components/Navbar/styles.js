import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: theme.shape.borderRadius,
    boxShadow: 0,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 50px',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
  heading: {
    color: 'black',
    textDecoration: 'none',
    fontSize: '2em',
    fontWeight: 600,
    letterSpacing: -1
  },
  image: {
    marginLeft: '15px',
    marginTop: '2px',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '400px',
    [theme.breakpoints.down('xs')]: {
      width: 'auto',
    },
  },
  profile: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '400px',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      width: 'auto',
      marginTop: 20,
      justifyContent: 'center',
    },
  },
  logout: {
    marginLeft: '20px',
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    fontWeight: 600,
    letterSpacing: -0.5,
    marginLeft: '10px',
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: theme.palette.primary.main,
  },
}));