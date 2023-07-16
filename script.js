// import {quitarGif} from "./utils/utils.js";
import {iterarSobreResumen} from "./utils/utils.js";

const botonBusqueda = document.getElementById("botonBusqueda");
const sen_termica = document.getElementById("sen_termica");
const latitud = document.getElementById("latitud");
const vel_viento = document.getElementById("vel_viento");
const humedad = document.getElementById("humedad");
const longitud = document.getElementById("longitud");
const direc_viento = document.getElementById("direc_viento");

const resumenGrados = document.querySelectorAll("#resumen_grados");
const resumenImg = document.querySelectorAll("#resumen_img");

let datos_resumen={
  grados:resumenGrados,
  img:resumenImg
}

botonBusqueda.addEventListener("click", (e) => {
  e.preventDefault();

  const CP = document.getElementById("select");
  cargarClima(CP.value);
});


async function cargarClima(CP) {
  const API = `http://api.weatherunlocked.com/api/current/${CP}?lang=es&app_id=61966416&app_key=b468dd1f1da4cbc17cbb2a0ecd56244b`;
  const resultado= await fetch(API)
  const data= await resultado.json()
  pintarData(data);
    // .then((response) => response.json())
    // .then((data) => {
    //   pintarData(data);
    // });
}



function pintarData(datos) {
  iterarSobreResumen(datos_resumen,datos)

// resumenGrados.forEach(elem => {
//   elem.textContent=datos.temp_c
// });

// resumenImg.forEach(elem => {
//   elem.src= `/img_apiclima/${datosImg}.png`;
// });

  // resumenImg.src = `/img_apiclima/${datosImg}.png`;
  // resumenGrados.textContent = datos.temp_c;
  sen_termica.value = datos.temp_c;
  latitud.value = datos.lat;
  longitud.value = datos.lon;
  humedad.value = `${datos.humid_pct}%`;
  vel_viento.value = `${datos.windspd_kmh}km/h`;
  direc_viento.value = datos.winddir_compass;
}
