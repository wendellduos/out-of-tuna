const canvas = document.getElementById("canvas");
const cWidth = 1024;
const cHeight = 768;
canvas.width = cWidth;
canvas.height = cHeight;

const ctx = canvas.getContext("2d");

ctx.fillStyle = "#2b2c31";
ctx.fillRect(0, 0, cWidth, cHeight);

ctx.fillStyle = "#e4e3d8";
ctx.fillRect(0, spriteSize * 4, cWidth, spriteSize * 4);

drawPlayer(playerX, playerY, spriteSize, spriteSize);
