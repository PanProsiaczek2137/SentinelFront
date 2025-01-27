function fillWithTiles(width:number, heigth:number){
    for (let x = 0; x < width; x += 15) {
        for (let y = 0; y < heigth; y += 15) {
            createTile(x, y, "grass.png");
        }
    }
}

fillWithTiles(1600, 1200);
//createTile(0, 0, "grass.png");

function createTile(x:number, y:number, img:string) {
    const newTile = document.createElement("img");
    newTile.src = "src/assets/tiles/" + img;
    newTile.style.position = "absolute";
    newTile.style.left = x + "px";
    newTile.style.top = y + "px";
    document.body.appendChild(newTile);
}


