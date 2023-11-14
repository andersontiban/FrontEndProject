import React from "react";
import { Card } from "./Card";
import axios from "axios";
import { useState, useEffect } from "react";

export const Main = () => {
  const [url, setUrl] = useState(
    //   "http://gateway.marvel.com/v1/public/characters?ts=1&apikey=25e71bba63dddf46f404defce4222654&hash=c0ada4d9d623a464234d9e4f8ff7b7d1"
    "https://akabab.github.io/superhero-api/api/all.json"
  );
  const [item, setItem] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get(url);
      setItem(res.data);
    };
    fetch();
  }, [url]);

  return (
    <>
      <div className="header">
        <div className="search-bar"></div>
      </div>
      <div className="banner">
        <h1 id="title">SuperHeros & Villians Library</h1>
      </div>
      <div className="content">
        {!item ? <p>Not Found</p> : <Card data={item} />}
      </div>
    </>
  );
};
