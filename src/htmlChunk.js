export default function htmlChunk(){
    const sectionHTML = document.getElementById('html_');

    function addChunk(id, header, content) {
        const chunkHeader = document.createElement('h3');
        chunkHeader.setAttribute('class', 'item');
        chunkHeader.setAttribute('id', id);
        chunkHeader.innerText = header;

        sectionHTML.appendChild(chunkHeader);
        sectionHTML.innerHTML += `<br>`;
        sectionHTML.innerHTML += content;
    }

    addChunk('boilerplate', 'Boilerplate', 
    `<pre>
    <code>
        &lt;!DOCTYPE html&gt;
        &lt;html lang="en"&gt;
        &lt;head&gt;
            &lt;meta charset="UTF-8"&gt;
            &lt;meta http-equiv="X-UA-Compatible" content="IE=edge"&gt;
            &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
            &lt;title&gt;Document&lt;/title&gt;
        &lt;/head&gt;
        &lt;body&gt;
            
        &lt;/body&gt;
        &lt;/html&gt;
    </code>
            </pre>`
    );
}