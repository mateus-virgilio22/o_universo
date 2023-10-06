
// Variáveis e seleção de elementos 
const planetaInput = document.querySelector("#planetaInput");
const searchBtn = document.querySelector("#search");

const nameElement = document.querySelector("#nome");
const ePlanetaElement = document.querySelector("#ePlaneta");
const translacaoElement = document.querySelector("#translacao");
const rotacaoElement = document.querySelector("#rotacao");
const gravidadeElement = document.querySelector("#gravidade");

const infoPlaneta = document.querySelector(".info-planeta")

const img_planeta = document.getElementById("img_planeta");

const errorElement = document.querySelector("#error-message");

const opcoes = [
    {textoDigitado:'terra', valor:'Earth'},
    {textoDigitado:'sol', valor:'Sun'},
    {textoDigitado:'lua', valor:'Moon'},
    {textoDigitado:'mercurio', valor:'Mercury'},
    {textoDigitado:'mercúrio', valor:'Mercury'},
    {textoDigitado:'venus', valor:'Venus'},
    {textoDigitado:'vênus', valor:'Venus'},
    {textoDigitado:'marte', valor:'Mars'},
    {textoDigitado:'jupiter', valor:'Jupiter'},
    {textoDigitado:'júpiter', valor:'Jupiter'},
    {textoDigitado:'saturno', valor:'Saturn'},
    {textoDigitado:'urano', valor:'Uranus'},
    {textoDigitado:'netuno', valor:'Neptune'},
    {textoDigitado:'plutão', valor:'Pluto'},
    {textoDigitado:'plutao', valor:'Pluto'},
    {textoDigitado:'fobos', valor:'Phobos'},
    {textoDigitado:'phobos', valor:'Phobos'},
    {textoDigitado:'deimos', valor:'Deimos'},
    {textoDigitado:'io', valor:'Io'},
    {textoDigitado:'europa', valor:'Europa'},
    {textoDigitado:'ganimedes', valor:'Ganymede'},
    {textoDigitado:'ganímedes', valor:'Ganymede'},
    {textoDigitado:'ganymedes', valor:'Ganymede'},
    {textoDigitado:'calisto', valor:'Callisto'},
    {textoDigitado:'callisto', valor:'Callisto'},
    {textoDigitado:'amalteia', valor:'Amalthea'},
    {textoDigitado:'amalthea', valor:'Amalthea'},
    {textoDigitado:'himalia', valor:'Himalia'},
    {textoDigitado:'elara', valor:'Elara'},
    {textoDigitado:'mimas', valor:'Mimas'},
    {textoDigitado:'nereida', valor:'Nereid'},
    {textoDigitado:'nereid', valor:'Nereid'},
    {textoDigitado:'japeto', valor:'Iapetus'},
    {textoDigitado:'jápeto', valor:'Iapetus'},
    {textoDigitado:'iapetus', valor:'Iapetus'},
    {textoDigitado:'hipérion', valor:'Hyperion'},
    {textoDigitado:'hiperion', valor:'Hyperion'},
    {textoDigitado:'hyperion', valor:'Hyperion'},
    {textoDigitado:'tritão', valor:'Triton'},
    {textoDigitado:'tritao', valor:'Triton'},
    {textoDigitado:'triton', valor:'Triton'},
    {textoDigitado:'encelado', valor:'Enceladus'},
    {textoDigitado:'encélado', valor:'Enceladus'},
    {textoDigitado:'enceladus', valor:'Enceladus'},
    {textoDigitado:'atlas', valor:'Atlas'},
    {textoDigitado:'miranda', valor:'Miranda'},
    {textoDigitado:'titã', valor:'Titan'},
    {textoDigitado:'titan', valor:'Titan'},
    {textoDigitado:'tita', valor:'Titan'},
    {textoDigitado:'pã', valor:'Pan'},
    {textoDigitado:'pan', valor:'Pan'},
    {textoDigitado:'pa', valor:'Pan'},
];

// Funções

const getValue = (valorVerificado) => {

    const opcao = opcoes.find( opcao => opcao.textoDigitado === valorVerificado);

    if(opcao) {
        showPlanetData(opcao.valor);
        errorElement.classList.add("hide");
        img_planeta.classList.remove("hide");
    } else {
        infoPlaneta.classList.add("hide");
        errorElement.classList.remove("hide");
        img_planeta.classList.add("hide");
    }

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

        const imagePath = `./assets/planetas/${opcao}.png`;

        img_planeta.src = imagePath;

        infoPlaneta.classList.remove("hide");
     

    
    
}

// Eventos
searchBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const valorDigitado = planetaInput.value.toLowerCase();

    const valorVerificado = valorDigitado.trim();

    getValue(valorVerificado);
});

planetaInput.addEventListener("keyup", (e) => {
    if (e.code === "Enter") {

      const valorDigitado = e.target.value.toLowerCase();

      const valorVerificado = valorDigitado.trim();
  
      getValue(valorVerificado);
    }
});