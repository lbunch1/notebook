import _ from 'lodash';
// import api from './api.js';
import navigation from './nav.js';
import resources from './resources.js';
import htmlChunk from './htmlChunk.js';
import cssChunk from './css.js';
import jsChunk from './javascript.js';
import nodeChunk from './node_js.js';
import hljs from './highlight.min.js';
import './style.css';
import './vs2015.min.css';


resources();
htmlChunk();
cssChunk();
jsChunk();
nodeChunk();
navigation();
hljs.highlightAll();