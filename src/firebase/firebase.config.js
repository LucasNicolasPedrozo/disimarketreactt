import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAEK8KXh-gDLHN-wF4Unf5AMmjQljKsWrg",
    authDomain: "disimarket-coderhouse.firebaseapp.com",
    projectId: "disimarket-coderhouse",
    storageBucket: "disimarket-coderhouse.appspot.com",
    messagingSenderId: "435052272699",
    appId: "1:435052272699:web:076f99d816d523af2f101e"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Obtiene los servicios específicos que necesito
const auth = getAuth(app);
const firestore = getFirestore(app);

// Exporta los servicios para utilizarlos en otros componentes
export { auth, firestore };