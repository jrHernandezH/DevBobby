import { saveData } from "../data/firebase.js";

const projectForm = document.getElementById('projects');


projectForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const title = projectForm['title'];
    const description = projectForm['description'];
    const github = projectForm['github'];
    const view = projectForm['view'];
    const imgProject = projectForm['imgProject'];

    const dataProject = {
        title: title.value,
        description: description.value,
        github: github.value,
        view: view.value,
        imgProject: imgProject.value
    }
    saveData(dataProject)
    projectForm.reset()
});
