// eslint-disable-next-line import/no-cycle
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
// eslint-disable-next-line import/no-unresolved
} from 'https://www.gstatic.com/firebasejs/9.6.11/firebase-auth.js';
// eslint-disable-next-line import/no-cycle
import { navegador } from '../Router.js';

// Vista ROSA

// nuestro botón de registro de nuestra primera vista
export const inicio = () => {
  document.body.style.backgroundColor = '#E8098A';
  const seccionVistaInicio = document.createElement('section');
  seccionVistaInicio.setAttribute('id', 'seccionVistaInicio');

  const logoVistaInicioDiv = document.createElement('div');
  const logoVistaInicioImagen = document.createElement('img');
  logoVistaInicioImagen.src = '../images/logo-principal.png';
  logoVistaInicioImagen.setAttribute('id', 'logoVistaInicio');

  const yaTengoCuentaDiv = document.createElement('div');
  const botonYaTengoCuenta = document.createElement('button');
  botonYaTengoCuenta.setAttribute('id', 'botonInicioTengoCuenta');

  botonYaTengoCuenta.textContent = 'Ya tengo cuenta';
  botonYaTengoCuenta.addEventListener('click', () => {
    navegador('/iniciarSesion'); // PREGUNTAR!!!
  });
  // este boton es el de registro
  const registroDiv = document.createElement('div');
  const botonRegistro = document.createElement('button');
  botonRegistro.setAttribute('id', 'botonInicioRegistro');
  const nodoH3 = document.createElement('h3');
  const nodoH2 = document.createElement('h2');

  botonRegistro.textContent = 'Registro';
  botonRegistro.addEventListener('click', () => {
    navegador('/registro'); // PREGUNTAR!!!
  });

  nodoH3.textContent = '-o-';
  nodoH2.textContent = 'Registrate con: ';

  // aquí va a ir el registro con el logo de google
  const googleDiv = document.createElement('div');
  const botonGoogle = document.createElement('input');
  botonGoogle.setAttribute('type', 'image');
  botonGoogle.setAttribute('id', 'botonGoogle');
  botonGoogle.src = '../images/logo-google.png';
  botonGoogle.addEventListener('click', () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        navegador('/muro');
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        alert(errorCode || errorMessage || email || credential);
      });
  });

  seccionVistaInicio.append(
    logoVistaInicioDiv,
    logoVistaInicioImagen,
    yaTengoCuentaDiv,
    botonYaTengoCuenta,
    registroDiv,
    botonRegistro,
    nodoH3,
    nodoH2,
    googleDiv,
    botonGoogle,
  );

  return seccionVistaInicio;
};
