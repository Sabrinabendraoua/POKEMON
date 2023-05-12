import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import axios from "axios";

const Pokemons = () => {
  const [data, setData] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon");
        // console.log(response.data); // j'ai bien ma data
        setData(response.data.results);
        setIsLoading(false);
      };

      fetchData();
    } catch (err) {
      console.log(err);
    }
  }, []);

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <div>
      <h1>Pokemons</h1>
      <div>
        {data.map((pokemon, index) => {
          // console.log(pokemon);
          const urlPokemon = pokemon.url.split("/")[6];
          console.log(urlPokemon);
          return (
            <div key={index}>
              <p>{pokemon.name}</p>
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${urlPokemon}.png `}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Pokemons;
