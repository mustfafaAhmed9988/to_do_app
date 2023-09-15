import './App.css';
import { TodosContainer } from './components/todo';
import { createTheme , ThemeProvider } from '@mui/material';
import { ToDosProvider } from './context/to_do_context';
import { SnackBarProvider } from './context/snackBar';
const theme = createTheme({
  typography:{
    fontFamily:[
      "Alexandria"
    ]
  }
});

function App() {
  return (
    <div className="App" dir='rtl'>
      <ThemeProvider theme={theme} >
        <ToDosProvider>
          <SnackBarProvider>
          <TodosContainer/>

          </SnackBarProvider>
        </ToDosProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
