import api from './api.js';

export default function cssChunk(){
    const section = document.getElementById('css');

    api.addChunk(
        section,
        'box-shadow',
        'box-shadow',
        `<pre>
        <code class="language-css">
/* offset-x | offset-y | blur-radius | spread-radius | color */
box-shadow: 2px 2px 8px 3px rgb(10, 10, 10, 0.8);
        </code>
    </pre>`
    )

    api.addChunk(
        section,
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