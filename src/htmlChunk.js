import api from './api.js';

export default function htmlChunk(){
    const section = document.getElementById('html_');

    api.addChunk(
        section,
        'boilerplate',
        'Boilerplate', 
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