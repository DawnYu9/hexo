//hexo new "post"后自动用默认编辑器打开文件

var exec = require('child_process').exec;

/* Hexo 2.x
hexo.on('new', function(path){
  exec('start' + path);
});
*/

// Hexo 3
hexo.on('new', function(data){
  exec('start ' + data.path);
});