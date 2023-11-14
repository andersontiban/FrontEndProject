import React from "react";
// import axios from "axios";
import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";

export const Info = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState();

  const fetchCharacter = async () => {
    const result = await axios.get(
      `https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/${id}.json`
    );
    // console.log(result.data);
    setCharacter(result.data);
  };
  fetchCharacter();
  return (
    <>
      {!character ? (
        ""
      ) : (
        <div className="info-content">
          <div className="right-box">
            <img className="info-img" src={`${character.images.lg}`} />
          </div>
          <div className="left-box">
            <h1>{character.name}</h1>
            <h2>Stats</h2>
            <p>Intelligence: {character.powerstats.intelligence}</p>
            <p>Strength: {character.powerstats.strength}</p>
            <p>Speed: {character.powerstats.speed}</p>
            <p>power: {character.powerstats.power}</p>
          </div>
        </div>
      )}
    </>
  );
};
