export default function jsChunk(){
    const sectionJS = document.getElementById('js');

    function addChunk(id, header, content) {
        const chunkHeader = document.createElement('h3');
        chunkHeader.setAttribute('class', 'item');
        chunkHeader.setAttribute('id', id);
        chunkHeader.innerText = header;

        sectionJS.appendChild(chunkHeader);
        sectionJS.innerHTML += `<br>`;
        sectionJS.innerHTML += content;
    }
}