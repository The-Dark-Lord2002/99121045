function simulatePrisoners(prisoners) {
  // Create an array to store prisoner numbers (placement unknown)
  const drawers = Array(prisoners)
    .fill(null)
    .map((_, index) => index + 1);

  // Shuffle the drawer placements randomly
  for (let i = prisoners - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [drawers[i], drawers[j]] = [drawers[j], drawers[i]];
  }

  let allFound = true;

  // Simulate each prisoner's check
  for (let i = 0; i < prisoners; i++) {
    let found = false;
    const prisonerNumber = i + 1;

    // Prisoner 1 checks every other drawer
    for (let j = 0; j < prisoners; j += 2) {
      if (drawers[j] === prisonerNumber) {
        found = true;
        break;
      }
    }

    // Subsequent prisoners check mirrored drawers if not found
    if (!found) {
      for (let j = 1; j < i + 1; j++) {
        const mirroredIndex = prisoners - j;
        if (drawers[mirroredIndex] === drawers[i - j]) {
          found = true;
          break;
        }
      }
    }

    allFound = allFound && found;
  }

  return allFound;
}

// Run the simulation multiple times and calculate success rate
const numSimulations = 1000;
let successes = 0;

for (let i = 0; i < numSimulations; i++) {
  if (simulatePrisoners(100)) {
    successes++;
  }
}

const successRate = (successes / numSimulations) * 100;

console.log(
  `Success rate after ${numSimulations} simulations: ${successRate.toFixed(2)}%`
);
