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

  //Formulario para escribir post
  const publicacionesFormulario = document.createElement('form');
  publicacionesFormulario.className = 'datosPublicacionesDeFormulario';


  // Input Caja de texto
  const inputCajaDeTexto = document.createElement('input');
  inputCajaDeTexto.setAttribute('type', 'text');
  inputCajaDeTexto.setAttribute('id', 'inputCajaDeTexto');
  inputCajaDeTexto.setAttribute('placeholder', '¿A dónde estás pensando viajar?');
  inputCajaDeTexto.className = 'inputCajaDeTexto';

  // input boton publicar
  const botonDePublicaciones = document.createElement('input');
  botonDePublicaciones.setAttribute('type', 'submit');
  botonDePublicaciones.setAttribute('id', 'botonDePublicaciones');
  botonDePublicaciones.setAttribute('value', 'Registrarme');
  botonDePublicaciones.addEventListener('click', () => {
    console.log(botonDePublicaciones);
  });

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
  const botonDeMeGustas = document.createElement('input');
  botonDeMeGustas.setAttribute('type', 'image');
  botonDeMeGustas.setAttribute('id', 'botonDeMeGustas');
  botonDeMeGustas.src = '../images/pinata.png';
  botonDeMeGustas.addEventListener('click', () => {
  botonDeMeGustas();
});


  seccionMuro.append(
    logoVistaMuroDiv,
    logoVistaMuroImagen,
    cerrarSesionDiv,
    inputCajaDeTexto,
    botonDePublicaciones,
    inputEditarPublicaciones,
    inputBasuraPublicaciones,
    botonDeMeGustas,
    botonCerrarSesion,
  );
  return seccionMuro;
};
