import { filterDataByProperty, filterDataByProperties, sortDataAZ } from './data.js';


import data from './data/ghibli/ghibli.js';

const gFilms = data.films;


const welcome =document.getElementById("welcomeSection");
const directorsSection =document.getElementById("directorsSection");
const producersSection =document.getElementById("producersSection");
const moviesSection = document.getElementById("moviesSection");

window.addEventListener('load', init, true);

function init() {
   
    welcome.style.display="block";
    directorsSection.style.display="none";
    producersSection.style.display="none";
    moviesSection.style.display="none";
}


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

//console.log("P: " + filterDataByProperty(gFilms, 'producer'));
//console.log("D: " + filterDataByProperty(gFilms, 'director'));

document
    .getElementById("directorsMenu")
    .addEventListener("click", function (event) {
        event.preventDefault();
            
        const directorsList=filterDataByProperty(gFilms, 'director');

        showDirectors(directorsList);
        
        welcome.style.display="none";
        producersSection.style.display="none"; 
        moviesSection.style.display="none";      
        directorsSection.style.display="block";
    })
    

document
    .getElementById("producersMenu")
    .addEventListener("click", function (event) {
        event.preventDefault();

        //showData(filterDataByProperty(gFilms, 'producer'), false);

        const producersList=filterDataByProperty(gFilms, 'producer');

        showProducers(producersList);

        welcome.style.display="none";
        directorsSection.style.display="none";
        moviesSection.style.display="none";        
        producersSection.style.display="block"; 

    })


document
    .getElementById("moviesMenu")
    .addEventListener("click", function (event) {
        event.preventDefault();

        const movies = filterDataByProperties(gFilms, ["title", "poster"]);

        showMovies(movies);

        const obj2 = sortDataAZ(movies, "title");

        obj2.forEach((obj2) => { console.log("orderAZ: " + ": " + obj2["title"]) });

        welcome.style.display="none";
        directorsSection.style.display="none";
        moviesSection.style.display="block";        
        producersSection.style.display="none"; 


    })

      
const showMovies = (movies)=>{

    const moviesFragment = document.createDocumentFragment();

    movies.forEach(movie => {
        const title = document.createElement("p");
        title.innerText = movie.title;
        const poster = document.createElement("img");
        poster.src = movie.poster;
        const movieCard = document.createElement("div");
        movieCard.className="gibliInfo";
        movieCard.id=movie.title;
        movieCard.appendChild(poster);
        movieCard.appendChild(title);
        moviesFragment.appendChild(movieCard);
    });
    document.getElementById("section__movies").appendChild(moviesFragment);
}
     
const showDirectors = (names)=>{

    const fragment =  createHtml(names);

    document.getElementById("section__directors").appendChild(fragment);


}

const showProducers = (names)=>{

    const fragment =  createHtml(names);

    document.getElementById("section__producers").appendChild(fragment);


}


const createHtml =(names)=>{
    
    const fragment = document.createDocumentFragment();

    names.forEach(name => {
        const nameP = document.createElement("p");
        nameP.innerText = name;
        const nameCard = document.createElement("div");
        nameCard.className="gibliInfo";
        nameCard.id=name;
        nameCard.appendChild(nameP);
        fragment.appendChild(nameCard);
    });

    return fragment;

}

console.log(filterDataByProperties(gFilms, ["title", "poster"]));

