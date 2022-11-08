import { filterDataByProperty, filterDataByProperties, filterDataByValue, sortDataAZ, sortDataZA, averageFunction } from './data.js';


import data from './data/ghibli/ghibli.js';

const gFilms = data.films;


const welcome = document.getElementById("welcomeSection");
const directorsSection = document.getElementById("directorsSection");
const producersSection = document.getElementById("producersSection");
const moviesSection = document.getElementById("moviesSection");
const aboutUsSection = document.getElementById("aboutUsSection");

window.addEventListener('load', init, true);

function init() {

    welcome.style.display = "flex";
    directorsSection.style.display = "none";
    producersSection.style.display = "none";
    moviesSection.style.display = "none";
    aboutUsSection.style.display = "none";
}

// Get the modal
//const modal = document.getElementById("myModal");

// Get the button that opens the modal
//const btn = document.getElementByClassName("section__gContainer__buttonDiv");

// Get the <span> element that closes the modal
//const span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
//document.addEventListener("click", btn); 




// When the user clicks on <span> (x), close the modal
//span.onclick = function() {
// modal.style.display = "none";
//}

// When the user clicks anywhere outside of the modal, close it
//window.onclick = function(event) {
// if (event.target == modal) {
// modal.style.display = "none";
// }
//}


//console.log(data["films"][0]["producer"]);

const iconHamburger = document.getElementById("hamburgerIcon");

iconHamburger.addEventListener('click', showMenuLeftResponsive);

function showMenuLeftResponsive() {


    const x = document.getElementById("menuLeft");
    if (x.className === "menuLeft") {
        x.className += " responsive";
    } else {
        x.className = "menuLeft";
    }
}
/*

//console.log(data["films"][k]["producer"]);
const producer = document.querySelector(".producers"); //aquí accedo al div con el class = "productores"
const showProducer = document.createDocumentFragment();

filterDataByProperty(gFilms,"producer").forEach(function (value) {
  const item = document.createElement("DIV"); //Esto crea un elemento de HTML (es en mayúscula porque es sensible)
  item.innerHTML = value; //esto lo va guardando en un div
  showProducer.appendChild(item); //esto crea el div
});
 
producer.appendChild(showProducer); //y aquí se muestra
*/

//console.log(filterDataByValue(gFilms, "producer", "Hayao Miyazaki"));


//console.log(filterDataByValue(gFilms, "director", "Isao Takahata"));


document
    .getElementById("directorsMenu")
    .addEventListener("click", function (event) {
        event.preventDefault();

        const directorsList = filterDataByProperty(gFilms, 'director');

        showDirectors(directorsList);

        welcome.style.display = "none";
        producersSection.style.display = "none";
        moviesSection.style.display = "none";
        directorsSection.style.display = "block";
        aboutUsSection.style.display = "none";
    })


document
    .getElementById("producersMenu")
    .addEventListener("click", function (event) {
        event.preventDefault();

        const producersList = filterDataByProperty(gFilms, 'producer');

        showProducers(producersList);

        welcome.style.display = "none";
        directorsSection.style.display = "none";
        moviesSection.style.display = "none";
        producersSection.style.display = "block";
        aboutUsSection.style.display = "none";

    })


document
    .getElementById("moviesMenu")
    .addEventListener("click", function (event) {
        event.preventDefault();

        const movies = filterDataByProperties(gFilms, ["title", "poster"]);

        showMovies(movies);

        welcome.style.display = "none";
        directorsSection.style.display = "none";
        moviesSection.style.display = "block";
        producersSection.style.display = "none";
        aboutUsSection.style.display = "none";

    })


document
    .getElementById("select__movies")
    .addEventListener("change", function (event) {

        event.preventDefault();

        const movies = filterDataByProperties(gFilms, ["title", "poster"]);


        const selectedValue = document.getElementById("select__movies").value;

              switch (selectedValue) {
                case "Ascending":
                       
                    showMovies(sortDataAZ(movies, "title"));
                  break;  // then take break
                case "Descending":
                     
                    showMovies(sortDataZA(movies, "title"));
                  break; // then take break
            }

        welcome.style.display = "none";
        directorsSection.style.display = "none";
        moviesSection.style.display = "block";
        producersSection.style.display = "none";
           
     
    });
    
function ifContainsChildren(parent) {
    while (parent.hasChildNodes()) {
        parent.removeChild(parent.firstChild);
    }
}


