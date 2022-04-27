import { getAuth, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.6.11/firebase-auth.js';
import { inicio } from "./components/Inicio.js";
import { Registro } from "./components/Registro.js";
import { IniciarSesion } from "./components/IniciarSesion.js";
import { Muro } from "./components/Muro.js";

const rootDiv = document.getElementById("root");

const routes = {
  "/": inicio,
  "/registro": Registro,
  "/iniciarSesion": IniciarSesion,
  "/muro": Muro,
};

export const navegador = (pathname) => {
  window.history.pushState({}, pathname, window.location.origin + pathname);
  while (rootDiv.firstChild) {
    rootDiv.removeChild(rootDiv.firstChild);
  }

  rootDiv.appendChild(routes[pathname]());
};

window.onpopstate = () => {
  while (rootDiv.firstChild) {
    rootDiv.removeChild(rootDiv.firstChild);
  }
  rootDiv.appendChild(routes[window.location.pathname]());
};

const componente = routes[window.location.pathname];

rootDiv.appendChild(componente());

// observador es el vato que vijila que andas logueado, importado en la linea 1 de Router.js

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    //console.log({user});
    // User is signed in, see docs for a list of available properties
    navegador('/muro');
    const uid = user.uid;
    const email = user.email;
    
  } else {
    navegador('/');
  }
});

//export const divQueAlmacenaLasPublicaciones = document.createElement('div');
//divQueAlmacenaLasPublicaciones.setAttribute('id', 'divQueAlmacenaLasPublicaciones');