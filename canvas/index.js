const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const getWidth = () => window.innerWidth;
const getHeight = () => window.innerHeight;

const setCanvasDimensions = () => {
  canvas.width = getWidth();
  canvas.height = getHeight();
};

// skalowanie canvas
window.addEventListener('resize', () => {
  setCanvasDimensions();
  paint();
});

const paint = () => {
  ctx.fillStyle = 'blue';
  ctx.fillRect(10, 10, 502, 50);

  ctx.fillStyle = 'red';
  ctx.fillRect(25, 30, 3000, 30);
};
