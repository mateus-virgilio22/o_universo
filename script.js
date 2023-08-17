// Variáveis e seleção de elementos 
const planetaInput = document.querySelector("#planetaInput");
const searchBtn = document.querySelector("#search");

const nameElement = document.querySelector("#nome");
const ePlanetaElement = document.querySelector("#ePlaneta");
const translacaoElement = document.querySelector("#translacao");
const rotacaoElement = document.querySelector("#rotacao");
const gravidadeElement = document.querySelector("#gravidade");

const infoPlaneta = document.querySelector(".info-planeta")

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
    translacaoElement.innerText = Math.round(data.sideralOrbit)+' days';
    rotacaoElement.innerText = Math.round(data.sideralRotation) + ' hours';
    gravidadeElement.innerText = data.gravity;

    infoPlaneta.classList.remove("hide");
    
}

// Eventos
searchBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const planeta = planetaInput.value;

    showPlanetData(planeta);
});

planetaInput.addEventListener("keyup", (e) => {
    if (e.code === "Enter") {
      const planeta = e.target.value;
  
      showPlanetData(planeta);
    }
});