import { createMuiTheme, makeStyles } from '@material-ui/core';
import './App.css';
import MainContainer from './components/containers/MainContainer';
import SideNav from './components/containers/SideNav';

const useStyles = makeStyles({
  root: {
    display: 'flex'
  }
});

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <SideNav/>
      <MainContainer/>
    </div>
  );
}

export default App;
