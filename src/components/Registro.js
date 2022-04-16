import { navegador } from "../Router.js";
//Vista MORADA

export const Registro = () => {
  document.body.style.backgroundColor = "#8268BE";
  const seccionRegistro = document.createElement("section");

  const logoVistaRegistroDiv = document.createElement("div");
  const logoVistaRegistroImagen = document.createElement("img");
  logoVistaRegistroImagen.src = "../images/logo-principal.png";
  logoVistaRegistroImagen.setAttribute("id", "logoVistaRegistro");

  const nodoH2 = document.createElement("h2");
  nodoH2.textContent = "Registro de usuario";
  
  //aquí estan los inputs para el registro
  const datosUsuarioDiv = document.createElement("form");
  datosUsuarioDiv.className = "datosUsuarioRegistro";
  //input para nombre
  const nombreRegistroInput = document.createElement("input");
  nombreRegistroInput.setAttribute("id", "nombreRegistroInput");
  nombreRegistroInput.setAttribute("placeholder", "Nombre");
  // input para correo
  const correoRegistroInput = document.createElement("input");
  correoRegistroInput.setAttribute("id", "correoRegistroInput");
  correoRegistroInput.setAttribute("placeholder", "Correo");
  // input para contraseña
  const contrasenaRegistroInput = document.createElement("input");
  contrasenaRegistroInput.setAttribute("id", "contrasenaRegistroInput");
  contrasenaRegistroInput.setAttribute("placeholder", "Contraseña");
  //input confirmación de contraseña
  const confirmarContrasenaInput = document.createElement("input");
  confirmarContrasenaInput.setAttribute("id", "confirmarContrasenaInput");
  confirmarContrasenaInput.setAttribute("placeholder", "Confirmar contraseña");
  //boton de registro
  const registroInput = document.createElement("input");
  registroInput.setAttribute("type", "submit");
  registroInput.setAttribute("id", "registroInput");
  registroInput.setAttribute("value", "Registrarme");
  registroInput.addEventListener("click", () => {
    navegador("/iniciarSesion");
  });


  //regresar a vista inicio
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
    datosUsuarioDiv,
    nombreRegistroInput,
    correoRegistroInput,
    contrasenaRegistroInput,
    confirmarContrasenaInput,
    registroInput,
    regresarDiv,
    botonRegresarVistaRegistro
  );
  return seccionRegistro;
};
