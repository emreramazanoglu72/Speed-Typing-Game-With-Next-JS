"use client";
import React, { useRef, useState } from "react";
import Swal from "sweetalert2/dist/sweetalert2.js";

const Game = ({ item, getData }) => {
  const textRef = useRef();
  const [text, setText] = useState("");
  const splitText = item.content.split("");

  const handleText = (e) => {
    setText(e);
    const splitInput = text.split("");
    if (textRef.current.children) {
      let correct;
      [...textRef.current.children].map((item, index) => {
        const character = splitInput[index];
        if (character == null) {
          item.classList.remove("text-green-700");
          item.classList.remove("text-red-700");
          correct = false;
        } else if (character.toUpperCase() === item.innerText.toUpperCase()) {
          item.classList.add("text-green-700");
          item.classList.remove("text-red-700");
        } else {
          item.classList.remove("text-green-700");
          item.classList.add("text-red-700");
          correct = false;
        }
      });

      let control = [...textRef.current.children].filter(
        (filter) => filter.classList[0] == "text-green-700"
      );
      if (
        splitInput.length == splitText.length &&
        control.length == splitText.length
      ) {
        Swal.fire({
          icon: "success",
          title: "Mission Completed...",
          confirmButtonText:"New Game"
        }).then((res) => {
          getData();
          setText("");
        });
      }
    }
  };

  return (
    <div className="game">
      <div className="title" ref={textRef}>
        {splitText.map((item, index) => (
          <span key={index}>{item}</span>
        ))}
      </div>
      <div className="form-textarea w-full ">
        <textarea
          className="w-full bg-transparent border-2 border-gray-800 outline-none rounded p-2 uppercase"
          value={text}
          onChange={(e) => handleText(e.target.value)}
        ></textarea>
      </div>
    </div>
  );
};

export default Game;
