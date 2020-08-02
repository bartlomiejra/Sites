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
  const rectSize = getWidth() / 25;
  let xPos = 0;
  let yPos = 0;
  
  for(let i = 0; i <= 50; i++){
    for(let j = 0; j <= 10; j++){

    const r = Math.abs(Math.sin(Date.now() * i / 50)) * 200;
    const g = Math.abs(Math.sin(Date.now() * i / 200)) * 200;
    const b = Math.abs(Math.sin(Date.now() * j / 100)) * 200;

  ctx.fillStyle = 'pink';
  // ctx.fillRect(xPos, 250, 500, 50);
  ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
  // ctx.fillRect(xPos, 100, 50, 1000);
  ctx.fillRect(xPos, yPos, rectSize, rectSize);
  xPos += rectSize;
  }
xPos = 0;
yPos += rectSize;

}
};
setCanvasDimensions();
  paint();