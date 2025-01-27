/*
import { invoke } from "@tauri-apps/api/core";

let greetInputEl: HTMLInputElement | null;
let greetMsgEl: HTMLElement | null;

async function greet() {
  if (greetMsgEl && greetInputEl) {
    // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
    greetMsgEl.textContent = await invoke("greet", {
      name: greetInputEl.value,
    });
  }
}

window.addEventListener("DOMContentLoaded", () => {
  greetInputEl = document.querySelector("#greet-input");
  greetMsgEl = document.querySelector("#greet-msg");
  document.querySelector("#greet-form")?.addEventListener("submit", (e) => {
    e.preventDefault();
    greet();
  });
});
*/


const container = document.body as HTMLElement;

function setCameraTransform(x: number, y: number, zoom: number) {
  container.style.transform = `translate(${x}px, ${y}px) scale(${zoom})`;
}

let X = 0; // Pozycja kamery (X)
let Y = 0; // Pozycja kamery (Y)
let zoom = 1; // Początkowy zoom kamery

let isbuttonDown = {
  w: false,
  a: false,
  s: false,
  d: false,
};

let mouseX = 0; // Pozycja myszy w X
let mouseY = 0; // Pozycja myszy w Y

setInterval(() => {
  setCameraTransform(X, Y, zoom);

  if (isbuttonDown.w) {
    Y += 10;
  }
  if (isbuttonDown.a) {
    X += 10;
  }
  if (isbuttonDown.s) {
    Y -= 10;
  }
  if (isbuttonDown.d) {
    X -= 10;
  }
}, 10);

// Obsługa klawiszy ruchu
document.addEventListener("keydown", (e) => {
  if (e.key == "w") {
    isbuttonDown.w = true;
  }
  if (e.key == "a") {
    isbuttonDown.a = true;
  }
  if (e.key == "s") {
    isbuttonDown.s = true;
  }
  if (e.key == "d") {
    isbuttonDown.d = true;
  }
});

document.addEventListener("keyup", (e) => {
  if (e.key == "w") {
    isbuttonDown.w = false;
  }
  if (e.key == "a") {
    isbuttonDown.a = false;
  }
  if (e.key == "s") {
    isbuttonDown.s = false;
  }
  if (e.key == "d") {
    isbuttonDown.d = false;
  }
});

// Aktualizacja pozycji myszy
document.addEventListener("mousemove", (e) => {
  const rect = container.getBoundingClientRect();
  mouseX = e.clientX - rect.left; // Pozycja myszy względem kontenera
  mouseY = e.clientY - rect.top;
});

// Zoom z przesunięciem kamery
document.addEventListener("wheel", (e) => {
  const oldZoom = zoom;
  if (e.deltaY > 0) {

    if(zoom > 1){
      zoom = Math.max(0.1, zoom - 0.1); // Zapobiega zoomowaniu do 0 lub ujemnych wartości
    }

  } else {

    if(zoom <= 3){
      zoom += 0.1;
    }

  }

  // Oblicz różnicę w zoomie
  const zoomFactor = zoom / oldZoom;

  // Oblicz przesunięcie kamery, aby utrzymać mysz w stałym punkcie
  X -= (mouseX - X) * (zoomFactor - 1);
  Y -= (mouseY - Y) * (zoomFactor - 1);
});


