// eslint-disable-next-line import/no-cycle
import { navegador } from '../Router.js';
import { registroFirebase } from '../lib/FuncionesFirebase.js';


// Vista MORADA

export const Registro = () => {
  document.body.style.backgroundColor = '#8268BE';
  const seccionRegistro = document.createElement('section');
  seccionRegistro.setAttribute('id', 'seccionVistaRegistro');

  const logoVistaRegistroDiv = document.createElement('div');
  const logoVistaRegistroImagen = document.createElement('img');
  logoVistaRegistroImagen.src = '../images/logo-principal.png';
  logoVistaRegistroImagen.setAttribute('id', 'logoVistaRegistro');

  const nodoH1 = document.createElement('h1');
  nodoH1.textContent = 'Registro de usuario';

  // aquí estan los inputs para el registro
  const datosUsuarioDiv = document.createElement('form');
  datosUsuarioDiv.className = 'datosUsuarioRegistro';
  // input para nombre
  const nombreRegistroInput = document.createElement('input');
  nombreRegistroInput.setAttribute('id', 'nombreRegistroInput');
  nombreRegistroInput.setAttribute('placeholder', 'Nombre');
  nombreRegistroInput.className = 'cajasDeRegistro';
  // input para correo
  const correoRegistroInput = document.createElement('input');
  correoRegistroInput.setAttribute('id', 'correoRegistroInput');
  correoRegistroInput.setAttribute('placeholder', 'Correo');
  correoRegistroInput.className = 'cajasDeRegistro';
  // input para contraseña
  const contrasenaRegistroInput = document.createElement('input');
  contrasenaRegistroInput.setAttribute('type', 'password');
  contrasenaRegistroInput.setAttribute('id', 'contrasenaRegistroInput');
  contrasenaRegistroInput.setAttribute('placeholder', 'Contraseña');
  contrasenaRegistroInput.className = 'cajasDeRegistro';
  // input confirmación de contraseña
  const confirmarContrasenaInput = document.createElement('input');
  confirmarContrasenaInput.setAttribute('type', 'password');
  confirmarContrasenaInput.setAttribute('id', 'confirmarContrasenaInput');
  confirmarContrasenaInput.setAttribute('placeholder', 'Confirmar contraseña');
  confirmarContrasenaInput.className = 'cajasDeRegistro';
  // boton de registro
  const registroInput = document.createElement('input');
  registroInput.setAttribute('type', 'submit');
  registroInput.setAttribute('id', 'registroInput');
  registroInput.setAttribute('value', 'Registrarme');
  // Async se dedica a sincronizar la informacion, es este caso el evento de click para poder  dar seguimiento con el proceso en la linea 15de registroFirebase.js
  registroInput.addEventListener('click', async () => {
    navegador('/iniciarSesion');
    // const valorRegistroNombreUsuario = nombreRegistroInput.value;
    const valorCorreoRegistro = correoRegistroInput.value;
    const valorContrasenaRegistro = contrasenaRegistroInput.value;
    // const valorConfirmarContrasena = confirmarContrasenaInput.value;
    await registroFirebase(
      valorCorreoRegistro,
      valorContrasenaRegistro,
      );
  });

  // regresar a vista inicio
  const regresarDiv = document.createElement('div');
  const botonRegresarVistaRegistro = document.createElement('button');
  botonRegresarVistaRegistro.setAttribute('id', 'botonRegresarRegistro');
  botonRegresarVistaRegistro.textContent = 'Volver';
  botonRegresarVistaRegistro.addEventListener('click', () => {
    navegador('/');
  });

  seccionRegistro.append(
    logoVistaRegistroDiv,
    logoVistaRegistroImagen,
    nodoH1,
    datosUsuarioDiv,
    nombreRegistroInput,
    correoRegistroInput,
    contrasenaRegistroInput,
    confirmarContrasenaInput,
    registroInput,
    regresarDiv,
    botonRegresarVistaRegistro,
  );
  return seccionRegistro;
};
