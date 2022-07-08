
export default {
    addChunk: (section, id, header, content) => {
        const chunkHeader = document.createElement('h3');
        chunkHeader.setAttribute('class', 'item');
        chunkHeader.setAttribute('id', id);
        chunkHeader.innerText = header;

        section.appendChild(chunkHeader);
        section.innerHTML += `<br>`;
        section.innerHTML += content;
    },
    addLink: (section, content, url) => {
        const link = document.createElement('a');
        link.setAttribute('target', 'blank');
        link.setAttribute('href', url);
        link.innerText = content;

        section.appendChild(link);
        section.innerHTML += `<br> \n`
    },
}
