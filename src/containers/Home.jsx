import React, { useState } from "react";
import axios from "axios";

const Home = () => {
  const API = "https://pokeapi.co/api/v2/pokemon/";
  const [value, setValue] = useState("");
  const [pokemon, setPokemon] = useState({});
  const [show, setShow] = useState(false)

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //aca hago el pedido axios
    await axios.get(`${API}${value}`).then((data) => {
      setPokemon({
        name: data.data.name,
        type: data.data.types[0].type.name,
        baseExperience: data.data.base_experience,
        height: data.data.height,
        weight: data.data.weight,
        abilities: data.data.abilities,
        img: data.data.sprites.other.dream_world.front_default,
      });
    });
    setShow(true)
    //console.log(pokemon.abilities[0].ability.name);   LA PRIMERA VEZ LLEGA UNDEFINED
};

  return (
    <div>
      <label>
        Escriba nombre del Pokemon:{" "}
        <input onChange={handleChange} value={value} />
      </label>
      <button onClick={handleSubmit}>CONSULTAR</button>
    {show && (<div>
        <h1>{pokemon.name}</h1>
        <img src={pokemon.img}></img>
        <h3>Tipo: {pokemon.type}</h3>
        <h5>Experiencia basica: {pokemon.baseExperience}</h5>
        <h5>Habilidades:</h5>
        <ul>
          {pokemon.lenght && pokemon.abilities.map((data) => {
           console.log(data.ability.name)
           return <li>{data.ability.name}</li>
          })}
        </ul>
        <h5>Altura: {pokemon.height}</h5>
        <h5>Peso: {pokemon.weight}</h5>
      </div>)
    }
      
    </div>
  );
};

export default Home;
