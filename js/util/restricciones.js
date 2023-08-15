const titlePreview = document.getElementById('title-preview-card');
const descriptionPreview = document.getElementById('description-preview-card');
const imgPreview = document.getElementById('img-preview-card');
const datosCard = [titlePreview, descriptionPreview, imgPreview];
const projectForm = document.getElementById('projects');
// Función para verificar si un enlace es de una imagen
function isImageLink(link) {
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp'];
    const extension = link.substring(link.lastIndexOf('.')).toLowerCase();
    return imageExtensions.includes(extension);
}

projectForm.addEventListener('change', (event) => {
    const titleValue = projectForm['title'].value;
    const descriptionValue = projectForm['description'].value;
    const imgValue = projectForm['imgProject'].value;

    titlePreview.innerHTML = titleValue || 'Título del proyecto';
    descriptionPreview.innerHTML = descriptionValue || 'Descripcion del proyecto lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit, saepe neque? Officiis dicta exercitationem non impedit accusantium alias nesciunt iusto';

    if (isImageLink(imgValue)) {
        imgPreview.src = imgValue;
    } else {
        imgPreview.src = 'https://jrhernandezh.github.io/Frontend/card-product/design/desktop-design.jpg';
    }
});