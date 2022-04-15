import { navegador } from "../Router.js";

//nuestro botón de registro de nuestra primera vista (rosa)
export const inicio = () => {
  const seccionVistaInicio = document.createElement("section");

  const logoVistaInicioDiv = document.createElement("div");
  const logoVistaInicioImagen = document.createElement("img");
  logoVistaInicioImagen.src = "../images/logo-principal.png";
  logoVistaInicioImagen.setAttribute("id", "logoVistaInicio");

  const yaTengoCuentaDiv = document.createElement("div");
  const botonYaTengoCuenta = document.createElement("button");

  botonYaTengoCuenta.textContent = "Ya tengo cuenta";
  botonYaTengoCuenta.addEventListener("click", () => {
    navegador("/yaTengoCuenta"); //PREGUNTAR!!!
  });
  //este boton es el de registro
  const registroDiv = document.createElement("div");
  const botonRegistro = document.createElement("button");
  const nodoParrafo = document.createElement("p");
  const nodoH1 = document.createElement("h1");

  botonRegistro.textContent = "Registro";
  botonRegistro.addEventListener("click", () => {
    navegador("/registro"); //PREGUNTAR!!!
  });

  nodoParrafo.textContent = "-o-";
  nodoH1.textContent = "Registrate con: ";

  //aquí va a ir el registro con el logo de google
  const googleDiv = document.createElement("div");
  const botonGoogle = document.createElement("input");
  botonGoogle.setAttribute("type", "image");
  botonGoogle.setAttribute("id", "botonGoogle");
  botonGoogle.src = "../images/logo-google.png";

  botonGoogle.addEventListener("click", () => {
    navegador("/registro"); //PREGUNTAR!!! Y como sería el paso con firebase
  });

  seccionVistaInicio.append(
    logoVistaInicioDiv,
    logoVistaInicioImagen,
    yaTengoCuentaDiv,
    botonYaTengoCuenta,
    registroDiv,
    botonRegistro,
    nodoParrafo,
    nodoH1,
    googleDiv,
    botonGoogle
  );

  return seccionVistaInicio;
};
