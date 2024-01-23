async function getPkmn() {
    const url = `https://pokeapi.co/api/v2/pokemon/1`;
    const respuesta = await fetch(url);
    const datos = await respuesta.json();
    return datos
}

async function mi_peticion(){
    const pkmn = await getPkmn()
    console.log(pkmn)
}

mi_peticion();