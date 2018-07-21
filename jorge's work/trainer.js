$("#btnPink").prop("disabled", true);
$("#btnYellow").prop("disabled", true);
let allAjaxDone = 0;
class trainerClass {
    constructor(pokemon1,pokemon2,pokemon3, trainerName) {
        this.myPokemonNames = [pokemon1,pokemon2,pokemon3];
        this.myPokemonObjects = [];
        this.trainerName = trainerName;
    }
    getMyPokemon() {
        $(`#${this.trainerName}Name`).html(`<h1>${this.trainerName.toUpperCase()}</h1>`);
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
                    }
                }
            }).fail((result)=> {
                console.log("failed");
            });
        });
    }
}
let jazmine = new trainerClass("bulbasaur","meowth","squirtle", "jazmine");
let messi = new trainerClass("victini", "butterfree", "mimikyu-disguised", "messi");
let jorge = new trainerClass("voltorb", "geodude", "poliwag", "jorge");

jazmine.getMyPokemon();
messi.getMyPokemon();
jorge.getMyPokemon();

let safronGym = [jazmine,jorge,messi];
console.log("ARRAY OF ALL 3 TRAINERS:");
console.log(safronGym);
console.log("-------------------");
console.log("-------------------");
console.log("-------------------");












