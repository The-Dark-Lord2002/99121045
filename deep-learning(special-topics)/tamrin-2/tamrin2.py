import numpy as np
# Generate a vector of random numbers with seed 99121045
np.random.seed(99121045)
random_vector = np.random.randint(0, 21, size=10000)

# Calculate the frequency of each number
counts = np.bincount(random_vector)
 
# Print the frequency of each number
for i, count in enumerate(counts):
    print(f"Number {i}: Frequency = {count}")
