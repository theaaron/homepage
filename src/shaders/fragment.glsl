precision mediump float;
uniform vec3 uColor;
uniform float uTime;
varying vec2 vUv;



void main() {
  gl_FragColor = vec4(tan(vUv.x*0.3 + uTime*0.15) * uColor.r, 1.0/(cos(vUv.y + uTime*0.25) * uColor.g), uColor.b, 0.7);
}
