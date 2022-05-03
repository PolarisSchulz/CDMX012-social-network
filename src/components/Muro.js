// eslint-disable-next-line import/no-cycle
// import { navegador } from '../Router.js';
// eslint-disable-next-line import/no-cycle
import { cerrarSesion } from '../lib/FuncionesFirebase.js';
import {
  guardarPublicaciones,
  obtencionDePublicaciones,
  onBtenerPublicaciones,
  eliminarPublicaciones,
} from '../lib/InstalacionFirebase.js';
// eslint-disable-next-line import/no-cycle
import { navegador } from '../Router.js';

// vista BLANCA POST

// Div de logo
export const Muro = () => {
  document.body.style.backgroundColor = 'aliceblue';
  const container = document.createElement("main")

  const seccionMuro = document.createElement('section');
  seccionMuro.className = 'seccionMuro';
  const logoVistaMuroDiv = document.createElement('div');
  logoVistaMuroDiv.className = 'logoVistaMuroDiv';
  const logoVistaMuroImagen = document.createElement('img');
  logoVistaMuroImagen.src = '../images/logo-horizontal.png';
  logoVistaMuroImagen.setAttribute('id', 'logoVistaMuro');

  // Cerrar sesión
  const cerrarSesionDiv = document.createElement('div');
  cerrarSesionDiv.className = 'cerrarSesionDiv';
  const botonCerrarSesion = document.createElement('button');
  botonCerrarSesion.textContent = 'Cerrar sesión';

  botonCerrarSesion.addEventListener('click', () => {
    // navegador('/');
    cerrarSesion(), divQueAlmacenaLasPublicaciones1.reset();
    console.log('cerrar sesión');
  });

  // Formulario para hacer publicación
  const seccionParaEscribirTuPublicacion = document.createElement('section');
  seccionParaEscribirTuPublicacion.className = 'seccionParaEscribirTuPublicacion';
  const creacionDePublicacionesFormulario = document.createElement('form');
  creacionDePublicacionesFormulario.setAttribute(
    'id',
    'datosCreacionDePublicacionesDeFormulario',
  );

  // Input Caja de texto para escribir tu publicaciones
  const inputCajaDeCreacionDePublicaciones = document.createElement('input');
  inputCajaDeCreacionDePublicaciones.setAttribute('type', 'text');
  inputCajaDeCreacionDePublicaciones.setAttribute(
    'id',
    'inputCajaDeCreacionDePublicaciones',
  );
  inputCajaDeCreacionDePublicaciones.setAttribute(
    'placeholder',
    '¿A dónde estás pensando viajar?',
  );
  inputCajaDeCreacionDePublicaciones.className = 'inputCajaDeCreacionDePublicaciones';

  // Icono/Boton para publicar
  const botonDePublicaciones = document.createElement('button');
  // botonDePublicaciones.setAttribute('type', 'image');
  botonDePublicaciones.setAttribute('id', 'botonDePublicaciones');
  botonDePublicaciones.src = '../images/enter-post.png';
  botonDePublicaciones.addEventListener('click', (e) => {
    e.preventDefault();
    guardarPublicaciones(inputCajaDeCreacionDePublicaciones.value);
    creacionDePublicacionesFormulario.reset();
  });

  // Div para imprimir
  // const querySnapshot = await obtencionDePublicaciones();
  // jugar con esto divQueAlmacenaLasPublicaciones1
  let divQueAlmacenaLasPublicaciones1 = document.createElement('div');
  divQueAlmacenaLasPublicaciones1.setAttribute("id", "muroDePublicaciones")
  // const divQueAlmacenaLasPublicaciones1 = document.getElementById("divQueAlmacenaLasPublicaciones")
  // DOMContentLoaded recarga una vez toda la impresion
  window.addEventListener('DOMContentLoaded', () => {
    // obtencionDePublicaciones();
  // onBtenerPublicaciones(async () => {
  //   // querySnapshot: datos del momento
  //   // let html = ""
  //   const querySnapshot = await obtencionDePublicaciones();
  //   querySnapshot.forEach((doc) => {
  //       const publicacion = doc.data();
  //       console.log("publicación", publicacion);
  //      const tituloPublicacion = document.createElement('h1');
  //      tituloPublicacion.innerText = publicacion.text;
  //     //  html += "Prueba"
  //      console.log("contenido de la publicación",tituloPublicacion);
       
  //     //  divQueAlmacenaLasPublicaciones1.textContent ="dddddd"
  //      divQueAlmacenaLasPublicaciones1.append(tituloPublicacion);
  //     });
  //   });
    console.log("estado de div", divQueAlmacenaLasPublicaciones1)
    


    // const botonParaBorrarPublicaciones = divQueAlmacenaLasPublicaciones1.querySelectorAll('.borrarPublicacion');

    // btn sale como una constante declarada en el forEach
    // botonParaBorrarPublicaciones.forEach((btn) => {
    //   btn.addEventListener('click', async ({ target: { dataset } }) => {
    //     await eliminarPublicaciones(dataset.id);
    //     navegador('/muro');
    //   });
    // });
  });

  onBtenerPublicaciones(async () => {
    // querySnapshot: datos del momento
    // let html = ""
    const querySnapshot = await obtencionDePublicaciones();
    querySnapshot.forEach((doc) => {
        const publicacion = doc.data();
        console.log("publicación", publicacion);
       const tituloPublicacion = document.createElement('h1');
       tituloPublicacion.style.color = "black"
       tituloPublicacion.innerText = publicacion.text;
      //  html += "Prueba"
       console.log("contenido de la publicación",tituloPublicacion);
       
      //  divQueAlmacenaLasPublicaciones1.textContent ="dddddd"
       divQueAlmacenaLasPublicaciones1.append(tituloPublicacion);
      });
    });

seccionMuro.append(

    logoVistaMuroDiv,
    logoVistaMuroImagen,
    botonCerrarSesion,
);

    container.append(seccionMuro, inputCajaDeCreacionDePublicaciones,botonDePublicaciones, divQueAlmacenaLasPublicaciones1  );

  // seccionMuro.append(
    
  //   logoVistaMuroDiv,
  //   logoVistaMuroImagen,
    // cerrarSesionDiv,
    // inputCajaDeTexto,
    // inputEditarPublicaciones,
    // inputBasuraPublicaciones,
    // botonDeMeGustas,
    // botonCerrarSesion,
    // inputCajaDeCreacionDePublicaciones,
  // );
  return container;
};

// funcion por si acaso
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
