"use client";
import React, { useEffect, useState } from "react";
import Game from "../components/Game";

const page = () => {
  const RANDOM_QUOTE_API_URL = "https://api.quotable.io/random";
  const [text, setText] = useState({ content: "" });
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await fetch(RANDOM_QUOTE_API_URL);
    setText(await res.json());
  };

  return (
    <div className="app-content">
      <div className="content">
        <div className="title ">Speed Typing Game With Next JS</div>
        <Game item={text} getData={getData} />
      </div>
    </div>
  );
};

export default page;
