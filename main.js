async function getPkmn() {
    const i = Math.floor(Math.random() * 898) + 1;
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    const respuesta = await fetch(url);
    const datos = await respuesta.json();
    return datos
}

async function mi_peticion(){
    const pkmn = await getPkmn()
    const pkmn1 = await getPkmn()
    const pkmn2 = await getPkmn()
    const pkmn3 = await getPkmn()
    
    console.log(pkmn.name)
    console.log(pkmn1.name)
    console.log(pkmn2.name)
    console.log(pkmn3.name)
    console.log(pkmn.sprites.front_default)

    const {name} = pkmn
    const {front_default} = pkmn.sprites

    const imgElement = document.createElement('img');
    imgElement.src = pkmn.sprites.front_default;
    

    document.body.innerHTML =
    `
    <p>${pkmn.name}</p>
    <p class="pokemon-card"></p>
    `

    const pokemonCard = document.querySelector('.pokemon-card');
    pokemonCard.appendChild(imgElement);
}

mi_peticion()