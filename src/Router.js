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

// observador es el vato que vijila que andas logueado
// import { getAuth, onAuthStateChanged } from "firebase/auth";

// const auth = getAuth();
// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     // User is signed in, see docs for a list of available properties
//     // https://firebase.google.com/docs/reference/js/firebase.User
//     const uid = user.uid;
//     // ...
//   } else {
//     // User is signed out
//     // ...
//   }
// });