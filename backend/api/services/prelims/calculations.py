# here are the actual fuckin methods

# https://towardsdatascience.com/root-finding-methods-from-scratch-in-python-84040c81a8ba?gi=22cd7608efb5
# https://www.stratascratch.com/blog/8-python-libraries-for-math-data-analysis-ml-and-dl/#:~:text=These%20libraries%20include%20NumPy%2C%20SciPy,to%20build%20and%20train%20models.
from ..calculations_helper import *


def perform_calculation(numbers, method):
    if method == 'sum':
        return sum(numbers)
    elif method == 'average':
        return sum(numbers) / len(numbers)
    else:
        return None


# Find two points, say a and b such that a < b and f(a)* f(b) < 0
# Find the midpoint of a and b, say “t”
# t is the root of the given function if f(t) = 0; else follow the next step
# Divide the interval [a, b] – If f(t)*f(a) <0, there exist a root between t and a
# – else if f(t) *f (b) < 0, there exist a root between t and b
# Repeat above three steps until f(t) = 0.

def bisection_method(func_str, a, b, tol=1e-5, max_iter=50):
    steps = []
    func = lambda x: eval(func_str)
    err = 0
    for i in range(max_iter):
        mid = (a + b) / 2
        steps.append({'iteration': i, 'a': str(a), 'b': str(b), 'mid': mid, 'funcmid': func(mid), 'error': err})

        if func(mid) * func(a) < 0:
            b = mid
        else:
            a = mid

        err = abs(b - a)
        if err < tol:
            break

    for a in steps:
        print(a)
    return steps


def newton_raphson_method(func, x0, tol=1e-5, max_iter=100):
    steps = []
    x_val = x0
    deriv = get_derivative(func)
    error = 0
    x = symbols('x')
    func = eval(func)
    for i in range(max_iter):
        f_x = func.subs('x', x_val)
        f_prime_x = deriv.subs('x', x_val)

        x_new = x_val - f_x / f_prime_x
        steps.append({'iteration': str(i), 'x': str(x_val), 'funcOfX': str(f_x), 'funcPrimeOfX': str(f_prime_x), 'error': eval(str(error))})

        error = get_error(x_new, x_val)
        if error < tol:
            break

        x_val = x_new
    return steps


def linear_interpolation(x_values, y_values, x):
    steps = []
    for i in range(len(x_values) - 1):
        if x_values[i] <= x <= x_values[i + 1]:
            y = (y_values[i + 1] - y_values[i]) / (x_values[i + 1] - x_values[i]) * (x - x_values[i]) + y_values[i]
            steps.append({'segment': i, 'x': x, 'interpolated y': y})
            break

    return steps
