// ---------> MAIN JS/FUNCTION CALLS GOES HERE
let firstMove = false;
let index = 0;
$("#btnYellow").click(()=>{
    if (firstMove === false) {
        $("#mainImg").html("<h1 id = 'trainerName'></h1>");   
        firstMove = true;
    }
    $("#trainerName").text(safronGym[index].trainerName.toUpperCase());
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
        var pokemon = $("<p data-target = '#showPokemon' data-toggle='modal' class = 'pokemonBox'></p>");
        pokemon.text(`${pokemonObject.name.toUpperCase()}`);
        pokemon.click(()=>{
            console.log("-------------------");
            console.log(`${currentTrainer.toUpperCase()}'s  ${pokemonObject.name.toUpperCase()}`)
            console.log(pokemonObject);
            console.log("-------------------");
            $("#pokemonModalName").text(pokemonObject.name.toUpperCase());
            if (pokemonObject.id <= 721) {
                var imgUrl = `http://www.pokestadium.com/sprites/xy/${pokemonObject.name}.gif`;
            }
            else {
                var imgUrl = pokemonObject.sprites.front_default;
            }
            $("#modalDiv").html(`<img src = ${imgUrl}><h5>HP: ${pokemonObject.stats[5].base_stat}</h5><h5>Attack: ${pokemonObject.stats[4].base_stat}</h5><h5>Defense: ${pokemonObject.stats[3].base_stat}</h5>`);
        });
        $("#secondImg").append(pokemon);
    });
    index --;
    if (index === -1) {
        index = safronGym.length-1;
    }
});
$("#btnPink").click(()=>{
    if (firstMove === false) {
        $("#mainImg").html("<h1 id = 'trainerName'></h1>");
        firstMove = true;
    }
    $("#trainerName").text(safronGym[index].trainerName.toUpperCase());
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
        var pokemon = $("<p data-target='#showPokemon'  data-toggle='modal' class = 'pokemonBox'></p>");
        pokemon.text(`${pokemonObject.name.toUpperCase()}`);
        pokemon.click(()=>{
            console.log("-------------------");
            console.log(`${currentTrainer.toUpperCase()}'s  ${pokemonObject.name.toUpperCase()}`)
            console.log(pokemonObject);
            console.log("-------------------");
            $("#pokemonModalName").text(pokemonObject.name.toUpperCase());
            if (pokemonObject.id <= 721) {
                var imgUrl = `http://www.pokestadium.com/sprites/xy/${pokemonObject.name}.gif`;
            }
            else {
                var imgUrl = pokemonObject.sprites.front_default;
            }
            $("#modalDiv").html(`<img src = ${imgUrl}><h5>HP: ${pokemonObject.stats[5].base_stat}</h5><h5>Attack: ${pokemonObject.stats[4].base_stat}</h5><h5>Defense: ${pokemonObject.stats[3].base_stat}</h5>`);
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
