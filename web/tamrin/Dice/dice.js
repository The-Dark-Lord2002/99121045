function diceCounter(n) {
  let counts = [0, 0, 0, 0, 0, 0]; // Array to hold counts for dice faces 1-6

  for (let i = 0; i <= n; i++) {
    const dice = Math.ceil(Math.random() * 6);
    counts[dice - 1] += 1; // Increment the count for the rolled face
  }

  let sum = counts.reduce((acc, count) => acc + count, 0); // Sum of all counts

  for (let i = 0; i < counts.length; i++) {
    console.log(
      `number ${i + 1}: ${counts[i]} times repeated\nIts probability is ${(
        (counts[i] / sum) *
        100
      ).toFixed(3)}%\n`
    );
  }
}

diceCounter(600000);
