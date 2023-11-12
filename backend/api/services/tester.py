from calculations import *
from calculations_helper import *

print("Hellow worl :P")
print("test methods")

bisection_method("x**2 - 4", a=-2, b=2)

x = symbols('x')
func = x**3 - 2*x - 5
print('DERIVATIVE OF: '+str(func)+' IS: '+str(get_derivative(func)))

steps = newton_raphson_method(x**2 - 4, 1)
for i in steps:
    print(i)