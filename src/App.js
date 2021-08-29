import "./App.css";
import DarkModeToggle from "./components/DarkModeToggle";
import Signin from "./components/Signin";

function App() {
  return (
    <div className="app">
      <DarkModeToggle />
      <Signin />
    </div>
  );
}

export default App;
