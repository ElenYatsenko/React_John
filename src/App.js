import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/index.js";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
}

export default App;
