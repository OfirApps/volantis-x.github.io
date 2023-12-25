'use strict';
//MatkonIm
hexo.extend.tag.register('matkoning', function(args) {
    return `<div class="matkoning">`;
});

hexo.extend.tag.register('divend', function(args) {
    return `</div>`;
});

hexo.extend.tag.register('taavon', function(args) {
    return `<div><b>בתאבון!</b></div>`;
});