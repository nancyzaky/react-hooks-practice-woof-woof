import React, { useState, useEffect } from "react";

const Dog = ({ display, setDogs, dogs }) => {
  const [isGood, setIsGood] = useState(display.isGoodDog);
  console.log(isGood);

  const handleClick = (key) => {
    setIsGood(() => {
      return !isGood;
    });
    console.log(isGood);
    fetch(`http://localhost:3001/pups/${key}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        isGoodDog: !isGood,
      }),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        // const newArr = dogs.filter((dog) => {
        //   return dog.id !== key;
        // });
        // console.log(newArr);
        setDogs([
          ...dogs.filter((dog) => {
            return dog.id !== key;
          }),
          data,
        ]);
      });
  };
  const { name, isGoodDog, image, id } = display;
  return (
    <>
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <button
        onClick={() => {
          console.log(isGood);
          handleClick(id);
        }}
      >
        {isGood ? "Good Dog" : "Bad Dog"}
      </button>
    </>
  );
};

export default Dog;
