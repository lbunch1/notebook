import api from './api.js';

export default function resources() {
    const section = document.getElementById('resources');

    api.addLink(section, 'CSS Grid', 'https://css-tricks.com/snippets/css/complete-guide-grid/');
    api.addLink(section, 'SVG Shapes - haikei','https://app.haikei.app/');
    api.addLink(section, 'CSS Clip Paths','https://bennettfeely.com/clippy/');
    api.addLink(section, 'Stock Photos - unsplash','https://unsplash.com/');
    api.addLink(section, 'Icons - font-awesome','https://fontawesome.com/icons?d=gallery&m=free');
    api.addLink(section, 'Icons - heroicons','https://heroicons.com/');
}