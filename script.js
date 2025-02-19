
//* verify if fetch data is working
// fetch(" https://pokeapi.co/api/v2/pokemon/dragapult")
//     .then(res => {
//         if(!res.ok) {
//             throw new Error("Could not fetch data");
//         }
//         return res.json();
//     })
//     .then(data => console.log(data.name))
//     .catch(error => console.error(error));

// fetchData();

 async function fetchData() {
    try {

        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if(!response.ok) {
            throw new Error(`Could not find any data: ${pokemonName} in not registered in the pokedex`);
        }
        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite");

        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";
        
    } catch (error) {
        console.error(error);      
    }
 }