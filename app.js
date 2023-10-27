/*let pokes = ["sprigatito", "floragato", "meowscarada", "fuecoco", "crocalor", "skeledirge", "quaxly", "quaxwell", "quaquaval", "lechonk", "oinkologne", "tarountula", "spidops", "nymble", "lokix", "hoppip", "skiploom", "jumpluff", "fletchling", "fletchinder", "talonflame", "pawmi", "pawmo", "pawmot", "houndour", "houndoom", "yungoos", "gumshoos", "skwovet", "greedent", "sunkern", "sunflora", "kricketot", "kricketune", "scatterbug", "spewpa", "vivillon", "combee", "vespiquen", "rookidee", "corvisquire", "corviknight", "happiny", "chansey", "blissey", "azurill", "marill", "azumarill", "surskit", "masquerain", "buizel", "floatzel", "wooper", "quagsire", "wooper-paldean", "clodsire", "psyduck", "chewtle", "drednaw", "igglybuff", "jigglypuff", "wigglytuff", "ralts", "kirlia", "gardevoir", "gallade", "drowzee", "hypno", "gastly", "haunter", "gengar", "tandemaus", "maushold", "pichu", "pikachu", "raichu", "fidough", "dachsbun", "slakoth", "vigoroth", "slaking", "bounsweet", "steenee", "tsareena", "smoliv", "dolliv", "arboliva", "bonsly", "sudowoodo", "rockruff", "lycanroc", "rolycoly", "carkol", "coalossal", "shinx", "luxio", "luxray", "starly", "staravia", "staraptor", "oricorio", "mareep", "flaaffy", "ampharos", "petilil", "lilligant", "lilligant-hisuian", "shroomish", "breloom", "applin", "flapple", "appletun", "spoink", "grumpig", "squawkabilly", "misdreavus", "mismagius", "makuhita", "hariyama", "crabrawler", "crabominable", "salandit", "salazzle", "phanpy", "donphan", "cufant", "copperajah", "gible", "gabite", "garchomp", "nacli", "naclstack", "garganacl", "wingull", "pelipper", "magikarp", "gyarados", "arrokuda", "barraskewda", "basculin", "basculegion", "gulpin", "swalot", "meowth", "meowth-alolan", "meowth-galarian", "persian", "persian-alolan", "perrserker", "drifloon", "drifblim", "flabebe", "floette", "florges", "diglett", "dugtrio", "torkoal", "numel", "camerupt", "bronzor", "bronzong", "axew", "fraxure", "haxorus", "mankey", "primeape", "annihilape", "meditite", "medicham", "riolu", "lucario", "charcadet", "armarouge", "ceruledge", "barboach", "whiscash", "tadbulb", "bellibolt", "goomy", "sliggoo", "sliggoo-hisuian", "goodra", "goodra-hisuian", "croagunk", "toxicroak", "wattrel", "kilowattrel", "eevee", "vaporeon", "jolteon", "flareon", "espeon", "umbreon", "leafeon", "glaceon", "sylveon", "dunsparce", "dudunsparce", "deerling", "sawsbuck", "girafarig", "farigiraf", "grimer", "grimer-alolan", "muk", "muk-alolan", "maschiff", "mabosstiff", "toxel", "toxtricity", "dedenne", "pachirisu", "shroodle", "grafaiai", "stantler", "wyrdeer", "foongus", "amoonguss", "voltorb", "voltorb-hisuian", "electrode", "electrode-hisuian", "magnemite", "magneton", "magnezone", "ditto", "growlithe", "growlithe-hisuian", "arcanine", "arcanine-hisuian", "teddiursa", "ursaring", "ursaluna", "zangoose", "seviper", "swablu", "altaria", "skiddo", "gogoat", "tauros", "tauros-paldean", "tauros-paldean-fire", "tauros-paldean-water", "litleo", "pyroar", "stunky", "skuntank", "zorua", "zorua-hisuian", "zoroark", "zoroark-hisuian", "sneasel", "sneasel-hisuian", "weavile", "sneasler", "murkrow", "honchkrow", "gothita", "gothitelle", "sinistea", "polteageist", "mimikyu", "klefki", "indeedee", "indeedee-female", "bramblin", "brambleghast", "toedscool", "toedscruel", "tropius", "fomantis", "lurantis", "klawf", "capsakid", "scovillain", "cacnea", "cacturne", "rellor", "rabsca", "venonat", "venomoth", "pineco", "forretress", "scyther", "kleavor", "scizor", "heracross", "flittle", "espathra", "hippopotas", "hippowdon", "sandile", "krokorok", "krookodile", "silicobra", "sandaconda", "mudbray", "mudsdale", "larvesta", "volcarona", "bagon", "shelgon", "salamence", "tinkatink", "tinkatuff", "tinkaton", "hatenna", "hattrem", "hatterene", "impidimp", "morgrem", "grimmsnarl", "wiglett", "wugtrio", "bombirdier", "finizen", "palafin", "varoom", "revavroom", "cyclizar", "orthworm", "sableye", "shuppet", "banette", "falinks", "hawlucha", "spiritomb", "noibat", "noivern", "dreepy", "drakloak", "dragapult", "glimmet", "glimmora", "rotom", "greavard", "houndstone", "oranguru", "passimian", "komala", "larvitar", "pupitar", "tyranitar", "stonjourner", "eiscue", "pincurchin", "sandygast", "palossand", "slowpoke", "slowbro", "slowking", "shellos", "gastrodon", "shellder", "cloyster", "qwilfish", "qwilfish-hisuian", "overqwil", "luvdisc", "finneon", "lumineon", "bruxish", "alomomola", "skrelp", "dragalge", "clauncher", "clawitzer", "tynamo", "eelektrik", "eelektross", "mareanie", "toxapex", "flamigo", "dratini", "dragonair", "dragonite", "snom", "frosmoth", "snover", "abomasnow", "delibird", "cubchoo", "beartic", "snorunt", "glalie", "froslass", "cryogonal", "cetoddle", "cetitan", "bergmite", "avalugg", "avalugg-hisuian", "rufflet", "braviary", "braviary-hisuian", "pawniard", "bisharp", "kingambit", "deino", "zweilous", "hydreigon", "veluza", "dondozo", "tatsugiri", "great-tusk", "scream-tail", "brute-bonnet", "flutter-mane", "slither-wing", "sandy-shocks", "iron-treads", "iron-bundle", "iron-hands", "iron-jugulis", "iron-moth", "iron-thorns", "frigibax", "arctibax", "baxcalibur", "gimmighoul", "gholdengo", "wo-chien", "chien-pao", "ting-lu", "chi-yu", "roaring-moon", "iron-valiant", "koraidon", "miraidon", "walking-wake", "iron-leaves"];
*/

