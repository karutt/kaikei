

window.screenWidth = window.innerWidth;

window.screenHeight = window.innerHeight;

window.size = function(w, h, s) {
  var target;
  if (s == null) {
    s = 1;
  }
  target = document.getElementById("canvas");
  target.style.width = w + "px";
  target.style.height = h + "px";
  target.width = w * s;
  target.height = h * s;
  window.canvas = document.getElementById('canvas');
  window.c = canvas.getContext("2d");
  window.c.scale(s, s);
  window.width = canvas.width / s;
  window.height = canvas.height / s;
  window.cx = width / 2;
  window.cy = height / 2;
  window.draw_stroke = true;
  window.draw_fill = true;
  window.mouse = {
    x: 0,
    y: 0
  };
  window.pmouse = {
    x: 0,
    y: 0
  };
  canvas.onmousemove = (e)=> {
    window.pmouse = window.mouse
    window.mouse = mouseLoc(e)
  }
  window.rectmode = "corner";
  c.textAlign = "center";
  return c.textBaseline = "middle";
};

window.mouseLoc = function(e) {
  var bbox, x, y;
  x = e.clientX;
  y = e.clientY;
  bbox = canvas.getBoundingClientRect();
  return {
    x: (x - bbox.left - translateLoc.x) * (width / bbox.width),
    y: (y - bbox.top - translateLoc.y) * (height / bbox.height)
  };
};



window.textMode = function(mode1, mode2) {
  c.textAlign = mode1;
  return c.textBaseline = mode2;
};

window.rectMode = function(mode) {
  return window.rectmode = mode;
};

window.noStroke = function() {
  return window.draw_stroke = false;
};

window.noFill = function() {
  return window.draw_fill = false;
};

window.fill = function(color) {
  if (typeof color === "number") {
    color = "rgb(" + color + ", " + color + ", " + color + ")";
  }
  c.fillStyle = color;
  return window.draw_fill = true;
};

window.rgba = function(r, g, b, a) {
  return "rgba(" + r + ", " + g + ", " + b + ", " + a;
};

window.rgb = function(r, g, b) {
  return "rgba(" + r + ", " + g + ", " + b;
};

window.stroke = function(color) {
  if (typeof color === "number") {
    color = "rgb(" + color + ", " + color + ", " + color + ")";
  }
  c.strokeStyle = color;
  return window.draw_stroke = true;
};

window.strokeWeight = function(s) {
  return c.lineWidth = s;
};

window.alpha = function(s) {
  return c.globalAlpha = s;
};

window.font = function(s, font) {
  if (font == null) {
    font = "Trebuchet";
  }
  return c.font = s + "px " + font;
};

window.push = function() {
  return c.save();
};

window.pop = function() {
  return c.restore();
};

window.beginShape = function() {
  return c.beginPath();
};

window.endShape = function() {
  if (draw_stroke) {
    c.stroke();
  }
  if (draw_fill) {
    c.fill();
  }
  return c.closePath();
};

window.vertex = function(x, y) {
  return c.lineTo(x, y);
};

translateLoc = {x: 0, y: 0}
window.translate = function(x, y) {
  c.translate(x, y);
  translate
  translateLoc.x = x
  translateLoc.y = y
};

window.rotate = function(angle) {
  return c.rotate(angle);
};

window.background = function(color) {
  if (color == null) {
    color = "#fff";
  }
  if (typeof color === "number") {
    color = "rgb(" + color + ", " + color + ", " + color + ")";
  }
  c.clearRect(0, 0, width, height);
  c.fillStyle = color;
  c.beginPath();
  c.rect(0, 0, width, height);
  return c.fill();
};

window.big_background = function(color) {
  if (color == null) {
    color = "#fff";
  }
  if (typeof color === "number") {
    color = "rgb(" + color + ", " + color + ", " + color + ")";
  }
  c.clearRect(-width, -height, width * 2, height * 2);
  c.fillStyle = color;
  c.beginPath();
  c.rect(0, 0, width, height);
  return c.fill();
};

window.line = function(x1, y1, x2, y2) {
  c.beginPath();
  c.lineTo(x1, y1);
  c.lineTo(x2, y2);
  if (draw_stroke) {
    c.stroke();
  }
  if (draw_fill) {
    return c.fill();
  }
};

window.circle = function(x, y, r) {
  c.beginPath();
  c.arc(x, y, r, 0, Math.PI * 2, false);
  if (draw_stroke) {
    c.stroke();
  }
  if (draw_fill) {
    return c.fill();
  }
};

