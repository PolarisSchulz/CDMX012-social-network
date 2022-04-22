// Import the functions you need from the SDKs you need
// eslint-disable-next-line import/no-cycle
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.11/firebase-app.js';

// TO TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export default function inicializarApp() {
  const firebaseConfig = {
    apiKey: 'AIzaSyAMX5GDbMuLxR-SLJqDZ98EVwPlZLxuivI',
    authDomain: 'mochileando-ando-253c8.firebaseapp.com',
    projectId: 'mochileando-ando-253c8',
    storageBucket: 'mochileando-ando-253c8.appspot.com',
    messagingSenderId: '39672808069',
    appId: '1:39672808069:web:0f155913b5516256095fec',
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
}
