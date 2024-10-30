let arrayPokemons;


function getPokemon() {
   fetch("https://pokeapi.co/pi/v2/pokemon",
   {
      method: "GET",
   }
)
.then((response) => response.json())
.then((data) => {
   arrayPokemons = data.results;
   appendPokemons(arrayPokemons);
})
.catch((error) => {
   console.error ("error",error);
})
}

getPokemon();

function appendPokemons(pokemons) {
   let place = document.querySelector("#data-output");
   let out = "";

   for (let pokemon of pokemons) {
      out += `
      <tr>
         <td>${pokemon.name}</td>
         <td>${pokemon.url}</td>
      <tr>
      `;
   }
   place.innerHTML = out;
}