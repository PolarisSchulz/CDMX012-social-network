// eslint-disable-next-line import/no-cycle
// import { navegador } from '../Router.js';
import { cerrarSesion } from "../lib/FuncionesFirebase.js";
import {
  guardarPublicaciones,
  onBtenerPublicaciones,
  obtencionDePublicaciones,
  eliminarPublicaciones,
} from "../lib/InstalacionFirebase.js";
import { navegador } from "../Router.js";

// vista BLANCA POST

//Div de logo
export const Muro = () => {
  document.body.style.backgroundColor = "aliceblue";

  const seccionMuro = document.createElement("section");

  const logoVistaMuroDiv = document.createElement("div");
  const logoVistaMuroImagen = document.createElement("img");
  logoVistaMuroImagen.src = "../images/logo-horizontal.png";
  logoVistaMuroImagen.setAttribute("id", "logoVistaMuro");

  // Formulario para hacer publicación
  const creacionDePublicacionesFormulario = document.createElement("form");
  creacionDePublicacionesFormulario.setAttribute(
    "id",
    "datosCreacionDePublicacionesDeFormulario"
  );

  // Input Caja de texto para escribir tu publicaciones
  const inputCajaDeCreacionDePublicaciones = document.createElement("input");
  inputCajaDeCreacionDePublicaciones.setAttribute("type", "text");
  inputCajaDeCreacionDePublicaciones.setAttribute(
    "id",
    "inputCajaDeCreacionDePublicaciones"
  );
  inputCajaDeCreacionDePublicaciones.setAttribute(
    "placeholder",
    "¿A dónde estás pensando viajar?"
  );
  inputCajaDeCreacionDePublicaciones.className =
    "inputCajaDeCreacionDePublicaciones";

  // Icono/Boton para publicar
  const botonDePublicaciones = document.createElement("button");
  //botonDePublicaciones.setAttribute('type', 'image');
  botonDePublicaciones.setAttribute("id", "botonDePublicaciones");
  botonDePublicaciones.src = "../images/enter-post.png";
  botonDePublicaciones.addEventListener("click", (e) => {
    e.preventDefault();
    guardarPublicaciones(inputCajaDeCreacionDePublicaciones.value);
    creacionDePublicacionesFormulario.reset();
  });

  //Div para imprimir

  // jugar con esto divQueAlmacenaLasPublicaciones1
  const divQueAlmacenaLasPublicaciones1 = document.getElementById(
    "divQueAlmacenaLasPublicaciones"
  );
  //DOMContentLoaded recarga una vez toda la impresion 
  window.addEventListener("DOMContentLoaded", async () => {
    onBtenerPublicaciones ((querySnapshot) => {
    //querySnapshot: datos del momento
    let html = "";
    querySnapshot.forEach((doc) => {
      const publicacion = doc.data();
      console.log(publicacion.text);
      html += `
    <div>
     <p> ${publicacion.text} </p>
     <button class='borrarPublicacion' data-id='${doc.id}'>Borrar</button>
    </div>
    `;
    });
    divQueAlmacenaLasPublicaciones1.innerHTML = html;
    });
    const botonParaBorrarPublicaciones = divQueAlmacenaLasPublicaciones1.querySelectorAll(".borrarPublicacion");

    //btn sale como una constante declarada en el forEach
    botonParaBorrarPublicaciones.forEach((btn) => {
      btn.addEventListener("click", async ({ target: { dataset } }) => {
        await eliminarPublicaciones(dataset.id);
        navegador('/muro');
      });
    });
  });

  //Cerrar sesión
  const cerrarSesionDiv = document.createElement("div");
  const botonCerrarSesion = document.createElement("button");
  botonCerrarSesion.textContent = "Cerrar sesión";

  botonCerrarSesion.addEventListener("click", () => {
    // navegador('/');
    cerrarSesion(), divQueAlmacenaLasPublicaciones1.reset();
    console.log("cerrar sesión");
  });

  /*const To = document.getElementById('T');
window.addEventListener('DOMContentLoaded', async () => {
  const querySnapshot = await obtencionDePublicaciones();
console.log(querySnapshot);

  //querySnapshot: datos del momento
let html= '';
  querySnapshot.forEach(doc => {
    const publicacion = doc.data();
    console.log(publicacion.text);
    html+= `
    < div>
    < p> ${publicacion.text} < /p>
    < /div>
    `
  })
  To.innerHTML= html
})*/

  // Formulario posts escritos
  /* const publicacionesFormulario = document.createElement('form');
  publicacionesFormulario.setAttribute('id', 'datosPublicacionesDeFormulario');

  // Input Caja de texto de la publicacion escrita
  const inputCajaDeTexto = document.createElement('input');
  inputCajaDeTexto.setAttribute('type', 'text');
  inputCajaDeTexto.setAttribute('id', 'inputCajaDeTexto');
  inputCajaDeTexto.setAttribute('placeholder', 'PUBLICACIÓN');
  inputCajaDeTexto.className = 'inputCajaDeTexto';

// Input editar
  const inputEditarPublicaciones = document.createElement('input');
  inputEditarPublicaciones.setAttribute('type', 'image');
  inputEditarPublicaciones.setAttribute('id', 'inputEditarPublicaciones');
  inputEditarPublicaciones.src = '../images/lapicito-editar.png';
  inputEditarPublicaciones.addEventListener('click', () => {
  inputEditarPublicaciones();
});

 // Input borrar
  const inputBasuraPublicaciones = document.createElement('input');
  inputBasuraPublicaciones.setAttribute('type', 'image');
  inputBasuraPublicaciones.setAttribute('id', 'inputBasuraPublicaciones');
  inputBasuraPublicaciones.src = '../images/sombrero-basura.png';
  inputBasuraPublicaciones.addEventListener('click', () => {
  botonBasuraPublicacion();
});

 //Input Likes
  const botonDeMeGustas = document.createElement('button');
  botonDeMeGustas.setAttribute('id', 'botonDeMeGustas');
  botonDeMeGustas.src = '../images/pinata.png';
  botonDeMeGustas.textContent = 'Genial';
  botonDeMeGustas.addEventListener('click', () => {
  botonDeMeGustas();
}); */
  creacionDePublicacionesFormulario.append(
    inputCajaDeCreacionDePublicaciones,
    botonDePublicaciones,
  );

  seccionMuro.append(
    logoVistaMuroDiv,
    logoVistaMuroImagen,
    cerrarSesionDiv,
    creacionDePublicacionesFormulario,
    // inputCajaDeTexto,
    // inputEditarPublicaciones,
    // inputBasuraPublicaciones,
    // botonDeMeGustas,
    botonCerrarSesion,
  );
  return seccionMuro;
};

//funcion por si acaso
// const cargarDatos = async () =>{

//   const divQueAlmacenaLasPublicaciones1 = document.getElementById('divQueAlmacenaLasPublicaciones')
//     const querySnapshot = await obtencionDePublicaciones();
//   console.log(querySnapshot);
//     //querySnapshot: datos del momento
//   let html= '';
//     querySnapshot.forEach(doc => {
//       const publicacion = doc.data();
//       console.log(publicacion.text);
//       html+= `
//        < div>
//          < p> ${publicacion.text} < /p>
//        < /div>
//       `
//     })
//     divQueAlmacenaLasPublicaciones1.innerHTML= html;
// }
