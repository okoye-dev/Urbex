import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import CreateFacility from "./pages/CreateFacility/CreateFacility";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/create-facility" element={<CreateFacility />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
