
const config = hexo.config.post_replace;

hexo.extend.filter.register('before_render:html', function(data){
  if (config.before) {
    for (const key in config.before) {
      data.content = data.content.replaceAll(key, config.before[key]);
    }
  }
  return data;
});

hexo.extend.filter.register('after_render:html', function(data){
  if (config.after) {
    for (const key in config.after) {
      data.content = data.content.replaceAll(key, config.after[key]);
    }
  }
  return data;
});
