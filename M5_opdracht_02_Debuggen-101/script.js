const array = [
    { name: "N. Armstrong", profession: "spacecowboy", age: 89 },
    { name: "H. de Haan", profession: "kippen hypnotiseur", age: 59 },
    { name: "A. Curry", profession: "kikvorsman", age: 32 },
    { name: "F. Vonk", profession: "slangenmelker", age: 36 },
    { name: "B. Bunny", profession: "konijnen uitlaatservice", age: 27 },
    { name: "Dr.Evil", profession: "digital overlord", age: 56 }
];

for (let person of array) {
    //hier moeten console.logs komen
    // 1:
    //console.log("Persoon:", person);
    // 2:
    //console.log("Naam:", person.name);
    // 3:
    //console.log("Namen/Geboortejaar:", `${person.name} was born in the year ${2020 - person.age}`);
    // 4:
    //console.log("Namen/Beroep:", `${person.name} is a ${person.profession}`);
    if (person.age > 50) {
        console.log(`${person.name}, THE ${person.profession} is older than 50.`)
    };
}
