import { inicio } from "./components/Inicio.js";
import { Registro } from "./components/Registro.js";

const rootDiv = document.getElementById("root");

const routes = {
  "/": inicio,
  "/registro": Registro,
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
