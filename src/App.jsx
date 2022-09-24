import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Button, SearchPage, PokemonInfoPage } from "@atomic";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SearchPage />}></Route>
        <Route path="pokemon" element={<PokemonInfoPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
