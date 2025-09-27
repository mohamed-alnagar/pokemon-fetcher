// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
// .then(response=>{
//     if(!response.ok){
//         throw new Error("Could not fetch resourse")
//     }
//     return response.json();
// })
// .then(data=>console.log(data.id))

// .catch(error=>console.error(error))


async function fetchData(){
    try {

        const pokemonName=document.getElementById("pokemonName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        
      if(!response.ok){
        throw new Error ("Could not fetch Resource")

      }

      const data = await response.json();
      
      const pokemonSpirite=data.sprites.front_default;
      const imgElement=document.getElementById("pokemonSpirit");

      imgElement.src=pokemonSpirite;
      imgElement.style.display="block";
    }
    catch(error){
      console.error(error);
        
}
}
// fetchData();