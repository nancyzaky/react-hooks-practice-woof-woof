import React, { useState, useEffect } from "react";
import Dog from "./Dog";
import DogsContainer from "./DogsContainer";

function App() {
  const [dogs, setDogs] = useState([]);
  const [display, setDisplay] = useState({});
  const [filter, setFilter] = useState(true);
  const fetchUrl = () => {
    fetch("http://localhost:3001/pups")
      .then((resp) => resp.json())
      .then((data) => {
        setDogs(data);
      });
  };
  useEffect(() => {
    fetchUrl();
  }, [setDogs]);
  return (
    <div className="App">
      <div id="filter-div">
        <button
          id="good-dog-filter"
          onClick={() => {
            setFilter(!filter);
            if (!filter) {
              fetchUrl();
            } else {
              console.log(dogs);
              const newArr = dogs.filter((dog) => {
                return dog.isGoodDog === true;
              });
              console.log(newArr);
              setDogs(newArr);
            }
          }}
        >
          {filter ? "Filter good dogs: ON" : "Filter good dogs: OFF"}
        </button>
      </div>
      <div id="dog-bar">
        <DogsContainer dogs={dogs} setDisplay={setDisplay} />
      </div>
      <div id="dog-summary-container">
        <h1>DOGGO:</h1>

        <div id="dog-info">
          <Dog
            display={display}
            key={display.id}
            setDogs={setDogs}
            dogs={dogs}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
