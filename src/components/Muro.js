// eslint-disable-next-line import/no-cycle
//import { navegador } from '../Router.js';
 import { cerrarSesion } from '../lib/FuncionesFirebase.js';
// vista BLANCA POST

export const Muro = () => {
  document.body.style.backgroundColor = 'aliceblue';

  const seccionMuro = document.createElement('section');

  const logoVistaMuroDiv = document.createElement('div');
  const logoVistaMuroImagen = document.createElement('img');
  logoVistaMuroImagen.src = '../images/logo-horizontal.png';
  logoVistaMuroImagen.setAttribute('id', 'logoVistaMuro');

  const cerrarSesionDiv = document.createElement('div');
  const botonCerrarSesion = document.createElement('button');
  botonCerrarSesion.textContent = 'Cerrar sesión';

  botonCerrarSesion.addEventListener('click', () => {
    // navegador('/');
    cerrarSesion(),
    console.log("cerrar sesión");
  });

  //Formulario para hacer publicación
  const creacionDePublicacionesFormulario = document.createElement('form');
  creacionDePublicacionesFormulario.setAttribute('id', 'datosCreacionDePublicacionesDeFormulario');


  // Input Caja de texto para escribir tu publicaciones
  const inputCajaDeCreacionDeDePublicaciones = document.createElement('input');
  inputCajaDeCreacionDeDePublicaciones.setAttribute('type', 'text');
  inputCajaDeCreacionDeDePublicaciones.setAttribute('id', 'inputCajaDeCreacionDeDePublicaciones');
  inputCajaDeCreacionDeDePublicaciones.setAttribute('placeholder', '¿A dónde estás pensando viajar?');
  inputCajaDeCreacionDeDePublicaciones.className = 'inputCajaDeCreacionDeDePublicaciones';

 //Icono/Boton para publicar
  const botonDePublicaciones = document.createElement('input');
  botonDePublicaciones.setAttribute('type', 'image');
  botonDePublicaciones.setAttribute('id', 'botonDePublicaciones');
  botonDePublicaciones.src = '../images/enter-post.png';
  botonDePublicaciones.addEventListener('click', () => {
  inputEditarPublicaciones();
});

  //Formulario posts escritos
  /*const publicacionesFormulario = document.createElement('form');
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
});*/
  

  seccionMuro.append(
    logoVistaMuroDiv,
    logoVistaMuroImagen,
    cerrarSesionDiv,
    creacionDePublicacionesFormulario,
    inputCajaDeCreacionDeDePublicaciones,
    //inputCajaDeTexto,
    botonDePublicaciones,
    //inputEditarPublicaciones,
    //inputBasuraPublicaciones,
    //botonDeMeGustas,
    botonCerrarSesion,
  );
  return seccionMuro;
};
