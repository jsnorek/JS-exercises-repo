import React, { useEffect } from "react";
import { useState } from "react";
import { PrimeReactProvider, PrimeReactContext } from "primereact/api";
import { Button } from "primereact/button";
import "primereact/resources/themes/lara-light-cyan/theme.css";

const baseURL = "https://pokeapi.co/api/v2";

const url = {
  pokemon: `${baseURL}/pokemon`,
  starterPokemon: {
    bulbasaur: `${baseURL}/1`,
    charmander: `${baseURL}/4`,
    squirtle: `${baseURL}/7`,
  },
};

function App() {
  const [pokemonList, setPokemonList] = useState(null);
  const [error, setError] = useState();
  const [starterPokemon, setStarterPokemon] = useState();
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [textDisplay, setTextDisplay] = useState();


  //pull entire list
  //on button click, pull starter pokemon list
   useEffect(() => {
    if (pokemonList === null) {
      fetch(url.pokemon)
        .then((res) => res.json())
        .then((data) => {
          console.log(data.results)
          setPokemonList(data.results)
        })
        .catch((err) => {
          console.error(err)
          setError(err);
        });
    }
  }, [])

  



  // useEffect(() => {
  //   const getPokemon = async () => {
  //     try {
  //       const data = await Promise.all([
  //         fetch(url.starterPokemon.bulbasaur),
  //         fetch(url.starterPokemon.charmander),
  //         fetch(url.starterPokemon.squirtle),
  //       ]);
  //       console.log(data);
  //       const bulbasuar = await data[0].json()
  //       console.log(`test ${bulbasuar}`);
  //     } catch (e) {
  //       setError(e);
  //     }
  //   };
  //   getPokemon();
  // }, []);

  // useEffect(() => {
  //   if (pokemonList === null) {
  //     fetch(url.pokemon)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data.results)
  //         setPokemonList(data.results)
  //       })
  //       .catch((err) => {
  //         console.error(err)
  //         setError(err);
  //       });
  //   }
  // }, [])

  useEffect(() => {
    if (pokemonList?.length > 0 && !starterPokemon) {
      const starterPokemonArr = [];
      pokemonList.forEach((pokemon) => {
        if(pokemon.name === "bulbasaur" || pokemon.name === "charmander" || pokemon.name === "squirtle") {
          starterPokemonArr.push(pokemon.url);
        }
      })
      console.log(starterPokemonArr);
      setStarterPokemon(starterPokemonArr);
    }
  }, [pokemonList])

  //to fetch starter pokemon URLs
  // const fetchStarterPokemon = async () => {
  //   try {
  //     const responses = await Promise.all(starterPokemon.map(pokemon => fetch(pokemon)));
  //     const data = await Promise.all(responses.map(response => response.json()));
  //     console.log(data);
  //     setStarterPokemon(data);
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   }
  // };

  const fetchStarterPokemon = async () => {
    try {
      const responses = await Promise.all(starterPokemon.map(pokemon => fetch(pokemon)));
      const data = await Promise.all(responses.map(response => response.json()));
      console.log(data);
      const starterPokemonArray = [];
      data.forEach((pokemon) => {
        starterPokemonArray.push(pokemon.species.name)
        setStarterPokemon(starterPokemonArray);
        console.log("test", starterPokemonArray);
      })
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
  // function starterPokemonStats() {
  //   const starterPokemonArr = [];
  //   starterPokemon.forEach((pokemon) => {
  //     return starterPokemonArr.push(pokemon.species.name);
  //   })
  // }


  function onClickStart() {
    fetchStarterPokemon();
    // starterPokemonStats();
    console.log("start game");
    console.log("choose from", starterPokemon);
    setTextDisplay(starterPokemon);
  }

  return (
    <div className="app">
      <PrimeReactProvider>
        <div>app</div>
        {error && <div>error getting data</div>}
        {textDisplay && <p>{textDisplay}</p>}
        <Button label="Start" rounded onClick={onClickStart} />
      </PrimeReactProvider>
    </div>
  );
}

export default App;
