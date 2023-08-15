import { saveTask, getTasks, onGetTask, deleteTask, getTask, updateTask } from './js/data/firebase.js';
const taskContainer = document.getElementById('task-container');
const taskForm = document.getElementById('task-form');
let editStatus = false;
let id = '';
window.addEventListener('DOMContentLoaded', async () => {
    onGetTask((querySnapshot) => {

        let html = '';
        querySnapshot.forEach(doc => {
            const task = doc.data()
            const contenedor = document.getElementById('container-projects');
            const card = document.createElement('div');
            card.innerHTML = `<div class="max-w-sm rounded overflow-hidden shadow-lg">
                                    <img class="w-full" src="ruta-de-la-imagen.jpg" alt="Proyecto 1">
                                    <div class="px-6 py-4">
                                    <div class="font-bold text-xl mb-2">${task.name}</div>
                                    <p class="text-gray-700 text-base">
                                        Descripción del proyecto que destaque sus características y objetivos.
                                    </p>
                                    </div>
                                </div>`;
            contenedor.appendChild(card);
        });
    });
});