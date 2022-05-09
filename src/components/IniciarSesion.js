// eslint-disable-next-line import/no-cycle
import { navegador } from '../Router.js';
import { iniciarSesionFirebase } from '../lib/FuncionesFirebase.js';
// vista AZUL

export const IniciarSesion = () => {
  document.body.style.backgroundColor = '#19ACBD';
  const seccionInicioDeSesion = document.createElement('section');
  seccionInicioDeSesion.setAttribute('id', 'seccionInicioDeSesion');

  const logoVistaInicioDeSesionDiv = document.createElement('div');
  const logoVistaInicioDeSesionImagen = document.createElement('img');
  logoVistaInicioDeSesionImagen.src = '../images/logo-principal.png';
  logoVistaInicioDeSesionImagen.setAttribute(
    'id',
    'logoVistaInicioDeSesion',
  );

  const nodoH1IniciarSesion = document.createElement('h1');
  nodoH1IniciarSesion.textContent = 'Inicio de sesión';

  // aquí estan los inputs para el registro
  const datosUsuarioInicioDeSesionDiv = document.createElement('form');
  datosUsuarioInicioDeSesionDiv.className = 'datosUsuarioRegistro';

  // input para correo
  const correoInicioDeSesionInput = document.createElement('input');
  correoInicioDeSesionInput.setAttribute('id', 'correoInicioDeSesionInput');
  correoInicioDeSesionInput.setAttribute('placeholder', 'example@email.com');
  correoInicioDeSesionInput.className = 'cajasInicioDeSesion';
  // input para contraseña
  const contrasenaInicioDeSesionInput = document.createElement('input');
  contrasenaInicioDeSesionInput.setAttribute('type', 'password');
  contrasenaInicioDeSesionInput.setAttribute('id', 'contrasenaInicioDeSesionInput');
  contrasenaInicioDeSesionInput.setAttribute('placeholder', 'Contraseña');
  contrasenaInicioDeSesionInput.className = 'cajasInicioDeSesion';

  // boton de inicio de sesion
  const iniciarSesionInput = document.createElement('input');
  iniciarSesionInput.setAttribute('type', 'submit');
  iniciarSesionInput.setAttribute('id', 'iniciarSesionInput');
  iniciarSesionInput.setAttribute('value', 'Iniciar sesión');
  iniciarSesionInput.addEventListener('click', async() => {
    const valorDeCorreo = correoInicioDeSesionInput.value;
    const valorDeContrasena = contrasenaInicioDeSesionInput.value;
    
    await iniciarSesionFirebase(valorDeCorreo, valorDeContrasena);
    console.log("hola");
  });

  const regresarInicioDeSesionDiv = document.createElement('div');
  const botonRegresarVistaInicioDeSesion = document.createElement('button');
  botonRegresarVistaInicioDeSesion.textContent = 'Volver';
  botonRegresarVistaInicioDeSesion.setAttribute('id', 'botonRegresarVistaInicioDeSesion');
  botonRegresarVistaInicioDeSesion.addEventListener('click', () => {
    navegador('/');
  });

  seccionInicioDeSesion.append(
    logoVistaInicioDeSesionDiv,
    logoVistaInicioDeSesionImagen,
    nodoH1IniciarSesion,
    datosUsuarioInicioDeSesionDiv,
    correoInicioDeSesionInput,
    contrasenaInicioDeSesionInput,
    iniciarSesionInput,
    regresarInicioDeSesionDiv,
    botonRegresarVistaInicioDeSesion,
  );
  return seccionInicioDeSesion;
};
