import { navegador } from "../Router.js";

export const Registro = () => {
  const seccionRegistro = document.createElement("section");

  const logoVistaRegistroDiv = document.createElement("div");
  const logoVistaRegistroImagen = document.createElement("img");
  logoVistaRegistroImagen.src = "../images/logo-principal.png";
  logoVistaRegistroImagen.setAttribute("id", "logoVistaInicio");

  const nodoH2 = document.createElement("h2");
  nodoH2.textContent = "Registro de usuario";

  const regresarDiv = document.createElement("div");
  const botonRegresarVistaRegistro = document.createElement("button");

  botonRegresarVistaRegistro.textContent = "Regresar";
  botonRegresarVistaRegistro.addEventListener("click", () => {
    navegador("/");
  });

  seccionRegistro.append(
    logoVistaRegistroDiv,
    logoVistaRegistroImagen,
    nodoH2,
    regresarDiv,
    botonRegresarVistaRegistro
  );
  return seccionRegistro;
};
