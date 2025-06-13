// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCXhzF338tzR45zCoRkgnq5VPZzud1A1Qw",
    authDomain: "milktea-psycological-test.firebaseapp.com",
    projectId: "milktea-psycological-test",
    storageBucket: "milktea-psycological-test.firebasestorage.app",
    messagingSenderId: "833246438629",
    appId: "1:833246438629:web:135e126ec1682b652b200c"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