let fully = ["meowscarada", "skeledirge", "quaquaval", "oinkologne", "spidops", "lokix", "jumpluff", 
"talonflame", "pawmot", "houndoom", "gumshoos", "greedent", "sunflora", "kricketune", "vivillon", 
"vespiquen", "corviknight", "blissey", "azumarill", "masquerain", "floatzel", "quagsire", "clodsire", 
"golduck", "drednaw", "wigglytuff", "gardevoir", "gallade", "hypno", "gengar", "maushold", "raichu", 
"dachsbun", "slaking", "tsareena", "arboliva", "sudowoodo", "lycanroc", "lycanroc-midnight", 
"lycanroc-dusk", "coalossal", "luxray", "staraptor", "oricorio", "ampharos", "lilligant", 
"lilligant-hisuian", "breloom", "flapple", "appletun", "grumpig", "squawkabilly", "mismagius", "hariyama", 
"crabominable", "salazzle", "donphan", "copperajah", "garchomp", "garganacl", "pelipper", "gyarados", 
"barraskewda", "basculegion", "swalot", "persian", "persian-alolan", "perrserker", "drifblim", 
"florges", "dugtrio", "dugtrio-alolan", "torkoal", "camerupt", "bronzong", "haxorus", 
"medicham", "lucario", "armarouge", "ceruledge", "whiscash", "bellibolt", "goodra", "goodra-hisuian", 
"toxicroak", "kilowattrel", "vaporeon", "jolteon", "flareon", "espeon", "umbreon", "leafeon", "glaceon", 
"sylveon", "dudunsparce", "sawsbuck", "farigiraf", "muk", "muk-alolan", "mabosstiff", "toxtricity", 
"dedenne", "pachirisu", "grafaiai", "wyrdeer", "amoonguss", "electrode", "electrode-hisuian", 
"magnezone", "ditto", "arcanine", "arcanine-hisuian", "ursaluna", "zangoose", "seviper", "altaria", 
"gogoat", "tauros", "tauros-paldean", "tauros-paldean-fire", "tauros-paldean-water", "pyroar", "skuntank", 
"zoroark", "zoroark-hisuian", "weavile", "sneasler", "honchkrow", "gothitelle", "polteageist", "mimikyu", 
"klefki", "indeedee", "indeedee-female", "brambleghast", "toedscruel", "tropius", "lurantis", "klawf", 
"scovillain", "cacturne", "rabsca", "venomoth", "forretress", "kleavor", "scizor", "heracross",
"hippowdon", "krookodile", "sandaconda", "mudsdale", "salamence", "tinkaton", "hatterene", 
"grimmsnarl", "wugtrio", "bombirdier", "revavroom", "cyclizar", "orthworm", "sableye", "banette",
"falinks", "hawlucha", "spiritomb", "noivern", "dragapult", "glimmora", "rotom", "houndstone", "oranguru", 
"passimian", "komala", "tyranitar", "stonjourner", "eiscue", "pincurchin", "palossand", "slowbro",
"slowbro-galarian", "slowking-galarian", "slowking", "gastrodon", "cloyster", "qwilfish", "overqwil", 
"luvdisc", "lumineon", "bruxish", "alomomola", "dragalge", "clawitzer", "eelektross", "toxapex", "flamigo", 
"dragonite", "frosmoth", "abomasnow", "delibird", "beartic", "glalie", "froslass", "cryogonal", 
"cetitan", "avalugg", "avalugg-hisuian", "braviary", "braviary-hisuian", "kingambit", 
"hydreigon", "veluza", "dondozo", "tatsugiri", "baxcalibur", "gholdengo", "charizard", "typhlosion",
"typhlosion-hisuian", "samurott", "samurott-hisuian", "chesnaught", "delphox", "greninja", "carbink",
"decidueye", "decidueye-hisuian", "rillaboom", "cinderace", "inteleon", "raichu-alolan"];

