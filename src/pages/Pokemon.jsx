import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../assets/Home.css";

const Pokemon = () => {
  const [data, setData] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  // je récupère l'id
  const { namePokemon } = useParams();

  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${namePokemon}/`
        );
        // console.log(response.data.sprites.front_default); // j'ai bien le nom du Type
        // console.log(response.data.types.name);
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
    <main className="main-allTypesPokemon">
      <h1>Pokemon</h1>
      <div className="div-allTypesPokemon">
        <div className="pokemon">
          <p>{namePokemon}</p>
          <img src={data.sprites.front_default} alt="image Pokemon" />
        </div>
        <div>
          {data.types.map((allTypesPokemon, index) => {
            console.log(allTypesPokemon);
            return (
              <div key={index} className="allTypesPokemon">
                <h3>{allTypesPokemon.type.name}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Pokemon;
