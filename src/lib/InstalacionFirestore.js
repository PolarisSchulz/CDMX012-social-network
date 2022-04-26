import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.11/firebase-app.js';
import { getFirestore} from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js'

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    // ...
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);