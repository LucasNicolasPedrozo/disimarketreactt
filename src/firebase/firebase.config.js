import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Obtiene los servicios específicos que necesito
const auth = getAuth(app);
const firestore = getFirestore(app);

// Exporta los servicios para utilizarlos en otros componentes
export { auth, firestore };