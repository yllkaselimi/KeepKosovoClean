import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Raporto from "./pages/Raporto";
import Nav from "./components/Nav";
import Evente from "./pages/Evente";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <BrowserRouter>
    <Nav />
    <div className="container"/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/raporto" element={<Raporto />} />
        <Route path="/evente" element={<Evente />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
