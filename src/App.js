import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Header></Header>} />
      </Routes>
    </div>
  );
}

export default App;
