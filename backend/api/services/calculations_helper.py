from sympy import symbols, diff, lambdify

def get_sum(numbers):
    return sum(numbers)

# get the error percentage by getting difference between two x values in each iteration
def get_error(x1, x2):
    return abs(x2 - x1)

# returns the derivative (ONLY WORKS FOR 1 VARIABLE)
def get_derivative(func):
    x = symbols('x')
    derivative = diff(func, x)
    return derivative