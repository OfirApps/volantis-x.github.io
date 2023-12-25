'use strict';
//MatkonIm
hexo.extend.tag.register('matkoning', function() {
    return `<recpie class="matkoning">`;
});

hexo.extend.tag.register('divend', function() {
    return `</recpie>`;
});

hexo.extend.tag.register('taavon', function() {
    return `<div><b>בתאבון!</b></div>`;
});