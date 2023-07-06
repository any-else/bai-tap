import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Card from "./components/Card";
import Loading from "./components/Loading";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Card />} />
        <Route path="/products" element={<Card products="2nut" />} />
        <Route path="/carts" />
        <Route path="/orders" />
        <Route path="/add-products" />
      </Routes>
    </div>
  );
}

export default App;
