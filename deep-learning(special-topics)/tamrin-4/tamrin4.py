import numpy as np
from sklearn.metrics import f1_score


np.random.seed(42)  


n_samples = 35


y_true = np.random.choice([0, 1], size=n_samples, p=[0.8, 0.2])  # فرض می‌کنیم 20% از دانشجویان افتاده‌اند

y_pred_random = np.random.choice([0, 1], size=n_samples)


y_pred_always_pass = np.zeros(n_samples)

f1_random = f1_score(y_true, y_pred_random, pos_label=1)
f1_always_pass = f1_score(y_true, y_pred_always_pass, pos_label=1)

print(f"F1 Score For random prediction: {f1_random:.4f}")
print(f"F1 Score Always acceptable for the model: {f1_always_pass:.4f}")