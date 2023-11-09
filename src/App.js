import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./views/SignIn";
import Register from "./views/Register";
import { Home } from "./views/Home";
import PokemonList from "./components/PokemonList";
import PokemonDetails from "./components/PokemonDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="pokemons" element={<Home />}>
          <Route path="list" element={<PokemonList />} />
          <Route path="details/:id" element={<PokemonDetails />} />
        </Route>
        {/* <Route path="*" element={<NoMatch />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
