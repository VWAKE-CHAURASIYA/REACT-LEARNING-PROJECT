export const PokemonCard = ({ PokemonData }) => {
  //!STEP 6: WITH DIFFERNENT COMPONENT, Now we need to get the data dynamically, by destructuring PokemonData AS Props:
  return (
    <>
      <li className="pokemon-card">
        <figure>
          <img
            src={PokemonData.sprites.other.dream_world.front_default}
            alt={PokemonData.id}
            className="pokemon-img"
          />
        </figure>
        <h1 className="pokemon-name">{PokemonData.name}</h1>

        <div className="pokemon-info">
          <p>
            {
              //! STEP 7: NOW HERE I WANT TO ADD ITS TYPE PROPERTY WHICH IS HAVING TWO TYPES IN ITSELF AS AN OBJECT, I NEED TO DISPLAY BOTH DATA,FOR THA , I CAN TAKE BOTH BY TRAVESRING AND JOINING ITS TYPE PROPERTY, USING JOIN METHOD (ALREADY CONVERED IN JAVASCRIPT, WHRE WE PASS THE ARRAY, AND WE CAN JOIN REQUIRED DATA AT END).
              
              PokemonData.types.map((curType) => curType.type.name).join(", ")
            }
          </p>
        </div>

        <div className="flex-three-colss">
          <p className="pokemon-info">
            <span>Height: {PokemonData.height}</span>
          </p>
          <p className="pokemon-info">
            <span>Weight: {PokemonData.weight}</span>
          </p>
          <p className="pokemon-info">
            <span>Speed: {PokemonData.stats[0].base_stat}</span>
          </p>
        </div>

        <div className="flex-three-colss">
          <div className="pokemon-info">
            <p>{PokemonData.base_experience}</p> <span>Experience: </span>
          </div>
          <div className="pokemon-info">
            <p>{PokemonData.stats[1].base_stat}</p> <span>Attack: </span>
          </div>
          <div className="pokemon-info">
            <p>
              {PokemonData.abilities
                .map((abilityInfo) => abilityInfo.ability.name)
                .slice(0, 1)
                .join(",")}
            </p>
            <span>Abilities:</span>
          </div>
        </div>
      </li>
    </>
  );
};
