import { createMuiTheme, makeStyles } from '@material-ui/core';
import './App.css';
import MainContainer from './components/containers/MainContainer';
import SideNav from './components/containers/SideNav';

const useStyles = makeStyles({
  mainWrapper: {
    display: 'flex'
  }
});

function App() {
  const classes = useStyles();
  return (
    <div className={classes.mainWrapper}>
      <SideNav/>
      <MainContainer/>
    </div>
  );
}

export default App;
