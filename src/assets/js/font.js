//helper functions
var pixelRatio = 2;
var isDown = false, moveX = 0, moveY = 0, offsetX = 0, offsetY = 0;
var canvas, ctx;
var renderer, stage;
var sw = document.body.clientWidth;
var sh = document.body.clientHeight;

function generateCanvas() {
  canvas = document.createElement('canvas');
  document.body.appendChild(canvas);
  ctx = canvas.getContext("2d");

  window.addEventListener('resize', canvasResize, false);
  canvasResize();

  // moveEvent(canvas);
}

function canvasResize() {
  sw = document.body.clientWidth;
  sh = document.body.clientHeight;

  canvas.width = sw * pixelRatio;
  canvas.height = sh * pixelRatio;
  canvas.style.width = sw + 'px';
  canvas.style.height = sh + 'px';
  ctx.scale(pixelRatio, pixelRatio);
}

function generatePixi(bgcolor) {
  renderer = new PIXI.Renderer({
    width: sw,
    height: sh,
    antialias: true,
    transparent: false,
    autoDensity: true,
    resolution: pixelRatio,//window.devicePixelRatio > 1 ? 2 : 1,
    powerPreference: "high-performance",
    backgroundColor: bgcolor
  });
  document.body.appendChild(renderer.view);
  stage = new PIXI.Container();

  window.addEventListener('resize', pixiResize, false);
  pixiResize();

  moveEvent(renderer.view);
}

function pixiResize() {
  sw = document.body.clientWidth;
  sh = document.body.clientHeight;

  renderer.resize(sw, sh);
}

function moveEvent(canvas) {
  const hammer = new Hammer(canvas);
  hammer.add(new Hammer.Pan({direction: Hammer.DIRECTION_ALL, threshold: 0}));
  hammer.on("pan", (e) => {
    moveX = e.deltaX + offsetX;
    moveY = e.deltaY + offsetY;
    if (e.isFinal) {
      offsetX = moveX;
      offsetY = moveY;
    }
  });
}

function getSize(size) {
  let ratio = Math.sqrt(sw * sw + sh * sh) / 1800;
  if (ratio > 1) ratio = 1;
  else if (ratio < 0.5) ratio = 0.5;
  return size * ratio;
}

//helper functions end

let container, texture, particleCon;
let leon, controll;
const particleTotal = 5000;
let particles = [];
let myText = 'S,A,B,R,A,N,G,\'19'.split(',');
const textTotal = myText.length;
let curText = -1;
let DELAY_TIME = 0.8;

function init() {
  generatePixi(0xfec82e);
  texture = PIXI.Texture.from('../assets/img/drop-alpha.png');
  particleCon = new PIXI.ParticleContainer(particleTotal, {
    vertices: false,
    scale: true,
    position: true,
    rotation: false,
    uvs: false,
    alpha: false
  });
  stage.addChild(particleCon);
  let p, i;
  for (i = 0; i < particleTotal; i++) {
    p = new PIXI.Sprite(texture);
    p.x = sw / 2;
    p.y = sh / 2;
    p.anchor.set(0.5);
    p.scale.x = p.scale.y = 0;
    particleCon.addChild(p);
    particles.push(p);
  }
  const blurFilter = new PIXI.filters.BlurFilter();
  blurFilter.blur = 10;
  blurFilter.autoFit = true;
  const fragSource = [
    'precision mediump float;',
    'varying vec2 vTextureCoord;',
    'uniform sampler2D uSampler;',
    'uniform float threshold;',
    'uniform float mr;',
    'uniform float mg;',
    'uniform float mb;',
    'void main(void)',
    '{',
    '    vec4 color = texture2D(uSampler, vTextureCoord);',
    '    vec3 mcolor = vec3(mr, mg, mb);',
    '    if (color.a > threshold) {',
    '       gl_FragColor = vec4(mcolor, 1.0);',
    '    } else {',
    '       gl_FragColor = vec4(vec3(0.0), 0.0);',
    '    }',
    '}'
  ].join('\n');
  const uniformsData = {
    threshold: 0.5,
    mr: 255.0 / 255.0,
    mg: 255.0 / 255.0,
    mb: 255.0 / 255.0,
  };
  const thresholdFilter = new PIXI.Filter(null, fragSource, uniformsData);
  const outlineFilterBlue = new PIXI.filters.OutlineFilter(1, 0x000000);
  stage.filters = [blurFilter, thresholdFilter, outlineFilterBlue];
  stage.filterArea = renderer.screen;
  controll = {
    weight: 6,
    outline: true
  };
  leon = new LeonSans({
    text: '',
    size: 600,
    weight: 700,
    pathGap: -1,
    isPath: true
  });
  leon.on('update', (data) => {
    update(data);
  });
  requestAnimationFrame(animate);
  showText();
}

function nextText() {
  TweenMax.killDelayedCallsTo(showText);
  TweenMax.delayedCall(DELAY_TIME, showText);
}

function showText() {
  curText += 1;
  if (curText == textTotal) curText = 0;
  leon.text = myText[curText];
  nextText();
}


function update(model) {
  const total = model.paths.length;
  const sw2 = sw / 2;
  const sh2 = sh / 2;
  let i, p, pos, scale;
  for (i = 0; i < particleTotal; i++) {
    p = particles[i];
    TweenMax.killTweensOf(p);
    if (i < total) {
      pos = model.paths[i];
      if (pos.type == 'a') {
        scale = controll.weight * 0.02 * leon.scale;
      } else {
        scale = controll.weight * 0.01 * leon.scale;
      }
      TweenMax.to(p, 0.4, {
        x: sw2,
        y: sh2,
        ease: Sine.easeIn
      });
      TweenMax.to(p, 0.5, {
        delay: 0.3,
        x: pos.x,
        y: pos.y,
        ease: Expo.easeOut
      });
      TweenMax.to(p.scale, 0.5, {
        delay: 0.3,
        x: scale,
        y: scale,
        ease: Expo.easeOut
      });
    } else {
      TweenMax.to(p, 0.3, {
        x: sw2,
        y: sh2,
        ease: Sine.easeIn
      });
      TweenMax.to(p.scale, 0.3, {
        x: 0,
        y: 0,
        ease: Sine.easeIn
      });

    }
  }
}

function animate(t) {
  requestAnimationFrame(animate);
  const x = (sw - leon.rect.w) / 2;
  const y = (sh - leon.rect.h) / 2;
  leon.position(x, y);
  renderer.render(stage);
}

window.onload = () => {
  init();
  setTimeout(function () {
    window.removeEventListener("resize", pixiResize, false);
    document.body.removeChild(renderer.view);
  }, 6400);
};
