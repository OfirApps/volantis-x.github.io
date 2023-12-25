'use strict';
//MatkonIm
hexo.extend.tag.register('matkoning', function() {
    return `<style>
    .matkoning {margin-right: 1rem;}
    .matkoning ul li {list-style-position: inside;list-style-type: disclosure-closed;}
    .md ol>li {list-style-position: inside;}
    </style><div class="matkoning">`;
});

hexo.extend.tag.register('divend', function() {
    return `</div>`;
});

hexo.extend.tag.register('taavon', function() {
    return `<div style="text-align: center;font-size: large;"><b>בתאבון!</b></div>`;
});