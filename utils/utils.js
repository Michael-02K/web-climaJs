
export function quitarGif(img) {
    const imgSinGif = img.slice(0, -4);
    return imgSinGif;
}
  
export function iterarSobreResumen(datos_resumen,datos){
    const datosImg = quitarGif(datos.wx_icon);

    for (let item in datos_resumen) {

        datos_resumen[item].forEach(elem => {
          if (elem.id=="resumen_grados") {
            elem.textContent=datos.temp_c
          }else{
            elem.src= `/img_apiclima/${datosImg}.png`;
          }
        }
        );
    }
}












let cadena="lorem ipsum jeje milanesa"

// dos formas de hacer una expresion regular
let regExp=new RegExp("")
let regExp2=/lorem/

// dos formas de validar
console.log(regExp.test(cadena))
console.log(regExp.exec(cadena))
