// Variáveis e seleção de elementos 
const planetaInput = document.querySelector("#planeta-input");
const searchBtn = document.querySelector("#search");

const nameElement = document.querySelector("#nome");
const ePlanetaElement = document.querySelector("#ePlaneta");
const inclinacaoElement = document.querySelector("#inclinacao");
const massaElement = document.querySelector("#massa");
const gravidadeElement = document.querySelector("#gravidade");



// Funções



// Eventos
searchBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const planeta = planetaInput.value;

    console.log(planeta)

    //showWeatherData(planeta);
});