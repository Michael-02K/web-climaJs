//@ts-check

/**
 * funcion que toma una url de un archivo y le quita el .gif
 * @param {string} img el link de la imagen
 * @returns {string} la imagen sin el .gif
 */
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












//PRACTICAS
let cadena="lorem ipsum jeje milanesa"

// dos formas de hacer una expresion regular
let regExp=new RegExp("")
let regExp2=/lorem/

// dos formas de validar
console.log(regExp.test(cadena))
console.log(regExp.exec(cadena))




/**
 * esta variable almacena el nombre del usuario 
 * @type {string}
 */
const nombre="carlos";



/**
 * @type {Array<String|Number>}
 */
const amigos=["pepe",33]



/**
 * objeto usuario
 * @typedef {Object} usuario 
 * @property {Number} id el id del usuario 
 * @property {String} nombre el nombre del usuario 
 * @property {Number} edad la edad del usuario 
 */
/**
 * @type {usuario}
 */
const usuario={
  id:1,
  nombre:"carlos",
  edad:12
}

/**
 * clase para trabajar con articulos
 */
class Articulo{
  /**
   * 
   * @param {String} titulo titulo del articulo
   * @param {String} texto texto del articulo
   */
  constructor(titulo,texto){
    this.titulo=titulo
    this.texto=texto
  }

  /**
   * borra un articulo por id
   * @param {Number} id el id del articulo a borrar 
   * @returns {Boolean} retorna un booleano
   */
  static  borrarArticulo(id){
    return true
  }
}


/**
 * esta funcion crea una persona 
 * @param {String} name el nombre de la persona
 * @param {Number|String} age la edad de la persona 
 * @param {Boolean} [isStudent] si la persona estudia o no [entre llaves significa que es opcional]
 * @returns {object} retorna un objeto con la data
 */
function createPerson(name,age,isStudent) {
  return{
    name:name,
    age:age,
    isStudent:isStudent
  }
}

// createPerson();