import React, { useState, useEffect } from "react";

const DogsContainer = ({ dogs, setDisplay }) => {
  return (
    <>
      {dogs.map((dog) => {
        return (
          <span
            onClick={() => {
              setDisplay(dog);
            }}
          >
            {dog.name}
          </span>
        );
      })}
    </>
  );
};

export default DogsContainer;
