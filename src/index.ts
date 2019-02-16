import { StateManager } from "@tmbritton/state-manager";

console.log(StateManager);

(() => {
  //const canvas = document.getElementById('game');
  const canvas = document.createElement('canvas');
  const width = 800;
  const height = 600;
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  document.getElementById('game').appendChild(canvas);

  const render = () => {
    ctx.fillStyle="#EEEEEE"
    ctx.fillRect(0, 0, width, height);
  }

  const loop = () => {
    // Do Stuff Here
    render();
    window.requestAnimationFrame(loop);
  }

  window.requestAnimationFrame(loop);
})(); 