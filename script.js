

//* verify if fetch data is working
fetch(" https://pokeapi.co/api/v2/pokemon/dragapult")
    .then(res => {
        if(!res.ok) {
            throw new Error("Could not fetch data");
        }
        return res.json();
    })
    .then(data => console.log(data.name))
    .catch(error => console.error(error));

// fetchData();

document.getElementById("searchButton").addEventListener("click", fetchPokemon);
// document.getElementById("randomButton").addEventListener("click", fetchRandomPokemon);

async function fetchPokemon() {
    const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`${pokemonName} in not registered in the pokedex`);
        }

        const data = await response.json();
        
        document.getElementById("name").innerText = data.name.toUpperCase();
        document.getElementById("sprite").src = data.sprites.front_default;
        document.getElementById("type").innerText = 
            "Type: " + data.types.map(t => t.type.name).join(", ");

            const statsList = document.getElementById("stats");
            statsList.innerHTML = ""; // Clear previous stats
            data.stats.forEach(stat => {
                const li = document.createElement("li");
                li.innerText = `${stat.stat.name.toUpperCase()}: ${stat.base_stat}`;
                statsList.appendChild(li);
            });
        
        document.getElementById("pokedex").style.display = "block";
        console.log(data.name);
        console.log(data.abilities);
        console.log(data.game_indices);
        
        
        
    } catch (error) {
        alert(error.message);
        console.error(error); // I like having data of the error in console
    }
}


//  async function fetchData() {
//     try {

//         const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
//         const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

//         if(!response.ok) {
//             throw new Error(`Could not find any data: ${pokemonName} in not registered in the pokedex`);
//         }
       
        // const data = await response.json();
//         const pokemonSprite = data.sprites.front_default; // substract the sprite to display it
//         const imgElement = document.getElementById("pokemonSprite");
//         // console.log(data.sprites); // pokemon data as object

//         const game_indices = data.game_indices;
//         console.log(data.game_indices);
        
// //         //display type : types.type
        

// //         imgElement.src = pokemonSprite;
// //         imgElement.style.display = "block";
        
//     } catch (error) {
//         console.error(error);      
//     }   
//  }

 

 //* tried to make the 'Enter' key to function as submit instead of just having to press the button tag, but it doesn't work.
//  document.getElementById('choosePokemon').onkeydown = function(e){
//     if(e.keyCode == 13){
//       // submit
//     }
//  };

// let allPokemons = [];

// fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
// .then((response) => response.json())
// .then((data) => {
//     allPokemons = data.results;
// console.log(data);
// console.log(data.results);
// console.log(data.results[0]);
// console.log(data.results[0].name);
// console.log(data.results[0].url);
// });

