import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Pokemons from "./pages/Pokemons";
import Pokemon from "./pages/Pokemon";
import Types from "./pages/Types";
import Type from "./pages/Type";

//Components
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemons" element={<Pokemons />} />
        <Route path="/pokemon" element={<Pokemon />} />
        <Route path="/types" element={<Types />} />
        <Route path="/type" element={<Type />} />
      </Routes>
    </Router>
  );
}

export default App;
