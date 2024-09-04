// Importa las funciones necesarias de Firebase Modular SDK
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyD0VWB9HboEQzNYXDJSAMH_WLaYaGZ4fHw",
    authDomain: "events-concert.firebaseapp.com",
    projectId: "events-concert",
    storageBucket: "events-concert.appspot.com",
    messagingSenderId: "135306419699",
    appId: "1:135306419699:web:093ec20945439462100686",
    measurementId: "G-Z9VXBZH13F"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Inicializa Firebase Storage
const storage = getStorage(app);

// Exporta el servicio de almacenamiento para usarlo en otros componentes
export { storage };
