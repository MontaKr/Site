import * as THREE from "three";

const canvas = document.getElementById("canvas");

const renderer = new THREE.WebGLRenderer({
  canvas, // 사용할 canvas 요소를 지정
  antialias: true,
  preserveDrawingBuffer: true,
});

renderer.setSize(window.innerWidth, window.innerHeight);

// 디바이스 해상도에 따라 선명도를 유지하면서, 너무 높은 픽셀 비율로 인해 성능 저하가 발생하는 것을 방지
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// 3D 요소들이 들어가는 컨테이너
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xe3e3db);

const camera = new THREE.PerspectiveCamera(
  45, // 시야각 (숫자가 작을수록 줌인된 느낌)
  window.innerWidth / window.innerHeight, // 뷰포트의 비율
  0.1, // 카메라가 볼 수 있는 최소 거리
  100 // 카메라가 볼 수 있는 최대 거리
);

// 카메라와 오브젝트가 같은 위치에 있으면 아무것도 안보이기 때문에 카메라의 위치를 이동
camera.position.z = 5;

const setting = {
  wheelSensitivity: 0.01,
  touchSensitivity: 0.01,
  momentumMultiplier: 2,
  smoothing: 0.1,
  slideLerp: 0.075,
  distortionDecay: 0.95,
  maxDistortion: 2.5,
  distortionSensitivity: 0.15,
  distortionSmoothing: 0.075,
};

const slideWidth = 3.0;
const slideHeight = 1.5;
const gap = 0.1;
const slideCount = 10;
const imagesCount = 5;
const totalWidth = slideCount * (slideWidth + gap);
const slideUnit = slideWidth + gap;

const slides = [];
let currentPosition = 0;
let targetPosition = 0;
let isScrolling = false;
let autoScrollSpeed = 0;
let lastTime = 0;
let touchStartX = 0;
let touchLastX = 0;
let prevPosition = 0;

let currentDistortionFactor = 0;
let targetDistortionFactor = 0;
let peakVelocity = 0;
let velocityHistory = [0, 0, 0, 0, 0];

const correctImageColor = (texture) => {
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
};

const createSlide = (index) => {
  // 평면 모형 생성
  const geometry = new THREE.PlaneGeometry(slideWidth, slideHeight, 32, 16);

  const colors = ["#FF5733", "#33FF57", "#3357FF", "#F3FF33", "#FF33F3"];

  const material = new THREE.MeshBasicMaterial({
    color: new THREE.Color(colors[index % colors.length]),
    side: THREE.DoubleSide, // 앞면과 뒷면 모두 렌더링
  });

  // 3D 객체
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.x = index * (slideWidth + gap);

  // 사용자 정의 데이터
  mesh.userData = {
    originalVertices: [...geometry.attributes.position.array],
    index,
  };

  const imageIndex = (index % imagesCount) + 1;
  const imagePath = `/img${imageIndex}.jpg`;

  new THREE.TextureLoader().load(
    imagePath,
    (texture) => {
      correctImageColor(texture);
      material.map = texture;
      material.color.set(0xffffff);
      material.needsUpdate = true;

      const imgAspect = texture.image.width / texture.image.height;
      const slideAspect = slideWidth / slideHeight;

      if (imgAspect > slideAspect) {
        mesh.scale.y = slideAspect / imgAspect;
      } else {
        mesh.scale.x = imgAspect / slideAspect;
      }
    },
    undefined,
    (err) => console.warn(`Couldn't load image ${imagePath}`, err)
  );

  scene.add(mesh);
  slides.push(mesh);
};

for (let i = 0; i < slideCount; i++) {
  createSlide(i);
}

slides.forEach((slide) => {
  slide.position.x -= totalWidth / 2;
  slide.userData.targetX = slide.position.x;
  slide.userData.currentX = slide.position.x;
});

const updateCurve = (mesh, worldPositionX, destortionFactor) => {
  const distortionCenter = new THREE.Vector2(0, 0);
  const distortionRadius = 2.0;
  const maxCurvature = settings.maxDistortion * targetDistortionFactor;

  const positionAttribute = mesh.geometry.attributes.position;
  const originalVertices = mesh.userData.originalVertices;

  for (let i = 0; i < positionAttribute.count; i++) {
    const x = originalVertices[i * 3];
    const y = originalVertices[i * 3 + 1];
  }
};
