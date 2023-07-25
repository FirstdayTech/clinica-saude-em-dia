import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import {
  getDatabase,
  set,
  ref,
  push,
  onChildAdded,
} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCKdRrNizuCheTHnX53802K0SMFz9doGFI",
  authDomain: "clinica-saude-em-dia.firebaseapp.com",
  databaseURL: "https://clinica-saude-em-dia-default-rtdb.firebaseio.com",
  projectId: "clinica-saude-em-dia",
  storageBucket: "clinica-saude-em-dia.appspot.com",
  messagingSenderId: "167655102492",
  appId: "1:167655102492:web:3d84d8ccfc1092f34b67d9",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);

export {
  db,
  set,
  ref,
  push,
  onChildAdded,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  auth,
  signOut,
};
