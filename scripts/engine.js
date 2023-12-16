const spriteSize = 64;

/* PLAYER */

let playerX = spriteSize * 3;
let playerY = spriteSize * 6;
let isJumping = false;

const actions = {
  up: () => {
    let canMove = playerY <= spriteSize * 4 ? false : true;

    if (canMove) {
      clearPlayer(playerX, playerY, spriteSize, spriteSize);
      playerY -= spriteSize;
      drawPlayer(playerX, playerY, spriteSize, spriteSize);
    }
  },
  down: () => {
    let canMove = playerY >= spriteSize * 7 ? false : true;

    if (canMove) {
      clearPlayer(playerX, playerY, spriteSize, spriteSize);
      playerY += spriteSize;
      drawPlayer(playerX, playerY, spriteSize, spriteSize);
    }
  },
  jump: () => {
    isJumping = true;

    const jumpLength = 1000;

    setTimeout(() => {
      isJumping = false;
    }, jumpLength);
  },
};

// keyboard controls
addEventListener("keydown", ({ key }) => {
  const input = key.toLowerCase();

  switch (input) {
    case "w":
      actions.up();
      break;
    case "s":
      actions.down();
      break;
    case " ":
      actions.jump();
      // change this
      break;
    case "p":
      shatterHeart(hearts[playerHealth]);
  }
});

function drawPlayer(x, y, w, h) {
  ctx.fillStyle = "#2b2c31";
  ctx.fillRect(x, y, w, h);
}

function clearPlayer(x, y, w, h) {
  ctx.clearRect(x, y, w, h);
}

function shatterHeart(e) {
  e.className = "heart shatter";
  playerHealth--;
  checkGameOver();
}

function checkGameOver() {
  if (playerHealth === -1) alert("Game Over!");
  // put start over trigger
}
