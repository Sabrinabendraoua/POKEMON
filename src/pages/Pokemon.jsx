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
      <h1>{data.name}</h1>
    </main>
  );
};

export default Pokemon;
