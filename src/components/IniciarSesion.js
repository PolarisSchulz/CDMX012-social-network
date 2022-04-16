import { navegador } from "../Router.js";
//vista AZUL

export const IniciarSesion = () => {
  const seccionInicioDeSesion = document.createElement("section");

  const logoVistaInicioDeSesionDiv = document.createElement("div");
  const logoVistaInicioDeSesionImagen = document.createElement("img");
  logoVistaInicioDeSesionImagen.src = "../images/logo-principal.png";
  logoVistaInicioDeSesionImagen.setAttribute("id", "logoVistaInicioDeSesionImagen");

  const nodoH2 = document.createElement("h2");
  nodoH2.textContent = "Inicio de sesión";
  
  //aquí estan los inputs para el registro
  const datosUsuarioInicioDeSesionDiv = document.createElement("form");
  datosUsuarioInicioDeSesionDiv.className = "datosUsuarioRegistro";
 
  // input para correo
  const correoInicioDeSesionInput = document.createElement("input");
  correoInicioDeSesionInput.setAttribute("id", "correoInicioDeSesionInput");
  correoInicioDeSesionInput.setAttribute("placeholder", "example@email.com");
  // input para contraseña
  const contrasenaInicioDeSesionInput = document.createElement("input");
  contrasenaInicioDeSesionInput.setAttribute("id", "contrasenaInicioDeSesionInput");
  contrasenaInicioDeSesionInput.setAttribute("placeholder", "Contraseña");
 
  //boton de registro
  const iniciarSesionInput = document.createElement("input");
  iniciarSesionInput.setAttribute("type", "submit");
  iniciarSesionInput.setAttribute("id", "iniciarSesionInput");
  iniciarSesionInput.setAttribute("value", "Iniciar sesión");
  iniciarSesionInput.addEventListener("click", () => {
    navegador("/muro"); //PREGUNTAR!!! Y como sería el paso con firebase
  });



  const regresarInicioDeSesionDiv = document.createElement("div");
  const botonRegresarVistaInicioDeSesion = document.createElement("button");
  botonRegresarVistaInicioDeSesion.textContent = "Regresar";
  botonRegresarVistaInicioDeSesion.addEventListener("click", () => {
    navegador("/");
  });

  seccionInicioDeSesion.append(
    logoVistaInicioDeSesionDiv,
    logoVistaInicioDeSesionImagen,
    nodoH2,
    datosUsuarioInicioDeSesionDiv,
    correoInicioDeSesionInput,
    contrasenaInicioDeSesionInput,
    iniciarSesionInput,
    regresarInicioDeSesionDiv,
    botonRegresarVistaInicioDeSesion
  );
  return seccionInicioDeSesion;
};