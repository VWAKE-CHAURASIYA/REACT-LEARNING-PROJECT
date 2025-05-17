import { useEffect, useState } from "react";
import "./index.css";
import { PokemonCard } from "./PokemonCard";

export const Pokemon = () => {
  //! STEP 1: IF WE HAVE TO INTERACT WITH EXTERNAL SOURCES IT'S BETTER TO USE USEEFFECT HOOKS, WHICH IS USED TO DEAL WITH SIDE EFFECTS , LIKE NETWORK REQUESTS
  
  const [pokemon, setpokemon] = useState([]);

  const API = "https://pokeapi.co/api/v2/pokemon?limit=124";        //? we can extend the limit by providing limit
  //! STEP 4: CREATING LOADING AND ERROR STATE FOR HANDLING STATES:
  const [loading, setloading]= useState(true);
  const [error ,seterror] = useState(null);

  //! STEP 7: ADDING SEARCH FUCNTIONALLITY : 
  const[search, setsearch]= useState("");


  //! STEP 2:  we can use the function to fetch the api data, we can do it by using both ways like by PROMISES or by ASYNC-AWAIT.

  const fetchPokemon = async () => {
    try {
      const res = await fetch(API); //! it waits until the data fetching ,once fetched need to store in variable.
      const data = await res.json(); //! it stores the api data in the form of json, it does'nt require chaining.

      //! STEP 3: console.log(data);   returns api data, but the data is having their own API inside the result property, for that we need to agin fetch API, for getting inside data.

      const detailpokemondata = data.results.map(async (curpokemon) => {
        const res = await fetch(curpokemon.url); //! wait for getting data while fetching API, whcih again we store.
        const data = res.json(); //! getting the data in a json form.
        return data;
      });
      console.log(detailpokemondata);


//! ONCE WE GET API DATA, NOW WE NEED TO TAKE ALL API DATA TO DISPLAY, FOR THAT ,WE CAN USE PROMISE.ALL(), THAT ENUSRES ALL DATA SHOULD BE CORRECT TO DISPLAY...

      const detailedResponse = await Promise.all(detailpokemondata); 
      console.log(detailedResponse); //! these respones are continuously changing while in loop, so we need to crete states.
      setpokemon(detailedResponse);

      setloading(false);

    } catch (error) {
      console.log(error);
      setloading(false);
      seterror(error);
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  //!Search functioallity: 
  const SearchData = pokemon.filter((curele)=>
  curele.name.toLowerCase().includes(search.toLowerCase()))  //check for the text weather it is included or not inside the [Pokemon] contains all data, At last set to list, while traversing...

  //! STEP 5: APPLYING CONDITION TO RUN THE CODE: 
  if(loading)
  {
    return <div> <h1> Loading...</h1></div>
  }

  if(error)
  {
    return <div> <h1>{error.message}</h1></div> //! error.message is a method provided by js or react that display error message.
  }


//!   STEP 4: creating pokemon cards with jsx 
  return (
    <>
    <header>
         <h1>Let's Catch Pokemon</h1>
    </header>
    <div className="search">
      <input type="text" placeholder="Search your favorite character" value={search} onChange={(e)=>setsearch(e.target.value)} />
    </div>
    <div>
        <ul className="cards grid-three-cols">
            {
              // pokemon.map((currele)=>
                SearchData.map((currele)=>
                {
                    return <PokemonCard key={currele.id} PokemonData = {currele}/>
                })
            }
        </ul>
    </div>
    </>
  );
};
