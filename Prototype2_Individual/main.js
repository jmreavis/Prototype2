title = "ZEN";

description = `
[Hold] Breathe in
[Release] Breathe out
`;

characters = [];

options = {
  viewSize: { x: 200, y: 100 },
  isPlayingBgm: true,
  isReplayEnabled: true,
  seed: 5,
};

/**
 * @type {{
 * pos: Vector, radius: number,
 * type: "normal" | "player" | "cube"
 * }[]}
 */
let circles;
let playerCircle;
let expanding;
let expansionRate;
let shrinkRate;

function update() {
  if (!ticks) {
    circles = [];
    playerCircle = { pos: vec(100, 50), radius: 10, type: "player" };
    expanding = false;
    expansionRate = 0.5;
    shrinkRate = 0.5;
  }

  // Handle mouse input
  if (input.isPressed) {
    expanding = true;
  } else {
    expanding = false;
  }

  // Expand or shrink the player circle based on mouse input
  if (expanding && playerCircle.radius < 50) {
    playerCircle.radius += expansionRate;
    text("Inhale", 10, 10);
  } else if (!expanding && playerCircle.radius > 10) {
    playerCircle.radius -= shrinkRate;
    text("Exhale", 10, 10);
  } else if (playerCircle.radius == 50) {
    text("Great job!", 10, 10);
    score += 1;
  }

  // Draw the player circle
  color("red");
  // @ts-ignore
  const pp = playerCircle.pos;
  arc(pp, playerCircle.radius);

  // Update and draw score
  color("black");
}
