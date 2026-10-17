/**
 * Fragment shaders (GLSL ES 1.0). Each one is a muted, grainy "matte" piece of
 * generative art. Shared uniforms:
 *   u_res   canvas size in px
 *   u_time  seconds since start
 *   u_mouse pointer position, 0..1 in canvas space (y up)
 *   u_seed  per-instance offset so repeated shaders differ
 */

const header = /* glsl */ `
precision highp float;
uniform vec2 u_res;
uniform float u_time;
uniform vec2 u_mouse;
uniform float u_seed;

float hash(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}

float noise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
             mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);
}

float fbm(vec2 p) {
  float v = 0.0, a = 0.5;
  mat2 m = mat2(1.6, 1.2, -1.2, 1.6);
  for (int i = 0; i < 5; i++) { v += a * noise(p); p = m * p; a *= 0.5; }
  return v;
}

// Matte palette: charcoal -> plum -> rose -> terracotta -> cream.
vec3 grad(float t) {
  t = clamp(t, 0.0, 1.0);
  vec3 c0 = vec3(0.047, 0.043, 0.039);
  vec3 c1 = vec3(0.165, 0.122, 0.239);
  vec3 c2 = vec3(0.541, 0.247, 0.290);
  vec3 c3 = vec3(0.851, 0.451, 0.290);
  vec3 c4 = vec3(0.941, 0.851, 0.710);
  vec3 c = mix(c0, c1, smoothstep(0.0, 0.3, t));
  c = mix(c, c2, smoothstep(0.3, 0.55, t));
  c = mix(c, c3, smoothstep(0.55, 0.8, t));
  return mix(c, c4, smoothstep(0.8, 1.0, t));
}

vec2 aspectUv() {
  return (gl_FragCoord.xy - 0.5 * u_res) / min(u_res.x, u_res.y);
}

vec2 aspectMouse() {
  return (u_mouse * u_res - 0.5 * u_res) / min(u_res.x, u_res.y);
}

vec3 finish(vec3 col) {
  vec2 uv = gl_FragCoord.xy / u_res;
  col *= 0.55 + 0.45 * pow(16.0 * uv.x * uv.y * (1.0 - uv.x) * (1.0 - uv.y), 0.25);
  col += (hash(gl_FragCoord.xy + fract(u_time) * 91.0) - 0.5) * 0.06;
  return col;
}
`;

/** Domain-warped flow field. Used for the hero and ambient panels. */
const flow = /* glsl */ `${header}
void main() {
  vec2 p = aspectUv();
  float d = length(p - aspectMouse());
  p = p * 1.3 + u_seed;
  float t = u_time * 0.05;
  vec2 q = vec2(fbm(p + t), fbm(p + vec2(5.2, 1.3) - t));
  vec2 r = vec2(fbm(p + 3.0 * q + vec2(1.7, 9.2) + 1.5 * t),
                fbm(p + 3.0 * q + vec2(8.3, 2.8) - t));
  float f = fbm(p + 3.0 * r);
  f += 0.18 * exp(-d * d * 5.0);
  vec3 col = grad(f * f * 1.7 + 0.12 * length(q));
  gl_FragColor = vec4(finish(col * 0.9), 1.0);
}
`;

/** Drifting nodes joined by fading edges: agents talking to each other. */
const network = /* glsl */ `${header}
float seg(vec2 p, vec2 a, vec2 b) {
  vec2 pa = p - a, ba = b - a;
  float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);
  return length(pa - ba * h);
}

vec2 node(vec2 cell) {
  float h = hash(cell + u_seed);
  return cell + 0.5 + 0.38 * vec2(sin(u_time * 0.4 + h * 6.283), cos(u_time * 0.33 + h * 12.1));
}

void main() {
  vec2 p = aspectUv() * 5.0 + u_seed;
  vec2 id = floor(p);
  vec2 pts[9];
  for (int y = -1; y <= 1; y++)
    for (int x = -1; x <= 1; x++)
      pts[(y + 1) * 3 + (x + 1)] = node(id + vec2(float(x), float(y)));

  float glow = 0.0;
  for (int i = 0; i < 9; i++) {
    float dl = length(pts[4] - pts[i]);
    float line = smoothstep(0.03, 0.0, seg(p, pts[4], pts[i])) * smoothstep(1.4, 0.5, dl);
    glow += line * 0.5;
    float dp = length(p - pts[i]);
    float pulse = 0.6 + 0.4 * sin(u_time * 1.5 + hash(id + float(i)) * 6.283);
    glow += 0.012 / (dp * dp + 0.002) * 0.02 * pulse;
  }
  glow += 0.5 * smoothstep(0.03, 0.0, seg(p, pts[1], pts[3]));
  glow += 0.5 * smoothstep(0.03, 0.0, seg(p, pts[1], pts[5]));
  glow += 0.5 * smoothstep(0.03, 0.0, seg(p, pts[7], pts[3]));
  glow += 0.5 * smoothstep(0.03, 0.0, seg(p, pts[7], pts[5]));

  vec3 base = grad(0.18 + 0.15 * fbm(p * 0.3 + u_time * 0.03));
  vec3 col = base + grad(0.75) * clamp(glow, 0.0, 1.2) * 0.75;
  gl_FragColor = vec4(finish(col), 1.0);
}
`;

