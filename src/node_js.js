export default function nodeChunk(){
    const sectionNode = document.getElementById('js');

    function addChunk(id, header, content) {
        const chunkHeader = document.createElement('h3');
        chunkHeader.setAttribute('class', 'item');
        chunkHeader.setAttribute('id', id);
        chunkHeader.innerText = header;

        sectionNode.appendChild(chunkHeader);
        sectionNode.innerHTML += `<br>`;
        sectionNode.innerHTML += content;
    }
}