import numpy as np
import matplotlib.pyplot as plt

# Create a vector of points x from 0 to 2π
x = np.linspace(0, 2 * np.pi, 1000)

# Calculate the sine and cosine functions
y_sin = np.sin(x)
y_cos = np.cos(x)

# Plot the graph
plt.plot(x, y_sin, label='sin(x)')
plt.plot(x, y_cos, label='cos(x)')

# Shade the area between the two curves
plt.fill_between(x, y_sin, y_cos, color='gray', alpha=0.5, label='Area between sin(x) and cos(x)')

# Set plot labels and title
plt.xlabel('x')
plt.ylabel('y')
plt.title('Sin(x) and Cos(x) Functions')
plt.legend()

# Display the plot
plt.grid(True)
plt.show()
