export default function cssChunk(){
    const sectionCSS = document.getElementById('css');

    function addChunk(id, header, content) {
        const chunkHeader = document.createElement('h3');
        chunkHeader.setAttribute('class', 'item');
        chunkHeader.setAttribute('id', id);
        chunkHeader.innerText = header;

        sectionCSS.appendChild(chunkHeader);
        sectionCSS.innerHTML += `<br>`;
        sectionCSS.innerHTML += content;
    }

    addChunk(
        'box-shadow',
        'box-shadow',
        `<pre>
        <code class="language-css">
/* offset-x | offset-y | blur-radius | spread-radius | color */
box-shadow: 2px 2px 8px 3px rgb(10, 10, 10, 0.8);
        </code>
    </pre>`
    )

    addChunk(
        'media',
        '@media',
        `<pre>
        <code>
/* Small screens and tablets */
@media screen and (max-width: 600px) {
/* .. */
}
/* Large screens */
@media screen and (min-width: 600px) {
/* .. */
}
        </code>
    </pre>`
    )

}