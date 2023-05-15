import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";

const Type = () => {
  const [data, setData] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  // je récupère l'id
  const { nameType } = useParams();

  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/type/${nameType}/`
        );
        // console.log(response.data.name); // j'ai bien le nom du Type
        setData(response.data);
        setIsLoading(false);
      };

      fetchData();
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <main classnamme="main-types">
      <h1>Type : {data.name}</h1>
      <div className="pokemons">
        {data.pokemon.map((pokemon, index) => {
          console.log(pokemon.pokemon.url);
          const urlPokemon = pokemon.pokemon.url.split("/")[6];
          // console.log(urlPokemon);
          return (
            <Link to={`/pokemon/${pokemon.pokemon.name}`} key={index}>
              <div className="pokemon">
                <p>{pokemon.pokemon.name}</p>
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${urlPokemon}.png `}
                />
              </div>
            </Link>
          );
        })}
      </div>
    </main>
  );
};

export default Type;
