import * as $ from 'jquery'

import './assets/css/style.css'

import Post from "./posts";


const post = new Post('Webpack Post Title');

console.log('Post to string:', post.toString());

$('pre').addClass('active').html(post.toString());