const showMovies = (movies) => {


    const sectionContainer = document.getElementById("section__movies");

    ifContainsChildren(sectionContainer);

    const moviesFragment = document.createDocumentFragment();

    movies.forEach(movie => {
        const title = document.createElement("p");
        title.innerText = movie.title;
        const poster = document.createElement("img");
        poster.src = movie.poster;
        const movieCard = document.createElement("div");
        movieCard.className = "movieInfo";
        movieCard.id = movie.title;
        movieCard.appendChild(poster);
        movieCard.appendChild(title);
        moviesFragment.appendChild(movieCard);
    });
    sectionContainer.appendChild(moviesFragment);

}


const showDirectors = (names) => {

    const sectionContainer = document.getElementById("section__directors");

    ifContainsChildren(sectionContainer);

    const fragment = createHtml(names);


    sectionContainer.appendChild(fragment);

    rankingButtonFunction(sectionContainer.id.slice(9, -1));


}

const showProducers = (names) => {

    const sectionContainer = document.getElementById("section__producers");

    ifContainsChildren(sectionContainer);

    const fragment = createHtml(names);
    sectionContainer.appendChild(fragment);

    rankingButtonFunction(sectionContainer.id.slice(9, -1));


}


const createHtml = (names) => {

    const fragment = document.createDocumentFragment();

    names.forEach(name => {
        const rankingButton = document.createElement("button");
        rankingButton.className = "gibliInfo__rankingButton";
        rankingButton.id = name;
        rankingButton.innerHTML = "Ver ranking";
        const nameP = document.createElement("p");
        nameP.innerText = name;
        const nameCard = document.createElement("div");
        const buttonCard = document.createElement("div");
        nameCard.className = "gibliInfo";
        nameCard.id = name;
        buttonCard.className = "section__gContainer__buttonDiv";
        nameCard.appendChild(nameP);
        buttonCard.appendChild(nameCard)
        buttonCard.appendChild(rankingButton);
        fragment.appendChild(buttonCard);
    });

    return fragment;

}


const rankingButtonFunction = (role) => {

    const rankingButtonArray = document.querySelectorAll('.gibliInfo__rankingButton');

    rankingButtonArray.forEach(el => el.addEventListener('click', event => {

        const name = event.target.getAttribute("id");

        console.log("nombre del " + role + ": " + name);

        const rankingData = filterDataByProperties(gFilms, ["title", "rt_score", "poster", role]);

        const roleFilms = filterDataByValue(rankingData, role, name);

        const roleFilmsSortByScore = sortDataZA(roleFilms, "rt_score");

        const scoreAverage = averageFunction(roleFilmsSortByScore, "rt_score");

        showInModalCard(roleFilmsSortByScore, scoreAverage, role);


    }));
}

const showInModalCard = (roleFilmsSortByScore, scoreAverage, role) => {


    roleFilmsSortByScore.forEach((roleFilmsSortByScore) => { console.log("roleFilmsSortByScore: " + roleFilmsSortByScore["title"] + ": " + roleFilmsSortByScore["rt_score"]) });
    console.log("Promedio: " + scoreAverage);
    console.log("Número de películas: " + roleFilmsSortByScore.length);

    const content = document.querySelector(".modal__content-" + role)
    ifContainsChildren(content);
    const fragment = document.createDocumentFragment();
    const modal = document.querySelector(".modal-" + role);

    modal.style.display = "block";
    const average = document.createElement("h1");
    average.innerText = scoreAverage;
    const averageDescription = document.createElement("h6");
    averageDescription.innerText = "Average Ranking of films reviews"
    const modalCardAverage = document.createElement("div");
    modalCardAverage.className = "averageModalCard";
    modalCardAverage.appendChild(average);
    modalCardAverage.appendChild(averageDescription);
    fragment.appendChild(modalCardAverage);

    roleFilmsSortByScore.forEach((film,index) => {

        const title = document.createElement("p");
        title.innerText = film.title;
        const poster = document.createElement("img");
        poster.src = film.poster;
        const modalCard = document.createElement("div");
        modalCard.className = "infoModal";
        const rating = document.createElement("div");
        rating.className = "rating";
        rating.innerText = index+1;
        modalCard.appendChild(rating);
        modalCard.appendChild(title);
        modalCard.appendChild(poster);
        fragment.appendChild(modalCard);

    });


    content.appendChild(fragment);

    document
        .querySelector(".modal__close-" + role)
        .addEventListener("click", function () {
            modal.style.display = "none";
        });


    window.addEventListener("click", function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });

}
document
    .getElementById("aboutUsMenu")
    .addEventListener("click", function() {


    aboutUsSection.style.display = "flex";
    welcome.style.display = "none";
    directorsSection.style.display = "none";
    moviesSection.style.display = "none";
    producersSection.style.display = "none";
    
    
});