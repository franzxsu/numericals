# here are the actual fuckin methods
from flask import jsonify

# https://towardsdatascience.com/root-finding-methods-from-scratch-in-python-84040c81a8ba?gi=22cd7608efb5
# https://www.stratascratch.com/blog/8-python-libraries-for-math-data-analysis-ml-and-dl/#:~:text=These%20libraries%20include%20NumPy%2C%20SciPy,to%20build%20and%20train%20models.
from ..calculations_helper import *


# FUNCTION BLUEPRINT


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
def bisection_method(func_str, x0, x1, tol=1e-5, max_iter=50):
    steps = []
    func = lambda x: eval(func_str)

    step = 1
    condition = True
    while condition and step <= max_iter:
        x2 = (x0 + x1) / 2
        steps.append({
            'iteration': step,
            'a': round(x2, 5),
            'b': round(x1, 5),
            'mid': round(x0, 5),
            'funcmid': round(func(x0), 4),
            'error': round(abs(func(x2)), 5)
        })

        if func(x0) * func(x2) < 0:
            x1 = x2
        else:
            x0 = x2

        step += 1
        condition = abs(func(x2)) > tol

    if step > max_iter:
        print("Max iterations reached. No root found.")
        return {
            'STATUS': 'ERROR',
            'RESULT': 'MAX ITERATIONS REACHED, NO ROOT FOUND'
        }

    print('\nRequired Root is : %0.8f' % x2)
    return {
        'STATUS': 'SUCCESS',
        'RESULT': steps
    }


def newton_raphson_method(func, x0, tol=1e-5, max_iter=50):
    steps = []
    x_val = x0
    deriv = get_derivative(func)
    error = 0
    x = symbols('x')
    func = eval(func)

    step = 1
    print('\n\n*** NEWTON-RAPHSON METHOD IMPLEMENTATION ***')
    condition = True
    while condition and step <= max_iter:
        f_x = func.subs('x', x_val)
        f_prime_x = deriv.subs('x', x_val)

        x_new = x_val - f_x / f_prime_x
        steps.append({
            'iteration': step,
            'x': round(eval(str(x_val)), 4),
            'funcOfX': round(eval(str(f_x)), 4),
            'funcPrimeOfX': round(eval(str(f_prime_x)), 4),
            'error': round(eval(str(error)), 4)
        })

        error = get_error(x_new, x_val)
        if error < tol:
            break

        x_val = x_new
        step += 1
        condition = error > tol

    if step > max_iter:
        print("Max iterations reached. No convergence.")
        return {
            'STATUS': 'ERROR',
            'RESULT': 'MAX ITERATIONS REACHED, NO CONVERGENCE'
        }

    print('\nRequired Root is: %0.8f' % x_val)
    return {
        'STATUS': 'SUCCESS',
        'RESULT': steps
    }


def linear_interpolation(x_values, y_values, x):
    steps = []
    for i in range(len(x_values) - 1):
        if x_values[i] <= x <= x_values[i + 1]:
            y = (y_values[i + 1] - y_values[i]) / (x_values[i + 1] - x_values[i]) * (x - x_values[i]) + y_values[i]
            steps.append({'segment': i, 'x': x, 'interpolated y': y})
            break

    return steps
