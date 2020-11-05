// const newLi = document.createElement("li"); 
// const spotted = document.getElementById("spotted-animals-list")[0];

// Click Test
// document.addEventListener('click', function(showButton){
//   if(showButton.target.className=="big-five-button"){
//      console.log("Button clicked!");
//   }
// })

// Select 5 buttons:
let onClick1 = document.getElementsByClassName("big-five-button")[0];
let onClick2 = document.getElementsByClassName("big-five-button")[1];
let onClick3 = document.getElementsByClassName("big-five-button")[2];
let onClick4 = document.getElementsByClassName("big-five-button")[3];
let onClick5 = document.getElementsByClassName("big-five-button")[4];

// Lion
onClick1.addEventListener("click", function() 
{
  console.log(onClick1.innerHTML);
  let newLi = document.createElement("li");
  newLi.textContent = onClick1.innerHTML;
  let listOfSpottedAnimals = document.getElementById("spotted-animals-list");
  listOfSpottedAnimals.appendChild(newLi);
  newLi.classList.add("spotted-animals-list-item");
});

// Leopard
onClick2.addEventListener("click", function() 
{
  console.log(onClick2.innerHTML);
  let newLi = document.createElement("li");
  newLi.textContent = onClick2.innerHTML;
  let listOfSpottedAnimals = document.getElementById("spotted-animals-list");
  listOfSpottedAnimals.appendChild(newLi);
  newLi.classList.add("spotted-animals-list-item");
});

// Elephant
onClick3.addEventListener("click", function() 
{
  console.log(onClick3.innerHTML);
  let newLi = document.createElement("li");
  newLi.textContent = onClick3.innerHTML;
  let listOfSpottedAnimals = document.getElementById("spotted-animals-list");
  listOfSpottedAnimals.appendChild(newLi);
  newLi.classList.add("spotted-animals-list-item");
});

// Rhino
onClick4.addEventListener("click", function() 
{
  console.log(onClick4.innerHTML);
  let newLi = document.createElement("li");
  newLi.textContent = onClick4.innerHTML;
  let listOfSpottedAnimals = document.getElementById("spotted-animals-list");
  listOfSpottedAnimals.appendChild(newLi);
  newLi.classList.add("spotted-animals-list-item");
});

// Buffalo
onClick5.addEventListener("click", function() 
{
  console.log(onClick5.innerHTML);
  let newLi = document.createElement("li");
  newLi.textContent = onClick5.innerHTML;
  let listOfSpottedAnimals = document.getElementById("spotted-animals-list");
  listOfSpottedAnimals.appendChild(newLi);
  newLi.classList.add("spotted-animals-list-item");
});

// Remove First List Item
let removeFirst = document.getElementById("remove-first-item-button");

removeFirst.addEventListener("click", function() {
  let parent = document.getElementById("spotted-animals-list");
  let child = document.getElementsByClassName("spotted-animals-list-item")[0];
  parent.removeChild(child);
});

let removeAll = document.getElementById("remove-all-button");

// Remove All by looping through list items
removeAll.addEventListener("click", function() {
  let parent = document.getElementById("spotted-animals-list");
  let amount = document.getElementById("spotted-animals-list").getElementsByTagName("li").length;
  for (i = 1; i <= amount; i++) {
    let child = document.getElementsByClassName("spotted-animals-list-item")[0];
    parent.removeChild(child); 
  }  
})
