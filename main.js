// ---------> MAIN JS/FUNCTION CALLS GOES HERE
let index = 0;
$("#btnYellow").click(()=>{
    if (safronGym[index].trainerName === "kanye") {
        $("#mainImg").html(`<div id = 'trainerHolder'><h1 id = 'trainerName'>${safronGym[index].trainerName.toUpperCase()}<img id = 'badge' src= 'marsh-badge.png'></h1></div><img id ='profilePic' src = '${safronGym[index].profilePic}'>`);
    }
    else {
        $("#mainImg").html(`<h1 id = 'trainerName'>${safronGym[index].trainerName.toUpperCase()}</h1><img id ='profilePic' src = '${safronGym[index].profilePic}'>`);
    }
    console.log("-------------------");
    console.log("-------------------");
    console.log("-------------------");
    console.log(`TRAINER SELECTED: ${safronGym[index].trainerName.toUpperCase()}`)
    console.log(safronGym[index]);
    console.log("-------------------");
    console.log("-------------------");
    console.log("-------------------");
    $("#secondImg").empty();
    var currentTrainer = safronGym[index].trainerName;
    safronGym[index].myPokemonObjects.forEach(pokemonObject=>{
        var pokemon = $("<p data-target = '#important-msg' data-toggle='modal' class = 'pokemonBox'></p>");
        pokemon.text(`${pokemonObject.name.toUpperCase()}`);
        pokemon.click(()=>{
            console.log("-------------------");
            console.log(`${currentTrainer.toUpperCase()}'s  ${pokemonObject.name.toUpperCase()}`)
            console.log(pokemonObject);
            console.log("-------------------");
            $(".modal-title").text(pokemonObject.name.toUpperCase());
            if (pokemonObject.id <= 721) {
                var imgUrl = `http://www.pokestadium.com/sprites/xy/${pokemonObject.name}.gif`;
            }
            else {
                var imgUrl = pokemonObject.sprites.front_default;
            }
            var abilitiesList = [];
            pokemonObject.abilities.forEach(pokemonAbility=>{
                abilitiesList.push(pokemonAbility.ability.name);
            });
            $("#modalDiv").html(`<img src = ${imgUrl}><h3>HP: ${pokemonObject.stats[5].base_stat}</h3><h3>Attack: ${pokemonObject.stats[4].base_stat}</h3><h3>Abilities: ${abilitiesList.join(" ").toUpperCase()}</h3>`);
        });
        $("#secondImg").append(pokemon);
    });
    index --;
    if (index === -1) {
        index = safronGym.length-1;
    }
});
$("#btnPink").click(()=>{
    if (safronGym[index].trainerName === "kanye") {
        $("#mainImg").html(`<div id = 'trainerHolder'><h1 id = 'trainerName'>${safronGym[index].trainerName.toUpperCase()}<img id = 'badge' src= 'http://www.wiu.edu/university_technology/stars/_images/star.png'></h1></div><img id ='profilePic' src = '${safronGym[index].profilePic}'>`);
    }
    else {
        $("#mainImg").html(`<h1 id = 'trainerName'>${safronGym[index].trainerName.toUpperCase()}</h1><img id ='profilePic' src = '${safronGym[index].profilePic}'>`);
    }
    console.log("-------------------");
    console.log("-------------------");
    console.log("-------------------");
    console.log(`TRAINER SELECTED: ${safronGym[index].trainerName.toUpperCase()}`)
    console.log(safronGym[index]);
    console.log("-------------------");
    console.log("-------------------");
    console.log("-------------------");
    $("#secondImg").empty();
    var currentTrainer = safronGym[index].trainerName;
    safronGym[index].myPokemonObjects.forEach(pokemonObject=>{
        var pokemon = $("<p data-target='#important-msg'  data-toggle='modal' class = 'pokemonBox'></p>");
        pokemon.text(`${pokemonObject.name.toUpperCase()}`);
        pokemon.click(()=>{
            console.log("-------------------");
            console.log(`${currentTrainer.toUpperCase()}'s  ${pokemonObject.name.toUpperCase()}`)
            console.log(pokemonObject);
            console.log("-------------------");
            $(".modal-title").text(pokemonObject.name.toUpperCase());
            if (pokemonObject.id <= 721) {
                var imgUrl = `http://www.pokestadium.com/sprites/xy/${pokemonObject.name}.gif`;
            }
            else {
                var imgUrl = pokemonObject.sprites.front_default;
            }
            var abilitiesList = [];
            pokemonObject.abilities.forEach(pokemonAbility=>{
                abilitiesList.push(pokemonAbility.ability.name);
            });
            $("#modalDiv").html(`<img src = ${imgUrl}><h3>HP: ${pokemonObject.stats[5].base_stat}</h3><h3>Attack: ${pokemonObject.stats[4].base_stat}</h3><h3>Abilities: ${abilitiesList.join(" ").toUpperCase()}</h3>`);
        });
        $("#secondImg").append(pokemon);
    });
    index ++;
    if (index === safronGym.length) {
        index = 0;
    }
});
let rightScreenIndex = 0;
$(document).keyup(event=>{
    if (doneLoading === false) {
        return;
    }
    if (event.keyCode === 39) {
        $("#btnPink").click();
    }
    else if (event.keyCode === 37) {
        $("#btnYellow").click();
    }
    else if ((event.keyCode === 38 || event.keyCode === 40) && $("#secondImg").children().length > 0) {
        if (event.keyCode === 38) {
            console.log("UP");
            var allPokemon = $("#secondImg").children();
            rightScreenIndex --;
            if (rightScreenIndex < 0) {
                rightScreenIndex = allPokemon.length-1; 
            }
            console.log(rightScreenIndex);
            $(".pokemonBox").removeClass("pokemonSelected");
            allPokemon[rightScreenIndex].classList.add("pokemonSelected");
        }
        else {
            console.log("DOWN");
            var allPokemon = $("#secondImg").children();
            rightScreenIndex ++;
            if (rightScreenIndex === allPokemon.length) {
                rightScreenIndex = 0; 
            }
            console.log(rightScreenIndex);
            $(".pokemonBox").removeClass("pokemonSelected");
            allPokemon[rightScreenIndex].classList.add("pokemonSelected");
        }
    }
    if (event.keyCode === 13){
        $(".pokemonSelected").click();
    }
});