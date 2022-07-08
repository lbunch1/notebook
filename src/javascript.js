import api from './api.js';

export default function jsChunk(){
    const section = document.getElementById('js');

    api.addChunk(
        section,
        'reduce',
        '.reduce()',
        `<pre>
    <code>
    /* .reduce steps through an array operating on the previous value
    and current value with an optional parameter of an initial value. */
    let arr = [10, 5, 3, 1];

    let reducedArr = arr.reduce((a,b) => a + b);

    console.log(reducedArr) // 19
    </code>
        </pre>`
    )
}