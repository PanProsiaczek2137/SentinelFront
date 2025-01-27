createHuman();

function createHuman() {
  let newHuman = document.createElement("div");
  newHuman.className = "human";
  document.body.appendChild(newHuman);

  let newHumanImg = document.createElement("img");
  newHumanImg.src = "src/assets/Sprite-0001.png";
  newHuman.appendChild(newHumanImg);
}