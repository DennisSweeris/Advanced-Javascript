let superheroes = [
    {
        "name": "Batman",
        "publisher": "DC Comics",
        "alter_ego": "Bruce Wayne",
        "first_appearance": "Detective Comics #27",
        "weight": "210"
    },
    {
        "name": "Superman",
        "publisher": "DC Comics",
        "alter_ego": "Kal-El",
        "first_appearance": "Action Comics #1",
        "weight": "220"
    },
    {
        "name": "Flash",
        "publisher": "DC Comics",
        "alter_ego": "Jay Garrick",
        "first_appearance": "Flash Comics #1",
        "weight": "195"
    },
    {
        "name": "Green Lantern",
        "publisher": "DC Comics",
        "alter_ego": "Alan Scott",
        "first_appearance": "All-American Comics #16",
        "weight": "186"
    },
    {
        "name": "Green Arrow",
        "publisher": "DC Comics",
        "alter_ego": "Oliver Queen",
        "first_appearance": "All-American Comics #16",
        "weight": "195"
    },
    {
        "name": "Wonder Woman",
        "publisher": "DC Comics",
        "alter_ego": "Princess Diana",
        "first_appearance": "The Incredible Hulk #180",
        "weight": "165"
    },
    {
        "name": "Blue Beetle",
        "publisher": "DC Comics",
        "alter_ego": "Dan Garret",
        "first_appearance": "Mystery Men Comics #1",
        "weight": "145"
    },
    {
        "name": "Spider Man",
        "publisher": "Marvel Comics",
        "alter_ego": "Peter Parker",
        "first_appearance": "Amazing Fantasy #15",
        "weight": "167"
    },
    {
        "name": "Captain America",
        "publisher": "Marvel Comics",
        "alter_ego": "Steve Rogers",
        "first_appearance": "Captain America Comics #1",
        "weight": "220"
    },
    {
        "name": "Iron Man",
        "publisher": "Marvel Comics",
        "alter_ego": "Tony Stark",
        "first_appearance": "Tales of Suspense #39",
        "weight": "250"
    },
    {
        "name": "Thor",
        "publisher": "Marvel Comics",
        "alter_ego": "Thor Odinson",
        "first_appearance": "Journey into Myster #83",
        "weight": "200"
    },
    {
        "name": "Hulk",
        "publisher": "Marvel Comics",
        "alter_ego": "Bruce Banner",
        "first_appearance": "The Incredible Hulk #1",
        "weight": "1400"
    },
    {
        "name": "Wolverine",
        "publisher": "Marvel Comics",
        "alter_ego": "James Howlett",
        "first_appearance": "The Incredible Hulk #180",
        "weight": "200"
    },
    {
        "name": "Daredevil",
        "publisher": "Marvel Comics",
        "alter_ego": "Matthew Michael Murdock",
        "first_appearance": "Daredevil #1",
        "weight": "200"
    },
    {
        "name": "Silver Surfer",
        "publisher": "Marvel Comics",
        "alter_ego": "Norrin Radd",
        "first_appearance": "The Fantastic Four #48",
        "weight": "unknown"
    }
]
// 1: Maak een array van alle superhelden namen
// const names = superheroes.map((hero) => hero.name);
// console.log(names);

// 2: Maak een array van alle "lichte" superhelden (< 190 pounds)
// const weight = superheroes.filter((hero) => hero.weight < 190)
// console.log(weight);

// 3: Maak een array met de namen van de superhelden die 200 pounds wegen
// const specificWeight = superheroes.filter((hero) => hero.weight === 200)
// console.log(specificWeight);

// 4: Maak een array met alle comics waar de superhelden hun "first appearances" hebben gehad
// const firstAppearance = superheroes.map((hero) => hero.first_appearance);
// console.log(firstAppearance);

// 5: Maak een array met alle superhelden van DC Comics. Is dat gelukt?
// Herhaal de bovenstaande functie dan en maak ook een array met alle superhelden van Marvel Comics.
// const superheroesDC = superheroes
//     .filter((hero) => hero.publisher === "DC Comics")
//     .map((hero) => hero.name);
// console.log(superheroesDC);
// // Gelukt? > '' Marvel Comics

// const superheroesMarvel = superheroes
//     .filter((hero) => hero.publisher === "Marvel Comics")
//     .map((hero) => hero.name);
// console.log(superheroesMarvel);

// 6: Tel het gewicht van alle superhelden van DC Comics bij elkaar op.
// Let op! Conditionals to the rescue! Het gewicht dat je ziet in de movieDatabase,
// van welk datatype is dat? Een nummer? Of een string? Oh ja, en hebben alle superhelden wel een gewicht?

// const totalWeightDC = superheroes
//     .filter((hero) => hero.weight != "unknown" && hero.publisher === "DC Comics")
//     .reduce((total, hero) => parseInt(hero.weight) + total, 0);
// console.log(totalWeightDC);

// 7: "" Marvel Comics(beknopt)
// const tWMarvel = superheroes
//     .filter((h) => h.weight != "unknown" && h.publisher === "Marvel Comics")
//     .reduce((t, h) => parseInt(h.weight) + t, 0);
// console.log(tWMarvel);

// 8: Zwaarste Held
const maxWeight = superheroes
    .filter((h) => h.weight != "unknown")
    .map((h) => parseInt(h.weight))
    .reduce((a, b) => Math.max(a, b));
<<<<<<< HEAD
// console.log(maxWeight);
=======
console.log(maxWeight);
>>>>>>> e6592d414a19db7de38ee07417028e4b44a7ed8c

const heaviestHero = superheroes
    .filter((h) => h.weight == maxWeight)
    .map((h) => h.name);
<<<<<<< HEAD
console.log(`De zwaarste superheld is: The ${heaviestHero}, and he weights ${maxWeight} pounds.` );
=======
console.log(`De zwaarste superheld is: ${heaviestHero}`);
>>>>>>> e6592d414a19db7de38ee07417028e4b44a7ed8c
