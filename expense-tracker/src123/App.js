import logo from "./logo.svg";
import "./App.css";
import { SnackbarProvider } from "notistack";
import Display from "./components/Display";

function App() {
  return (
    <div>
      <SnackbarProvider>
        <Display />
      </SnackbarProvider>
    </div>
  );
}

export default App;
