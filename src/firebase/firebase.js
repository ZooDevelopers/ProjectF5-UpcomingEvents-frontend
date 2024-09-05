
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDTSNAx-4Xu4nAp_5LHdNo9bb93WtTLSYk",
    authDomain: "events-d140d.firebaseapp.com",
    projectId: "events-d140d",
    storageBucket: "events-d140d.appspot.com",
    messagingSenderId: "166274429591",
    appId: "1:166274429591:web:62d91e5ddea6d65ed1efd2"
  };



const app = initializeApp(firebaseConfig);

const storage = getStorage(app);


export { storage };
