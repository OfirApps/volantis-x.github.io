'use strict';
//MatkonIm
hexo.extend.tag.register('matkoning', function() {
    return `<style>
    .matkoning ul li {list-style-position: inside;list-style-type: disclosure-closed;}
    .md ol>li {list-style-position: inside;}
    </style><box class="matkoning">`;
});

hexo.extend.tag.register('divend', function() {
    return `</box>`;
});

hexo.extend.tag.register('taavon', function() {
    return `<box style="text-align: center;font-size: large;"><b>בתאבון!</b></box>`;
});