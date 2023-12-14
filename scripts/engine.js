const spriteSize = 64;

let yPositions = [`0px`, `${spriteSize}px`, `${spriteSize * 2}px`];
let yState = 1;
let isJumping = false;

const actions = {
  up: () => {
    let canMove = yState >= yPositions.length - 1 ? false : true;
    if (canMove) {
      yState++;
      player.style.bottom = yPositions[yState];
    }
  },
  down: () => {
    let canMove = yState <= 0 ? false : true;
    if (canMove) {
      yState--;
      player.style.bottom = yPositions[yState];
    }
  },
  jump: () => {
    isJumping = true;

    // animation handler
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
    }, timerSteps[timerSteps.length - 1]);
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
  }
});
