// Variáveis e seleção de elementos 
const planetaInput = document.querySelector("#planetaInput");
const searchBtn = document.querySelector("#search");

const nameElement = document.querySelector("#nome");
const ePlanetaElement = document.querySelector("#ePlaneta");
const translacaoElement = document.querySelector("#translacao");
const rotacaoElement = document.querySelector("#rotacao");
const gravidadeElement = document.querySelector("#gravidade");

const infoPlaneta = document.querySelector(".info-planeta")

const opcoes = [
    {textoDigitado:'terra', valor:'Earth'},
    {textoDigitado:'sol', valor:'Sun'},
    {textoDigitado:'lua', valor:'Moon'},
    {textoDigitado:'mercurio', valor:'Mercury'},
    {textoDigitado:'venus', valor:'Venus'},
    {textoDigitado:'marte', valor:'Mars'},
    {textoDigitado:'jupiter', valor:'Jupiter'},
    {textoDigitado:'saturno', valor:'Saturn'},
    {textoDigitado:'urano', valor:'Uranus'},
    {textoDigitado:'netuno', valor:'Neptune'},
    {textoDigitado:'plutão', valor:'Pluto'},
];

// Funções

const getValue = (valorDigitado) => {

    const opcao = opcoes.find( opcao => opcao.textoDigitado === valorDigitado); 

    showPlanetData(opcao.valor);

}

const getPlanetData = async(opcao) => {

    const apiPlanetURL = `https://api.le-systeme-solaire.net/rest/bodies/${opcao}`;

     const res = await fetch(apiPlanetURL);
     const data = await res.json();

     return data 
}


const showPlanetData = async(opcao) => {


    const data = await getPlanetData(opcao);


    nameElement.innerText = data.englishName;
    ePlanetaElement.innerText = data.bodyType;
    translacaoElement.innerText = Math.round(data.sideralOrbit)+' dias';
    rotacaoElement.innerText = Math.round(data.sideralRotation) + ' horas';
    gravidadeElement.innerText = data.gravity + ' m/s²';

    infoPlaneta.classList.remove("hide");
    
}

// Eventos
searchBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const valorDigitado = planetaInput.value.toLowerCase();

    getValue(valorDigitado);
});

planetaInput.addEventListener("keyup", (e) => {
    if (e.code === "Enter") {

      const valorDigitado = e.target.value.toLowerCase();
  
      getValue(valorDigitado);
    }
});