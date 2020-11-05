// querySelectors
const movieList = document.querySelector(".movies_container-list");
const radioButtons = document.querySelectorAll(".radio");
const search = document.querySelector(".nav_menu-found");
const inputField = document.querySelector("#input-field");
const searchButton = document.querySelector("#search-btn");
const toTopBtn = document.querySelector("#topPageBtn");

// Global variables
const targetUrl = "https://www.imdb.com";
const recentMovieYear = "2014";
const enterCode = "Enter";
const enterCodeNumpad = "NumpadEnter";
const recentMovies = "new";
const allMovies = "all";

// addEventListeners
searchButton.addEventListener("click", () => returnSearch());
inputField.addEventListener("keypress", (e) => {
    if (e.code === enterCode || enterCodeNumpad) {
        returnSearch();
    }
});
window.addEventListener("scroll", () => scrollFunction());

const addMoviesToDOM = (array) => array.forEach(movie => {
    const newLi = document.createElement("li");
    const imdbLink = document.createElement("a");
    const poster = document.createElement("img");

    const { Poster, imdbID } = movie;

    imdbLink.target = "_blank";
    imdbLink.href = `${targetUrl}/title/${imdbID}`;
    poster.src = Poster;
    newLi.appendChild(imdbLink)
        .appendChild(poster);
    movieList.appendChild(newLi);
});

// Movie amount tracker
const addMovieNumber = (list) => {
    search.innerHTML = "";
    search.innerHTML += `<h1> Found: ${list.length} movies</h1>
  `;
}

// Filters, optimzed search
const newMovies = movies.filter(movie => movie.Year >= recentMovieYear);

// Change statement on radio buttons
const radioChange = radioButtons.forEach(radio => radio.addEventListener("change", () => {
    if (radio.value === recentMovies) {
        movieList.innerHTML = "";
        inputField.value = "";
        init(newMovies);
    }
    else if (radio.value === allMovies) {
        movieList.innerHTML = "";
        inputField.value = "";
        init(movies);
    }
    else {
        movieList.innerHTML = "";
        inputField.value = "";
        init(filterByTitle(radio.value));
    }
}))

// Search, optimized
const filterByTitle = (userInput) => movies.filter(movie => movie.Title.toLowerCase().includes(userInput.toLowerCase()));

// Returned search
const returnSearch = () => {
    const searchValue = inputField.value;
    movieList.innerHTML = "";
    init(filterByTitle(searchValue))
};

// Top of page button
const scrollFunction = () => {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        toTopBtn.style.display = "block";
    } else toTopBtn.style.display = "none";
}
const topPage = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// Initialize function to control everything at the start of everything
const init = (list) => {
    addMoviesToDOM(list);
    addMovieNumber(list);
};
init(movies);