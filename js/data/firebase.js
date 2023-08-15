// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, onSnapshot, deleteDoc, doc, getDoc, updateDoc } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBGxDVNOR465HALY77rMU49WYPc-Cp9s0A",
    authDomain: "fir-crud-b8c4f.firebaseapp.com",
    projectId: "fir-crud-b8c4f",
    storageBucket: "fir-crud-b8c4f.appspot.com",
    messagingSenderId: "274203248778",
    appId: "1:274203248778:web:4a08d39b103f81700ec573",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();

export const saveData = (data) => {
    addDoc(collection(db, 'projects'), {
        title: data.title,
        description: data.description,
        urlGit: data.github,
        urlView: data.view,
        img: data.imgProject
    });
}

export const getTasks = () => getDocs(collection(db, "task"));

export const onGetTask = (callback) => onSnapshot(collection(db, 'Credentials'), callback);

export const deleteTask = (id) => {
    deleteDoc(doc(db, 'task', id));
}

export const getTask = async (id) => {
    const taskDocRef = doc(db, 'task', id);
    const taskDocSnapshot = await getDoc(taskDocRef);

    if (taskDocSnapshot.exists()) {
        return taskDocSnapshot.data();
    } else {
        return 'no se encuentra la tarea';
    }
}

export const updateTask = (id, newFields) => {
    updateDoc(doc(db, 'task', id), newFields);
}