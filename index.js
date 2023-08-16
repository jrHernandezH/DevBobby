import { onGetProjects } from './js/data/firebase.js';

const main = document.getElementById('container-projects');


window.addEventListener('DOMContentLoaded', async () => {
    onGetProjects((querySnapshot) => {

        let card = '';
        querySnapshot.forEach(doc => {
            const project = doc.data()
            card += `
            <div class="card">
                <div class="card-header">
                    <figure class="figure">
                        <img src="${project.img}" class="figure-img img-fluid rounded">
                    </figure>
                </div>
                <div class=card-body>
                    <h1>${project.title}</h1>
                    <p>${project.description}</p>
                    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                    <button class="btn btn-primary me-md-2" type="button">Button</button>
                    </div>
                </div>
            </div>
            `
        });
        main.innerHTML = card;
    });
});