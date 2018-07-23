// ------->   TRAINER CLASS GOES HERE
$("#btnPink").prop("disabled", true);
$("#btnYellow").prop("disabled", true);
let allAjaxDone = 0;
let doneLoading = false;
class trainerClass {
    constructor(pokemon1,pokemon2,pokemon3, trainerName, profilePic) {
        this.myPokemonNames = [pokemon1,pokemon2,pokemon3];
        this.myPokemonObjects = [];
        this.trainerName = trainerName;
        this.profilePic = profilePic;
    }
    getMyPokemon() {
        var self = this;
        console.log(`STARTING ${this.trainerName.toUpperCase()}'S AJAX CALL`);
        this.myPokemonNames.forEach(pokemon=>{
            $.ajax({
                url: "https://pokeapi.co/api/v2/pokemon/" + pokemon
            }).done((result)=>{
                self.myPokemonObjects.push(result);
                if (self.myPokemonObjects.length === self.myPokemonNames.length) {
                    console.log(`${self.trainerName.toUpperCase()}'s AJAX CALLS COMPLETELY DONE`);
                    allAjaxDone ++;
                    $("#caption").text(`${allAjaxDone} out of ${safronGym.length} trainers loaded...`);
                    if (allAjaxDone === safronGym.length) {
                        console.log("ALL AJAX CALLS DONE");
                        setTimeout(()=>{
                            $("#caption").text("CLICK LEFT AND RIGHT TO SEE OUR TRAINERS");
                        },1500);
                        $("#btnPink").prop("disabled", false);
                        $("#btnYellow").prop("disabled", false);
                        doneLoading = true;
                    }
                }
            }).fail((result)=> {
                console.log("failed");
            });
        });
    }
}
let kanye = new trainerClass("bulbasaur","meowth","squirtle", "kanye", "kanyePic.jpg");
let messi = new trainerClass("victini", "butterfree", "mimikyu-disguised", "messi", "messiPic.jpg");
let jorge = new trainerClass("voltorb", "geodude", "poliwag", "jorge", "jorgePic.jpg");
kanye.getMyPokemon();
messi.getMyPokemon();
jorge.getMyPokemon();
let safronGym = [kanye,jorge,messi];
console.log("ARRAY OF ALL 3 TRAINERS:");
console.log(safronGym);
console.log("-------------------");
console.log("-------------------");
console.log("-------------------");


