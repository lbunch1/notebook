export default function resources() {
    const sectionRESOURCES = document.getElementById('resources');

    function createLink(content, url) {
        const link = document.createElement('a');
        link.setAttribute('target', 'blank');
        link.setAttribute('href', url);
        link.innerText = content;

        sectionRESOURCES.appendChild(link);
        sectionRESOURCES.innerHTML += `<br> \n`
    }

    createLink('CSS Grid', 'https://css-tricks.com/snippets/css/complete-guide-grid/');
    createLink('SVG Shapes - haikei','https://app.haikei.app/');
    createLink('CSS Clip Paths','https://bennettfeely.com/clippy/');
    createLink('Stock Photos - unsplash','https://unsplash.com/');
    createLink('Icons - font-awesome','https://fontawesome.com/icons?d=gallery&m=free');
    createLink('Icons - heroicons','https://heroicons.com/');


}