const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeInput = pokeNameInput.value;
    pokeInput = pokeInput.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("./pokemon-sad.gif")
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);
            let pokeImg = data.sprites.front_default;
            pokeImage(pokeImg);
            console.log(pokeImg);

            let id = data.id;
            pokeId(id);
            console.log(id);

            let name = data.name;
            pokename(name);
            console.log(name);
            
            let tipos = data.types.map(typ => typ.type.name);
            poketipo(tipos);
            console.log(tipos);

            let movimiento = data.moves.map(move => move.move.name);
            pokemov(movimiento);
            console.log(movimiento);
           

            let hp = data.stats[0].base_stat;
            pokehp(hp);
            console.log(hp)

            let atk = data.stats[1].base_stat;
            pokeatk(atk);
            console.log(atk)

            let def = data.stats[2].base_stat;
            pokedef(def);
            console.log(def)

            let satk = data.stats[3].base_stat;
            pokesatk(satk);
            console.log(satk);

            let sdef = data.stats[4].base_stat;
            pokesdef(sdef);
            console.log(sdef);

            let spd = data.stats[5].base_stat;
            pokespd(spd);
            console.log(spd);

            stati();
        }
    });
}



const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}

const pokeId=(id) => {
    const identi = document.getElementById("id");
    identi.innerHTML = ("No. " + id);
}

const pokename = (name) =>{
    const nombre = document.getElementById("name");
    nombre.innerHTML = (name);
}

const poketipo = (tipos) =>{
    const type = document.getElementById("tipo");
    type.innerHTML = (tipos);
}

const pokemov = (movi) =>{
    const move = document.getElementById("movi");
    move.innerHTML = ("Moves: " + movi);
}

const pokehp = (hp) =>{
    const pokeHp = document.getElementById("hp");
    pokeHp.innerHTML = ("HP: "+ hp);
}

const pokeatk = (atk) =>{
    const pokeAtk = document.getElementById("atk");
    pokeAtk.innerHTML = ("ATK: " + atk);
}

const pokedef= (def) =>{
    const pokeDef = document.getElementById("def");
    pokeDef.innerHTML = ("DEF: " + def);
}

const pokesatk = (satk) =>{
    const pokeSatk = document.getElementById("satk");
    pokeSatk.innerHTML = ("SATK: " + satk);
}
const pokesdef = (sdef) =>{
    const pokeSdef = document.getElementById("sdef");
    pokeSdef.innerHTML = ("SDEF: " + sdef);
}
const  pokespd = (spd) =>{
    const pokeSpd = document.getElementById("spd");
    pokeSpd.innerHTML = ("SPD: " + spd);
}

const stati = () =>{
    const title = document.getElementById("stati");
    title.innerHTML="Statistics";
}