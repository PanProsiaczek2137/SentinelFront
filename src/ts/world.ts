const worldCanvas = document.getElementById("world") as HTMLCanvasElement;
const worldCtx = worldCanvas.getContext("2d");

const img = new Image();
img.src = "/src/assets/tiles/grass.png";  // Ścieżka do obrazka

function drawRect() {
    if (worldCtx) {
        worldCtx.clearRect(0, 0, worldCanvas.width, worldCanvas.height);
        //worldCtx.drawImage(img, 0, 0, 20, 20); // Rysowanie obrazu w (10, 10) o wymiarach 100x100

        for(let i = 0; i < 100; i++) {
            for(let j = 0; j < 100; j++) {
                worldCtx.drawImage(img, i * 20, j * 20, 20, 20);
            }
        }
    }
}

worldCanvas.width = window.innerWidth;
worldCanvas.height = window.innerHeight;

drawRect();

window.addEventListener('resize', () => {
    worldCanvas.width = window.innerWidth;
    worldCanvas.height = window.innerHeight;
    drawRect();
});



/*
let world = [ 
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];
*/