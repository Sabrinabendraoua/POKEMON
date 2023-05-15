import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Types = () => {
  const [data, setData] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await axios.get("https://pokeapi.co/api/v2/type");
        console.log(response.data); // j'ai bien ma data
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
    <main className="main-types">
      <div className="types">
        {data.map((type, index) => {
          // console.log(type);
          return (
            <Link to={`/Type/${type.name}`}>
              <div key={index} className="type">
                <p>{type.name}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </main>
  );
};

export default Types;
