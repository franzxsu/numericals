from backend.api.services.prelims.calculations import *
from calculations_helper import *
from backend.api.services.midterms.matrix import *

print("Hellow worl :P")
print("test methods")

bisection_method("x**2 - 4", a=-2, b=2)

x = symbols('x')
func = x ** 3 - 2 * x - 5
print('DERIVATIVE OF: ' + str(func) + ' IS: ' + str(get_derivative(func)))

steps = newton_raphson_method(x ** 2 - 4, 1)
for i in steps:
    print(i)

a = linear_interpolation([0, 1, 2], [0, 3, 2], 1.5)
for q in a:
    print(a)

# ROWS AND COLS ARE 0 BASED PARANG ARRAY
matrix = Matrix(2, 2)
print("BEFORE INTERCHANGE: ")
print(matrix)

print("AFTER INTERCHANGE: ")
matrix.row_interchange(0,1)
print(matrix)

print("THIS IS MATRIX NOW:")
print(matrix)
matrix.scalar_multiplication("2r1", 1)
print("B")
print(matrix)
matrix.scalar_multiplication("1r2", 0)
print(matrix)
