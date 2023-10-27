let pokes = ["sprigatito", "floragato", "meowscarada", "fuecoco", "crocalor", "skeledirge", "quaxly", "quaxwell", "quaquaval", "lechonk", "oinkologne", "tarountula", "spidops", "nymble", "lokix", "hoppip", "skiploom", "jumpluff", "fletchling", "fletchinder", "talonflame", "pawmi", "pawmo", "pawmot", "houndour", "houndoom", "yungoos", "gumshoos", "skwovet", "greedent", "sunkern", "sunflora", "kricketot", "kricketune", "scatterbug", "spewpa", "vivillon", "combee", "vespiquen", "rookidee", "corvisquire", "corviknight", "happiny", "chansey", "blissey", "azurill", "marill", "azumarill", "surskit", "masquerain", "buizel", "floatzel", "wooper", "quagsire", "wooper-paldean", "clodsire", "psyduck", "chewtle", "drednaw", "igglybuff", "jigglypuff", "wigglytuff", "ralts", "kirlia", "gardevoir", "gallade", "drowzee", "hypno", "gastly", "haunter", "gengar", "tandemaus", "maushold", "pichu", "pikachu", "raichu", "fidough", "dachsbun", "slakoth", "vigoroth", "slaking", "bounsweet", "steenee", "tsareena", "smoliv", "dolliv", "arboliva", "bonsly", "sudowoodo", "rockruff", "lycanroc", "rolycoly", "carkol", "coalossal", "shinx", "luxio", "luxray", "starly", "staravia", "staraptor", "oricorio", "mareep", "flaaffy", "ampharos", "petilil", "lilligant", "lilligant-hisuian", "shroomish", "breloom", "applin", "flapple", "appletun", "spoink", "grumpig", "squawkabilly", "misdreavus", "mismagius", "makuhita", "hariyama", "crabrawler", "crabominable", "salandit", "salazzle", "phanpy", "donphan", "cufant", "copperajah", "gible", "gabite", "garchomp", "nacli", "naclstack", "garganacl", "wingull", "pelipper", "magikarp", "gyarados", "arrokuda", "barraskewda", "basculin", "basculegion", "gulpin", "swalot", "meowth", "meowth-alolan", "meowth-galarian", "persian", "persian-alolan", "perrserker", "drifloon", "drifblim", "flabebe", "floette", "florges", "diglett", "dugtrio", "torkoal", "numel", "camerupt", "bronzor", "bronzong", "axew", "fraxure", "haxorus", "mankey", "primeape", "annihilape", "meditite", "medicham", "riolu", "lucario", "charcadet", "armarouge", "ceruledge", "barboach", "whiscash", "tadbulb", "bellibolt", "goomy", "sliggoo", "sliggoo-hisuian", "goodra", "goodra-hisuian", "croagunk", "toxicroak", "wattrel", "kilowattrel", "eevee", "vaporeon", "jolteon", "flareon", "espeon", "umbreon", "leafeon", "glaceon", "sylveon", "dunsparce", "dudunsparce", "deerling", "sawsbuck", "girafarig", "farigiraf", "grimer", "grimer-alolan", "muk", "muk-alolan", "maschiff", "mabosstiff", "toxel", "toxtricity", "dedenne", "pachirisu", "shroodle", "grafaiai", "stantler", "wyrdeer", "foongus", "amoonguss", "voltorb", "voltorb-hisuian", "electrode", "electrode-hisuian", "magnemite", "magneton", "magnezone", "ditto", "growlithe", "growlithe-hisuian", "arcanine", "arcanine-hisuian", "teddiursa", "ursaring", "ursaluna", "zangoose", "seviper", "swablu", "altaria", "skiddo", "gogoat", "tauros", "tauros-paldean", "tauros-paldean-fire", "tauros-paldean-water", "litleo", "pyroar", "stunky", "skuntank", "zorua", "zorua-hisuian", "zoroark", "zoroark-hisuian", "sneasel", "sneasel-hisuian", "weavile", "sneasler", "murkrow", "honchkrow", "gothita", "gothitelle", "sinistea", "polteageist", "mimikyu", "klefki", "indeedee", "indeedee-female", "bramblin", "brambleghast", "toedscool", "toedscruel", "tropius", "fomantis", "lurantis", "klawf", "capsakid", "scovillain", "cacnea", "cacturne", "rellor", "rabsca", "venonat", "venomoth", "pineco", "forretress", "scyther", "kleavor", "scizor", "heracross", "flittle", "espathra", "hippopotas", "hippowdon", "sandile", "krokorok", "krookodile", "silicobra", "sandaconda", "mudbray", "mudsdale", "larvesta", "volcarona", "bagon", "shelgon", "salamence", "tinkatink", "tinkatuff", "tinkaton", "hatenna", "hattrem", "hatterene", "impidimp", "morgrem", "grimmsnarl", "wiglett", "wugtrio", "bombirdier", "finizen", "palafin", "varoom", "revavroom", "cyclizar", "orthworm", "sableye", "shuppet", "banette", "falinks", "hawlucha", "spiritomb", "noibat", "noivern", "dreepy", "drakloak", "dragapult", "glimmet", "glimmora", "rotom", "greavard", "houndstone", "oranguru", "passimian", "komala", "larvitar", "pupitar", "tyranitar", "stonjourner", "eiscue", "pincurchin", "sandygast", "palossand", "slowpoke", "slowbro", "slowking", "shellos", "gastrodon", "shellder", "cloyster", "qwilfish", "qwilfish-hisuian", "overqwil", "luvdisc", "finneon", "lumineon", "bruxish", "alomomola", "skrelp", "dragalge", "clauncher", "clawitzer", "tynamo", "eelektrik", "eelektross", "mareanie", "toxapex", "flamigo", "dratini", "dragonair", "dragonite", "snom", "frosmoth", "snover", "abomasnow", "delibird", "cubchoo", "beartic", "snorunt", "glalie", "froslass", "cryogonal", "cetoddle", "cetitan", "bergmite", "avalugg", "avalugg-hisuian", "rufflet", "braviary", "braviary-hisuian", "pawniard", "bisharp", "kingambit", "deino", "zweilous", "hydreigon", "veluza", "dondozo", "tatsugiri", "great-tusk", "scream-tail", "brute-bonnet", "flutter-mane", "slither-wing", "sandy-shocks", "iron-treads", "iron-bundle", "iron-hands", "iron-jugulis", "iron-moth", "iron-thorns", "frigibax", "arctibax", "baxcalibur", "gimmighoul", "gholdengo", "wo-chien", "chien-pao", "ting-lu", "chi-yu", "roaring-moon", "iron-valiant", "koraidon", "miraidon", "walking-wake", "iron-leaves"];