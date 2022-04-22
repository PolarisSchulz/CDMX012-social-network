// eslint-disable-next-line import/no-cycle
import { navegador } from '../Router.js';
// vista BLANCA POST

export const Muro = () => {
  document.body.style.backgroundColor = 'aliceblue';

  const seccionMuro = document.createElement('section');

  const logoVistaMuroDiv = document.createElement('div');
  const logoVistaMuroImagen = document.createElement('img');
  logoVistaMuroImagen.src = '../images/logo-horizontal.png';
  logoVistaMuroImagen.setAttribute('id', 'logoVistaMuro');

  const cerrarSesionDiv = document.createElement('div');
  const botonCerrarSesion = document.createElement('button');
  botonCerrarSesion.textContent = 'Cerrar sesión';

  botonCerrarSesion.addEventListener('click', () => {
    navegador('/');
  });
  seccionMuro.append(
    logoVistaMuroDiv,
    logoVistaMuroImagen,
    cerrarSesionDiv,
    botonCerrarSesion,
  );
  return seccionMuro;
};
