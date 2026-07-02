export const PokemonData = ({ pokidata }) => {
  return (
    <section className="pokemon-card">
      <figure>
        <img src={pokidata.sprites.front_default} alt={pokidata.name} />
      </figure>

      <h2 className="Name">{pokidata.name}</h2>

    <p className="ability">
  {pokidata.abilities.map(a => a.ability.name).join(", ")}
</p>

      <div className="Properties">
        <p>Height: {pokidata.height}</p>
        <p>Weight: {pokidata.weight}</p>

        <p>
          Speed: {pokidata.stats.find(s => s.stat.name === "speed")?.base_stat}
        </p>

        <p>Experience: {pokidata.base_experience}</p>

        <p>
          Attack: {pokidata.stats.find(s => s.stat.name === "attack")?.base_stat}
        </p>

        <p>
          Abilities:{" "}
          {pokidata.abilities.map(a => a.ability.name).join(", ")}
        </p>
      </div>
    </section>
  );
};