window.ellipse = function(x, y, rw, rh) {
  c.beginPath();
  c.ellipse(x, y, rw, rh, 0, Math.PI * 2, false);
  if (draw_stroke) {
    c.stroke();
  }
  if (draw_fill) {
    return c.fill();
  }
};

window.arc = function(x, y, r, angle1, angle2) {
  c.beginPath();
  c.arc(x, y, r, angle1, angle2, false);
  if (draw_stroke) {
    c.stroke();
  }
  if (draw_fill) {
    return c.fill();
  }
};

window.rect = function(x, y, w, h) {
  c.beginPath();
  if (rectmode === "corner") {
    c.rect(x, y, w, h);
  } else if (rectmode === "center") {
    c.rect(x - w / 2, y - h / 2, w, h);
  }
  if (draw_stroke) {
    c.stroke();
  }
  if (draw_fill) {
    return c.fill();
  }
};

window.text = function(t, x, y) {
  if (draw_stroke) {
    c.strokeText(t, x, y);
  }
  if (draw_fill) {
    return c.fillText(t, x, y);
  }
};


window.dist = (x1, y1, x2, y2) => {
  return Math.sqrt((x1 - x2)*(x1 - x2) + (y1 - y2)*(y1 - y2))
}

window.map = (value, range1, range2, range3, range4) => {
  return range3 + (range4 - range3) * ((value - range1) / (range2 - range1))
}

window.random = function(a, b) {
  const num = (Math.random()*(b-a)) + a;
  return num;
};

window.range = function* (begin, end=undefined, interval = 1) {
  if(end==undefined) {for (let i = 0; i < begin; i += 1) {yield i;}}
  else {for (let i = begin; i < end; i += interval) {yield i;}}
}

window.len = array => array.length;

window.shape = function(array) {
  if (array[0].length===undefined) {
    return [1, array.length];
  }
  return [array.length,  array[0].length];
};

let corsor_type = "fefault";
window.cursor = function(order){
  if (corsor_type !== order) {
    corsor_type = order;
    return document.body.style.cursor = order;
  }
};

window.int = a => Math.floor(a);
window.float = a => parseFloat(a);
window.round = function(num, cut_num=1) {
  cut_num = Math.pow(10, cut_num);
  return Math.round(num * cut_num) / cut_num;
};

window.log = (...t) => console.log(...Array.from(t || []));

window.sqrt = a => Math.sqrt(a);

window.cos = a => Math.cos(a);

window.sin = a => Math.sin(a);

window.shadow = function(x, y, b, color) {
  c.shadowColor = color;
  c.shadowOffsetX = x;
  c.shadowOffsetY = y;
  c.shadowBlur = b;
};

window.noShadow = function() {
  c.shadowColor = null;
  c.shadowOffsetX = null;
  c.shadowOffsetY = null;
  c.shadowBlur = null;
};

window.PI = Math.PI
window.hsv = (H,S,V) => {
  C = V * S
  Hp = H / 60
  X = C * (1 - Math.abs(Hp % 2 - 1))
  R = 0
  G = 0
  B = 0
  if (0 <= Hp && Hp < 1) {[R,G,B]=[C,X,0]}
  if (1 <= Hp && Hp < 2){[R,G,B]=[X,C,0]}
  if (2 <= Hp && Hp < 3){[R,G,B]=[0,C,X]}
  if (3 <= Hp && Hp < 4){[R,G,B]=[0,X,C]}
  if (4 <= Hp && Hp < 5){[R,G,B]=[X,0,C]}
  if (5 <= Hp && Hp < 6){[R,G,B]=[C,0,X]}
  m = V - C
  R = R+m
  G = G+m
  B = B+m
  R = Math.floor(R * 255)
  G = Math.floor(G * 255)
  B = Math.floor(B * 255)
  return [R ,G, B]
}

