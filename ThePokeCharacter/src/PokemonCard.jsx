import { useEffect, useState } from "react";
import { PokemonData } from "./PokemonData";
import "./App.css";

export const PokemonCard = () => {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");

  //! STEP 1: FIRST WE NEED TO USE FETCH() METHODS, TO GET THE API DATA. A FETCH METHOD RETURNS A PROMISES(IT'S A PLACEHOLDER THAT RETURN RESULT FOR ASYNCRONOUS OPERATION) WHICH WE GET THE API DATA USING THEN.CATCH CHAINING METHODS. //INSTEAD FO USING .THEN.CATCH CHAINING METHOD, ITS BETTER TO USE ASYNC-AWAIT USING TRY AND CATCH METHOD. //NOTE: ITS IMPORTANT OT USE USEEFFECT IF DEALING WITH SIDE-EFFECTS LIEK ACCESSING EXTERNAL RESOURCES LIKE API.

  let API = "https://pokeapi.co/api/v2/pokemon?limit=1351";
  // let API = "https://pokeapi.co/api/v2/pokemon?limit=51";

  const GetPokemonCard = async () => {
    try {
      let res = await fetch(API);
      let data = await res.json();
      //    console.log(data);
      //!STEP 2:  HERE, WHEN WE CONSOLE WE GET THE DATA WITH  MULTIPLE PROPERTIES, THAT CONTAINS AN ARRAY ALSO. INSIDE THAT ARRAYS, WE GET FURTHER UNIQUE API FOR EACH CARDS. SO WE NEED TO GET THE DATA FOR EACH API'S, WE HERE WE ARE GOING TO CALL MULTIPLE API.
      const DetailedAPIData = data.results.map(async (curEle) => {
        // console.log(curEle.url); //! BY USING THIS CODE WE GET THE MULTIPLE API'S, WHICH WE NEED TO FUTHER CALL TO GET THE DATA.

        let res = await fetch(curEle.url);
        let data=  await res.json();
        return data;

        // console.log(data); //! WHEN WE CONSOLE, IT WE FINALLY GET ALL THE DATA'S FOR EACH API'S, NOW WE NEED TO PASS ALL API'S DATA TO EVALUATION PROCESS USING PROMISE.ALL(), WHICH ONLY EXECUTES WHEN ALL THE PROMISE DATA IS TRUE.
      });

      // USING PROMISE.ALL(), WHICH ONLY EXECUTES WHEN ALL THE PROMISE DATA IS TRUE.

      //! STEP 3: REMEMBER, WHENEVER WE ARE TRYING TO GET MULTIPLE API DATA, WE NEED TO USE PROMISES METHODS LIKE PROMISE.ALL, PROMISE.RACE, PROMISE.ALLSETTED, TO GET THE FINAL USABLE DATA, WHICH WE ACCESS AND USEIT.
      const GETAPIDATA =await Promise.all(DetailedAPIData);
      setPokemon(GETAPIDATA);

      //ONCE DATA IS PRESENTED, NOW MAKE LOADING AS FALSE...
      setLoading(false);


    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    GetPokemonCard();
  }, []);


  //! STEP 4: IMPLEMENTING LOADING FEATURE
  if(loading)
  {
    return (
        <h1 style={{
            height:"100vh", 
            width: "100%",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
        }}>Loading....</h1>
    )
  }

  //! STEP 5: IMPLEMENTING AN ERROR MESSAGE, IF THERE...
if(error)
  {
    return (
        <h1 style={{
            height:"100vh", 
            width: "100%",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
        }}>Error Message: {error.message}</h1>
    )
  }

  //! MOST IMPORTANT: ADDING SEARCHING , USING FILTER METHOD, THAT SHOULD BE APPLIED TO MAIN ARRAY , WHICH IS "POKEMON", BY THE NAME, WE CHECK WEAHTER IT MATCHES WITH INPUT VALUE OR NOT USING .INCLUDES METHOD.  //IF THERE, THAN WE NEED TO REPLACE THE 'POKEMON' ARRAY WHICH WE ACCESS IN JSX, WE NEED TO REPLACE IT WITH THE SERACHPOKI VARIABLE TO GET ONLY SERACH DATA VALUES. ELSE IT SHOWS ALL THE DATA

  let SearchPoki = pokemon.filter((curEle)=>
     curEle.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <>
      <h1>Hey, We Poke's Are Here...</h1>
      <img src="" alt="" />
      <section className="Search">
        <input type="text" placeholder="Search the Pokemon Character..." value={search} onChange={(e)=>setSearch(e.target.value)} />
      </section>
      <section className="PokemonCards">
        {/* FOR IMPLEMENTING SEARCHING FOR ALL CARD, WE REPLACE THE POKEMON WITH THE SEARCH ITEM:  */}
        {SearchPoki.map((curEle) => {  
          return (
               <PokemonData key={curEle.id} pokidata = {curEle}/>
          );
        })}
      </section>
      <section className="footer">
        <p>&copy; Designed and Developed By VIVEK CHAURASIYA- UNDER 2026 PRACTISE PROJECTS</p>
      </section>
    </>
  );
};
