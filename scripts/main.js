const floor = document.getElementById("floor");
const player = document.getElementById("player");

// set floor and player sizes based on sprite size
floor.style.height = `${spriteSize * 3}px`;
player.style.width = `${spriteSize}px`;
player.style.height = `${spriteSize}px`;

// player's default position
player.style.bottom = `${spriteSize}px`;
player.style.left = `${spriteSize * 3}px`;
