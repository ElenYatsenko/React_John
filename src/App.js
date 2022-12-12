import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/index.js";
import "./index.css";
import Home from "./components/Hello/index.js";

function App() {
  return (
    <BrowserRouter>
      <Header />
      {/* <Home /> */}
    </BrowserRouter>
  );
}

export default App;
