import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,

} from 'https://www.gstatic.com/firebasejs/9.6.11/firebase-auth.js';

import inicializarApp from './InstalacionFirebase.js';
// Registrar usuarios nuevos-la morada
inicializarApp();

export async function registroFirebase(correo, contrasena) {
  const auth = getAuth();

  await createUserWithEmailAndPassword(auth, correo, contrasena)
    .then((userCredential) => {
      navegador('/iniciarSesion');
      const user = userCredential.user;
    // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    // ..
    });
}

//   inicio de usuarios con cuenta-la azul
export const iniciarSesionFirebase = (correo, contrasena) => {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed in
      const user = userCredential.user;
    // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
};
