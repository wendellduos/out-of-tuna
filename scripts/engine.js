const spriteSize = 64;

// player position state
const YPositions = ["down", "neutral", "up"];
let playerYState = 1;
let isJumping = false;

// keyboard controls
addEventListener("keydown", ({ key }) => {
  const pressedKey = key.toLowerCase();

  if (pressedKey === "w") {
    if (playerYState >= 2) {
      setPlayerPosition(YPositions[2]);
    } else {
      playerYState++;
      setPlayerPosition(YPositions[playerYState]);
    }
  } else if (pressedKey === "s") {
    if (playerYState <= 0) {
      setPlayerPosition(YPositions[0]);
    } else {
      playerYState--;
      setPlayerPosition(YPositions[playerYState]);
    }
  } else if (pressedKey === " ") {
    isJumping = true;
    jump();
  }
});

// position player vertically
function setPlayerPosition(position = "neutral") {
  switch (position) {
    case "up":
      player.style.bottom = `${spriteSize * 2}px`;
      break;
    case "down":
      player.style.bottom = `0px`;
      break;
    case "neutral":
      player.style.bottom = `${spriteSize}px`;
  }
}

// jump motion
function jump() {
  const animationSteps = ["red", "var(--dark-grey)"];
  let timerSteps = [0, 1000];

  let count = 0;
  timerSteps.forEach((time) => {
    setTimeout(() => {
      player.style.backgroundColor = animationSteps[count];
      count++;
    }, time);
  });

  setTimeout(() => {
    isJumping = false;
  }, timerSteps[1]);
}
