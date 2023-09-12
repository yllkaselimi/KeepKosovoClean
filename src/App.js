import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Raporto from "./pages/Raporto";
import Nav from "./components/Nav";

function App() {
  return (
    <BrowserRouter>
    <Nav />
    <div className="container"/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/raporto" element={<Raporto />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
