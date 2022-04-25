import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from 'https://www.gstatic.com/firebasejs/9.6.11/firebase-auth.js';
import { navegador } from '../Router.js';

// Todas las importaciones de firebase
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
export async function iniciarSesionFirebase(email, password) {
  console.log(email,password);
  const auth = getAuth();
  await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      user
      navegador('/muro');

      alert("Ya andas dentro Andy")
    })
    .catch((error) => {

      const errorCode = error.code;
      const errorMessage = error.message;

      console.log(errorMessage);
     
    });
}

// Inicio de sesion con google
export async function botonGoogleFirebase () {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      navegador('/muro');
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      alert(errorCode || errorMessage || email || credential);
    });
};

// Cierre de sesion
