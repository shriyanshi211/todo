import {initializeApp} from "firebase/app";
import{getFirestore} from "firebase/firestore";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDspBT38MuFlNWe_G9mTuFPmai71OGUxeU",
    authDomain: "todo-crud-1a975.firebaseapp.com",
    projectId: "todo-crud-1a975",
    storageBucket: "todo-crud-1a975.appspot.com",
    messagingSenderId: "883114094415",
    appId: "1:883114094415:web:d38f98c74fa78181d75f3a",
    measurementId: "G-NCJ4ZF12T5"
  };
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  export{db};
  