window.lerpColor = function(a, b, amount) {
  const ah = parseInt(a.replace(/#/g, ''), 16),
  ar = ah >> 16, ag = ah >> 8 & 0xff, ab = ah & 0xff,
  bh = parseInt(b.replace(/#/g, ''), 16),
  br = bh >> 16, bg = bh >> 8 & 0xff, bb = bh & 0xff,
  rr = ar + amount * (br - ar),
  rg = ag + amount * (bg - ag),
  rb = ab + amount * (bb - ab);
  return '#' + ((1 << 24) + (rr << 16) + (rg << 8) + rb | 0).toString(16).slice(1);
}

window.sum = function(p, axis) {
let sum;
if (axis == null) { axis = 1; }
let sum_array = [];
if (shape(p)[0] >= 2) {
  let x, y;
  if (axis===0) {
    let asc, end;
    sum = 0;
    for (y = 0, end = p.length-1, asc = 0 <= end; asc ? y <= end : y >= end; asc ? y++ : y--) { var asc1, end1;
      for (x = 0, end1 = p[0].length-1, asc1 = 0 <= end1; asc1 ? x <= end1 : x >= end1; asc1 ? x++ : x--) { sum += p[y][x]; } }
      sum_array = sum;

    } else if (axis===1) {
      let asc2, end2;
      for (x = 0, end2 = p[0].length-1, asc2 = 0 <= end2; asc2 ? x <= end2 : x >= end2; asc2 ? x++ : x--) {
        var asc3, end3;
        sum = 0;
        for (y = 0, end3 = p.length-1, asc3 = 0 <= end3; asc3 ? y <= end3 : y >= end3; asc3 ? y++ : y--) {
          sum += p[y][x];
        }
        sum_array.push(sum);
      }

    } else if (axis===2) {
      let asc4, end4;
      sum_array = [];
      for (y = 0, end4 = p.length-1, asc4 = 0 <= end4; asc4 ? y <= end4 : y >= end4; asc4 ? y++ : y--) {
        var asc5, end5;
        sum = 0;
        for (x = 0, end5 = p[0].length-1, asc5 = 0 <= end5; asc5 ? x <= end5 : x >= end5; asc5 ? x++ : x--) {
          sum += p[y][x];
        }
        sum_array.push(sum);
      }
    }
    return  sum_array;
  } else {
    sum = 0;
    for (let i = 0, end6 = p.length-1, asc6 = 0 <= end6; asc6 ? i <= end6 : i >= end6; asc6 ? i++ : i--) { sum += p[i]; }
    return sum;
  }
};

window.mean = function(p, axis) {
let mean;
if (axis == null) { axis = 1; }
let mean_array = [];
if (shape(p)[0]  >= 2) {
  let x, y;
  if (axis===0) {
    let asc, end;
    mean = 0;
    for (y = 0, end = p.length-1, asc = 0 <= end; asc ? y <= end : y >= end; asc ? y++ : y--) { var asc1, end1;
      for (x = 0, end1 = p[0].length-1, asc1 = 0 <= end1; asc1 ? x <= end1 : x >= end1; asc1 ? x++ : x--) { mean += p[y][x]; } }
      mean_array = mean/(p[0].length*p.length);

    } else if (axis===1) {
      let asc2, end2;
      for (x = 0, end2 = p[0].length-1, asc2 = 0 <= end2; asc2 ? x <= end2 : x >= end2; asc2 ? x++ : x--) {
        var asc3, end3;
        mean = 0;
        for (y = 0, end3 = p.length-1, asc3 = 0 <= end3; asc3 ? y <= end3 : y >= end3; asc3 ? y++ : y--) {
          mean += p[y][x];
        }
        mean_array.push(mean/p.length);
      }

    } else if (axis===2) {
      let asc4, end4;
      mean_array = [];
      for (y = 0, end4 = p.length-1, asc4 = 0 <= end4; asc4 ? y <= end4 : y >= end4; asc4 ? y++ : y--) {
        var asc5, end5;
        mean = 0;
        for (x = 0, end5 = p[0].length-1, asc5 = 0 <= end5; asc5 ? x <= end5 : x >= end5; asc5 ? x++ : x--) {
          mean += p[y][x];
        }
        mean_array.push(mean/p[0].length);
      }
    }
    return  mean_array;
  } else {
    mean = 0;
    for (let i = 0, end6 = p.length-1, asc6 = 0 <= end6; asc6 ? i <= end6 : i >= end6; asc6 ? i++ : i--) { mean += p[i]; }
    return mean/p.length;
  }
};

window.max = function(p, axis){
  let runner, x;
  if (axis == null) { axis = 1; }
  let max_array = [];
  if (shape(p)[0]  >= 2) {
    let y;
    if (axis===0) {
      let asc, end;
      runner = Number.NEGATIVE_INFINITY;
      for (y = 0, end = p.length-1, asc = 0 <= end; asc ? y <= end : y >= end; asc ? y++ : y--) {
        var asc1, end1;
        for (x = 0, end1 = p[0].length-1, asc1 = 0 <= end1; asc1 ? x <= end1 : x >= end1; asc1 ? x++ : x--) {
          runner = runner < p[y][x]  ? p[y][x] : runner;
        }
        max_array.push(runner);
      }


    } else if (axis===1) {
      let asc2, end2;
      for (x = 0, end2 = p[0].length-1, asc2 = 0 <= end2; asc2 ? x <= end2 : x >= end2; asc2 ? x++ : x--) {
        var asc3, end3;
        runner = Number.NEGATIVE_INFINITY;
        for (y = 0, end3 = p.length-1, asc3 = 0 <= end3; asc3 ? y <= end3 : y >= end3; asc3 ? y++ : y--) {
          runner = runner < p[y][x]  ? p[y][x] : runner;
        }
        max_array.push(runner);
      }

    } else if (axis===2) {
      let asc4, end4;
      max_array = [];
      for (y = 0, end4 = p.length-1, asc4 = 0 <= end4; asc4 ? y <= end4 : y >= end4; asc4 ? y++ : y--) {
        var asc5, end5;
        runner = Number.NEGATIVE_INFINITY;
        for (x = 0, end5 = p[0].length-1, asc5 = 0 <= end5; asc5 ? x <= end5 : x >= end5; asc5 ? x++ : x--) {
          runner = runner < p[y][x]  ? p[y][x] : runner;
        }
        max_array.push(runner);
      }
    }
    return  max_array;
  } else {
    let asc6, end6;
    runner = Number.NEGATIVE_INFINITY;
    for (x = 0, end6 = p.length-1, asc6 = 0 <= end6; asc6 ? x <= end6 : x >= end6; asc6 ? x++ : x--) {
      runner = runner < p[x]  ? p[x] : runner;
    }
    return runner;
  }
};


window.min = function(p, axis){
  let runner, x;
  if (axis == null) { axis = 1; }
  let min_array = [];
  if (shape(p)[0]  >= 2) {
    let y;
    if (axis===0) {
      let asc, end;
      runner = Number.POSITIVE_INFINITY;
      for (y = 0, end = p.length-1, asc = 0 <= end; asc ? y <= end : y >= end; asc ? y++ : y--) {
        var asc1, end1;
        for (x = 0, end1 = p[0].length-1, asc1 = 0 <= end1; asc1 ? x <= end1 : x >= end1; asc1 ? x++ : x--) {
          runner = runner > p[y][x]  ? p[y][x] : runner;
        }
      }
      min_array = runner;

    } else if (axis===1) {
      let asc2, end2;
      for (x = 0, end2 = p[0].length-1, asc2 = 0 <= end2; asc2 ? x <= end2 : x >= end2; asc2 ? x++ : x--) {
        var asc3, end3;
        runner = Number.POSITIVE_INFINITY;
        for (y = 0, end3 = p.length-1, asc3 = 0 <= end3; asc3 ? y <= end3 : y >= end3; asc3 ? y++ : y--) {
          runner = runner > p[y][x]  ? p[y][x] : runner;
        }
        min_array.push(runner);
      }

    } else if (axis===2) {
      let asc4, end4;
      min_array = [];
      for (y = 0, end4 = p.length-1, asc4 = 0 <= end4; asc4 ? y <= end4 : y >= end4; asc4 ? y++ : y--) {
        var asc5, end5;
        runner = Number.POSITIVE_INFINITY;
        for (x = 0, end5 = p[0].length-1, asc5 = 0 <= end5; asc5 ? x <= end5 : x >= end5; asc5 ? x++ : x--) {
          runner = runner > p[y][x]  ? p[y][x] : runner;
        }
        min_array.push(runner);
      }
    }
    return  min_array;
  } else {
    let asc6, end6;
    runner = Number.POSITIVE_INFINITY;
    for (x = 0, end6 = p.length-1, asc6 = 0 <= end6; asc6 ? x <= end6 : x >= end6; asc6 ? x++ : x--) {
      runner = runner > p[x]  ? p[x] : runner;
    }
    return runner;
  }
};

window.getMousePos = (e) => {
    let posx = 0;
    let posy = 0;
    if (!e) e = window.event;
    if (e.pageX || e.pageY)     {
        posx = e.pageX;
        posy = e.pageY;
    }
    else if (e.clientX || e.clientY)    {
        posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
        posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
    }
    return { x : posx, y : posy }
};

window.mousePos = (e, dom)=> {
  const mousepos = getMousePos(e);

  const docScrolls = {left : document.body.scrollLeft + document.documentElement.scrollLeft, top : document.body.scrollTop + document.documentElement.scrollTop};
  const bounds = (dom).getBoundingClientRect();
  const relmousepos = {
      x : mousepos.x - bounds.left - docScrolls.left,
      y : mousepos.y - bounds.top - docScrolls.top
  };
  return relmousepos
}

// window.event = (eventName, func) => {
//   document.addEventListener(eventName, func)
// }

window.event = (target, eventName, func)=> {
  target.addEventListener(eventName, func)
}

window.select = (selecter)=> {
  return document.querySelector(selecter);
}

window.css = (target, style)=> {

  for(var prop in style) {
    target.style[prop] = style[prop];
  }
}