/** Topographic contours with pulsing pins: news on a map. */
const topo = /* glsl */ `${header}
void main() {
  vec2 p = aspectUv() * 2.2 + u_seed;
  float h = fbm(p + vec2(u_time * 0.02, 0.0));
  float bands = h * 14.0;
  float line = smoothstep(0.06, 0.0, abs(fract(bands) - 0.5) - 0.44);
  float major = smoothstep(0.06, 0.0, abs(fract(bands / 5.0) - 0.5) - 0.47);
  vec3 col = grad(0.12 + h * 0.3);
  col += grad(0.65) * line * 0.22 + grad(0.85) * major * 0.25;

  for (int i = 0; i < 5; i++) {
    float fi = float(i);
    vec2 pin = (vec2(hash(vec2(fi, u_seed)), hash(vec2(u_seed, fi + 3.0))) - 0.5) * vec2(2.6, 1.6);
    float d = length(aspectUv() * 2.2 - pin);
    float phase = fract(u_time * 0.35 + fi * 0.23);
    float ring = smoothstep(0.02, 0.0, abs(d - phase * 0.6)) * (1.0 - phase);
    col += grad(0.72) * (ring * 0.8 + smoothstep(0.05, 0.0, d));
  }
  gl_FragColor = vec4(finish(col), 1.0);
}
`;

/** Scrolling square-wave lanes with an occasional anomaly: CAN bus traffic. */
const signal = /* glsl */ `${header}
void main() {
  vec2 uv = gl_FragCoord.xy / u_res;
  float lanes = 7.0;
  float lane = floor(uv.y * lanes);
  float ly = fract(uv.y * lanes);
  float speed = 2.0 + hash(vec2(lane, u_seed)) * 3.0;
  float x = uv.x * 18.0 * (u_res.x / u_res.y) * 0.5 + u_time * speed + lane * 13.0;
  float cell = floor(x);
  float bit = step(0.5, hash(vec2(cell, lane + u_seed)));
  float prev = step(0.5, hash(vec2(cell - 1.0, lane + u_seed)));
  float level = mix(0.3, 0.7, bit);
  float w = 1.6 / u_res.y * lanes;
  float trace = smoothstep(w, 0.0, abs(ly - level));
  float px = 9.0 / u_res.y;
  float edge = step(0.5, abs(bit - prev)) * smoothstep(1.5 * px, 0.0, fract(x)) * step(0.3, ly) * step(ly, 0.7);
  float anomaly = step(0.82, hash(vec2(lane, floor(u_time * 0.5))));
  vec3 ink = mix(grad(0.62), grad(0.9), anomaly);
  vec3 col = grad(0.1 + 0.05 * anomaly) + ink * clamp(trace + edge, 0.0, 1.0) * (0.55 + 0.45 * anomaly);
  col += grad(0.3) * smoothstep(0.012, 0.0, abs(ly - 0.02)) * 0.25;
  gl_FragColor = vec4(finish(col), 1.0);
}
`;

/** Feature-map grid swept by a kernel window: a CNN at work. */
const conv = /* glsl */ `${header}
void main() {
  vec2 uv = gl_FragCoord.xy / u_res;
  float n = 14.0;
  vec2 g = uv * vec2(n * u_res.x / u_res.y, n);
  vec2 id = floor(g);
  vec2 f = fract(g);
  float act = fbm(id * 0.25 + u_seed + u_time * 0.15);
  float sq = step(0.12, f.x) * step(f.x, 0.88) * step(0.12, f.y) * step(f.y, 0.88);
  float cols = floor(n * u_res.x / u_res.y);
  float k = floor(u_time * 4.0);
  vec2 kpos = vec2(mod(k, cols - 2.0), n - 3.0 - mod(floor(k / (cols - 2.0)), n - 2.0));
  vec2 kd = id - kpos;
  float inK = step(0.0, kd.x) * step(kd.x, 2.0) * step(0.0, kd.y) * step(kd.y, 2.0);
  vec3 col = grad(0.08) + sq * grad(0.15 + act * act * 0.9) * 0.8;
  col = mix(col, grad(0.92) * (0.6 + act * 0.4), inK * sq * 0.65);
  gl_FragColor = vec4(finish(col), 1.0);
}
`;

export const shaders = { flow, network, topo, signal, conv } as const;

export type ShaderName = keyof typeof shaders;
