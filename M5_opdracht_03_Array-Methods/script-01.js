// A .push()
const addTheWordCool = function (array) {
    array.push("cool");
    return array;
}

console.log("Add cool:", addTheWordCool(["nice", "awesome", "tof"]));
// resultaat: ["nice", "awesome", "tof", "cool"]

// B .length
const amountOfElementsInArray = function (array) {
    return array.length;
}
console.log(amountOfElementsInArray(["appels", "peren", "citroenen"]));
// resultaat: 3


// C [index]
const selectBelgiumFromBenelux = function (array) {
    return array[0];
}
console.log(selectBelgiumFromBenelux(["Belgie", "Nederland", "Luxemburg"]));
// resultaat: "Belgie"

// D slice()[0], 0 is the starting point
const lastElementInArray = function (array) {
    return array.slice(-1)[0];
}
console.log(lastElementInArray(["Haas", "Cavia", "Kip", "Schildpad"]));
// resultaat: "Schildpad"

// E .slice kopiert een gedeelte een array van begin tot eind .slice(begin, eind)
// .splice haalt elementen weg en/of voegt nieuwe toe. .splice(begin, deleteCount, "item")

const presidents = ["Trump", "Obama", "Bush", "Clinton"]

const impeachTrumpSlice = function (array) {
    return array.slice(1);
}
const impeachTrumpSplice = function (array) {
    array.splice(0, 1);
    return array;
}
console.log(impeachTrumpSlice(presidents)); // ["Obama", "Bush", "Clinton"]
console.log(impeachTrumpSplice(presidents)); // ["Obama", "Bush", "Clinton"]

// F
const stringsTogether = function (elements) {
    return elements.join(' ');
}
console.log(stringsTogether(['Winc', 'Academy', 'is', 'leuk', ';-}']))
//resultaat: "Winc Academy is leuk ;-}"

// G
const combineArrays = function (array1, array2) {
    return array1.concat(array2);
}
console.log(combineArrays([1, 2, 3], [4, 5, 6]));
  // resultaat: [1,2,3,4,5,6]