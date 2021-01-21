import { createMuiTheme } from '@material-ui/core';
import './App.css';

//create theme for color palette throughout dashboard
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#283d3b'
    },
    secondary: {
      main: '#197278'
    }
  }
})

function App() {
  return (
    <div className="App">
        Hello World
    </div>
  );
}

export default App;
