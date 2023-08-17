// Variáveis e seleção de elementos 
const planetaInput = document.querySelector("#planetaInput");
const searchBtn = document.querySelector("#search");

const nameElement = document.querySelector("#nome");
const ePlanetaElement = document.querySelector("#ePlaneta");
const translacaoElement = document.querySelector("#translacao");
const rotacaoElement = document.querySelector("#rotacao");
const gravidadeElement = document.querySelector("#gravidade");



// Funções
const getPlanetData = async(planeta) => {

    const apiPlanetURL = `https://api.le-systeme-solaire.net/rest/bodies/${planeta}`;

     const res = await fetch(apiPlanetURL);
     const data = await res.json();

     return data 
}

const showPlanetData = async(planeta) => {


    const data = await getPlanetData(planeta);

    


    nameElement.innerText = data.englishName;
    ePlanetaElement.innerText = data.bodyType;
    translacaoElement.innerText = data.sideralOrbit;
    rotacaoElement.innerText = data.sideralRotation;
    gravidadeElement.innerText = data.gravity;
    
}

// Eventos
searchBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const planeta = planetaInput.value;

    showPlanetData(planeta);
});