let oneCopyString= '';
let twoCopyString= '';

const box = document.querySelector('#pokes');
const banned = document.querySelector('#banned');
box.addEventListener("click", function(e){
    if(e.target.tagName == 'IMG'){
        banned.append(e.target);
        //banned.append(e.target.parentElement);
    }
})
banned.addEventListener("click", function(e){
    if(e.target.tagName == 'IMG'){
        box.append(e.target);
        //box.append(e.target.parentElement);
    }
})

// const post = function(poke, place){
//     let img = document.createElement('img');
//     img.src = `sprites/${poke}.png`;
//     img.alt = poke;
//     img.className = "pokemon";
//     img.id = `${poke}`;
//     place.append(img);
//     return;
// }

const post = function(poke, place){
    let div = document.createElement('div');
    let img = document.createElement('img');
    div.className = "pokemon";
    img.src = `sprites/${poke}.png`;
    img.alt = `${poke}`;
    img.id = `${poke}`;;
    div.append(img);
    div.innerHTML = div.innerHTML + "<br>" + "<p>" + poke + "</p>";
    place.append(div);
    return;
}


fully.map(function(poke){
    post(poke, box);
});


const generator = document.querySelector('#generate');
const poolSize = document.querySelector('#pool-size');
const teamone = document.querySelector("#teamone");
const teamtwo = document.querySelector("#teamtwo");
//const teamCopy = document.querySelector("#copy-team")
generator.addEventListener("click", function(){
    
    if(poolSize.value < 2){
        poolSize.value = 2;
    }

    //select all remaining images after bans
    let workingList = Array.from(document.querySelectorAll('#pokes img'));
    let maxSize = Math.floor(workingList.length/2);
    if(maxSize < 2){
        alert("At least 2 pokemon must remain to generate teams");
        return;
    }

    //correct for team sizes that are too large
    if(poolSize.value > maxSize){
        poolSize.value = maxSize;
    }
    teamone.innerHTML = '<p>Team One:</p>';
    teamone.className = '';
    teamtwo.innerHTML = '<p>Team Two:</p>';
    teamtwo.className = '';
    //teamCopy.className = '';
    //oneCopyString = 'Team One: ';
    //twoCopyString = 'Team Two: ';

    //convert working list to a list of pokemon names
    workingList = workingList.map(function(mon){
        return mon.id;
    })

    //Use Fisher-Yates to shuffle the available Pokemon
    for (i = workingList.length -1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i+1));
        let k = workingList[i];
        workingList[i] = workingList[j];
        workingList[j] = k;
    }

    for (j = 0; j < poolSize.value*2; j++) {
        if (j < poolSize.value) {
            post(workingList[j], teamone);
            //oneCopyString = oneCopyString + workingList[j] + ', ';
        } else {
            post(workingList[j], teamtwo);
            //twoCopyString = twoCopyString + workingList[j] + ', ';
        }
    };
});

teamCopy.addEventListener("click", function(){
    navigator.clipboard.writeText(oneCopyString+twoCopyString);
});