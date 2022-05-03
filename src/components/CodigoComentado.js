
  /* const To = document.getElementById('T');
window.addEventListener('DOMContentLoaded', async () => {
  const querySnapshot = await obtencionDePublicaciones();
console.log(querySnapshot);

  //querySnapshot: datos del momento
let html= '';
  querySnapshot.forEach(doc => {
    const publicacion = doc.data();
    console.log(publicacion.text);
    html+= `
    < div>
    < p> ${publicacion.text} < /p>
    < /div>
    `
  })
  To.innerHTML= html
}) */

  // Formulario posts escritos
  /* const publicacionesFormulario = document.createElement('form');
  publicacionesFormulario.setAttribute('id', 'datosPublicacionesDeFormulario');

  // Input Caja de texto de la publicacion escrita
  const inputCajaDeTexto = document.createElement('input');
  inputCajaDeTexto.setAttribute('type', 'text');
  inputCajaDeTexto.setAttribute('id', 'inputCajaDeTexto');
  inputCajaDeTexto.setAttribute('placeholder', 'PUBLICACIÓN');
  inputCajaDeTexto.className = 'inputCajaDeTexto';

// Input editar
  const inputEditarPublicaciones = document.createElement('input');
  inputEditarPublicaciones.setAttribute('type', 'image');
  inputEditarPublicaciones.setAttribute('id', 'inputEditarPublicaciones');
  inputEditarPublicaciones.src = '../images/lapicito-editar.png';
  inputEditarPublicaciones.addEventListener('click', () => {
  inputEditarPublicaciones();
});

 // Input borrar
  const inputBasuraPublicaciones = document.createElement('input');
  inputBasuraPublicaciones.setAttribute('type', 'image');
  inputBasuraPublicaciones.setAttribute('id', 'inputBasuraPublicaciones');
  inputBasuraPublicaciones.src = '../images/sombrero-basura.png';
  inputBasuraPublicaciones.addEventListener('click', () => {
  botonBasuraPublicacion();
});

 //Input Likes
  const botonDeMeGustas = document.createElement('button');
  botonDeMeGustas.setAttribute('id', 'botonDeMeGustas');
  botonDeMeGustas.src = '../images/pinata.png';
  botonDeMeGustas.textContent = 'Genial';
  botonDeMeGustas.addEventListener('click', () => {
  botonDeMeGustas();
}); */
