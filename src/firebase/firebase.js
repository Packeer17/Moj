import { initializeApp } from "firebase/app";
import { getDatabase} from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyDOS6H4srd4ZraBPIanGLr20OA4vGEIG2c",
    authDomain: "moj-marketplace.firebaseapp.com",
    databaseURL: "https://moj-marketplace-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "moj-marketplace",
    storageBucket: "moj-marketplace.appspot.com",
    messagingSenderId: "957188509091",
    appId: "1:957188509091:web:cac009269b49984ae69e16",
    measurementId: "G-ENQQXJ42P7"
  };

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
