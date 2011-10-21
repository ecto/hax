
var tty = require('tty'),
    colors = require('colors');

var s = tty.getWindowSize(1),
    w = s[1],
    h = s[0],
    b = [3000,
         3010,
         3020,
         3030,
         3050,
         3060,
         3070,
         3080],

wut = function(){
  var a = '';
  for (var i = 0; i < h; i++) {
    var r = '';
    for (var j = 0; j < w; j++) {
      var _ = Math.floor(Math.random()*10),
      __ = Math.floor(Math.random()*b.length),
      c = '0x' + (_ + b[__]);
      ~ c << _;
      if (_ > __) r += ' ';
      else r += eval('String.fromCharCode(' + c + ')');
    }
    a += r;
  }
  console.log(a.green);
},

lol = function(){
  setTimeout(wut,1);
}

setInterval(lol, 420)

process.on('SIGINT', function(){});
