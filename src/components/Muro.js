// Importaciones

// eslint-disable-next-line import/no-cycle
// import { navegador } from '../Router.js';
// eslint-disable-next-line import/no-cycle
import { cerrarSesion } from '../lib/FuncionesFirebase.js';
import {
  guardarPublicaciones,
  obtencionDePublicaciones,
  onBtenerPublicaciones,
  eliminarPublicaciones,
} from '../lib/InstalacionFirebase.js';
// eslint-disable-next-line import/no-cycle
import { navegador } from '../Router.js';



//Imprimir todo en el Muro
export const Muro = () => {
  // Seccion que genera el área del header, donde abarcamos el logo y el boton de cerrar sesion

    //Contenedor
    document.body.style.backgroundColor = 'aliceblue';
    const container = document.createElement('body');

    //Seccion azul del Menu con el logo y cerrar sesion - HEADER
    const seccionMuro = document.createElement('header');
    seccionMuro.className = 'seccionMuro';

    // Div para insertar el logo
    const logoVistaMuroDiv = document.createElement('div');
    logoVistaMuroDiv.className = 'logoVistaMuroDiv';
    const logoVistaMuroImagen = document.createElement('img');
    logoVistaMuroImagen.src = '../images/logo-horizontal.png';
    logoVistaMuroImagen.setAttribute('id', 'logoVistaMuro');

    // Div para insertar el boton de cerrar sesion
    const cerrarSesionDiv = document.createElement('div');
    cerrarSesionDiv.className = 'cerrarSesionDiv';
    const botonCerrarSesion = document.createElement('button');
    botonCerrarSesion.textContent = 'Cerrar sesión';
    botonCerrarSesion.addEventListener('click', () => {
        // Lleva al navegador('/'), se encuentra en el rooter
        // eslint-disable-next-line no-unused-expressions
      cerrarSesion(), textoDeLaPublicacion.reset();
      console.log('cerrar sesión');
    });

  // Seccion blanca del cuerpo - MAIN
  const areaParaEscribirPublicaciones = document.createElement('main');  //Aquí empieza el color blanquito

  // area de escribir el texto a publicar - ¿A donde estas pensando viajar?
  const bloqueParaEscribirLaPublicacion = document.createElement('section');
  bloqueParaEscribirLaPublicacion.className = 'bloqueParaEscribirLaPublicacion';
  // Input Caja de texto para escribir tu publicaciones
  const inputCajaDeCreacionDePublicaciones = document.createElement('input');
  inputCajaDeCreacionDePublicaciones.setAttribute('type', 'text');
  inputCajaDeCreacionDePublicaciones.setAttribute(
    'id',
    'inputCajaDeCreacionDePublicaciones',
  );
  inputCajaDeCreacionDePublicaciones.setAttribute(
    'placeholder',
    '¿A dónde estás pensando viajar?',
  );
  inputCajaDeCreacionDePublicaciones.className = 'inputCajaDeCreacionDePublicaciones';

  const resetearDivPrincipal = () => {
    if (textoDeLaPublicacion.childNodes.length > 0) {
      // console.log('div que almacena tiene hijos');
      textoDeLaPublicacion.innerText = '';
    }
  };

  // Icono/Boton para publicar
  const botonDePublicaciones = document.createElement('button');
  // botonDePublicaciones.setAttribute('type', 'image');
  botonDePublicaciones.setAttribute('id', 'botonDePublicaciones');
  botonDePublicaciones.src = '../images/enter-post.png';
  botonDePublicaciones.addEventListener('click', (e) => {
    e.preventDefault();
    guardarPublicaciones(inputCajaDeCreacionDePublicaciones.value);
    resetearDivPrincipal();
    inputCajaDeCreacionDePublicaciones.value = '';
  });
  // Aqui termina area de escribir el texto a publicar - ¿A donde estas pensando viajar?


  // Todo donde se acomodan el los textos publicados mas boton editar, masboton borrar, mas boton chido
  const areaTextoEdicionChidoMasBorrado = document.createElement('section') //Borde rosita - Revisar Imagen
  areaTextoEdicionChidoMasBorrado.className = 'areaTextoEdicionChidoMasBorrado';

    // Area donde se acomodan los post publicados
    const areaDondeSeAcomodanLasPublicaciones = document.createElement('section') //Borde verde - Revisar Imagen
    areaDondeSeAcomodanLasPublicaciones.setAttribute('id', 'areaDondeSeAcomodanLasPublicaciones');

    // seccion negra de texto y edicion
    const seccionDeTextoMasEdicion = document.createElement('section');
    seccionDeTextoMasEdicion.className = "seccionDeTextoMasEdicion" //Bordes Negros -Revisar Imagen
      // Div para imprimir
      let textoDeLaPublicacion = document.createElement('div');
      textoDeLaPublicacion.setAttribute('id', 'muroDePublicaciones');
      // eslint-disable-next-line max-len

      onBtenerPublicaciones(async () => {
        // querySnapshot: datos del momento
        const querySnapshot = await obtencionDePublicaciones();
        // si divquealamcena las publicaciones ya tiene  contenido borrar el contenido
        // de lo contrario , proceder con el códgio que ya existe que se encuentra aqui abajo

        querySnapshot.forEach((doc) => {
          const publicacion = doc.data();
          const tituloPublicacion = document.createElement('h1');
          tituloPublicacion.style.color = 'black';
          tituloPublicacion.innerText = publicacion.text;
          textoDeLaPublicacion.append(tituloPublicacion);
        });
      });
      
      // Boton de editar
    
    
    // Area donde se acomodan el boton de likes y el boton de borrar
    const areaDondeSeAcomodaChidoMasBorrar = document.createElement('section') //Borde azul - Revisar Imagen
    areaDondeSeAcomodaChidoMasBorrar.className = 'areaDondeSeAcomodaChidoMasBorrar';

      // Boton de Borrar

      // Boton de Likes
  

  
  // Hasta aqui termina el main


// Nodos que se imprimen en el DOM
  seccionMuro.append(
    logoVistaMuroDiv,
    logoVistaMuroImagen,
    botonCerrarSesion,
  );

  // eslint-disable-next-line max-len
  container.append(seccionMuro, inputCajaDeCreacionDePublicaciones, botonDePublicaciones, textoDeLaPublicacion);

  return container;
};