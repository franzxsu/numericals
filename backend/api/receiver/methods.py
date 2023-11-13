# reponsible for everything like getting numbers from the client to returning number (IN JSON FORMAT) the ano the result

from flask import Blueprint, request, jsonify
from backend.api.services.prelims.calculations import perform_calculation, bisection_method, linear_interpolation, newton_raphson_method

numerical_methods_blueprint = Blueprint('numerical_methods', __name__)

@numerical_methods_blueprint.route('/compute', methods=['POST'])
def compute():
    data = request.json
    print(data)
    numbers = data.get('numbers')
    method = data.get('method')

    result = perform_calculation(numbers, method)
    return jsonify({"result": result})

@numerical_methods_blueprint.route('/bisection', methods=['POST'])
def bisection():
    data = request.json
    function = data.get('function')
    lower_bound = data.get('lb')
    upper_bound = data.get('ub')

    print("FUNCTION: "+str(function))
    print("LOWER BOUND: " + str(lower_bound))
    print("UPPER B: " + str(upper_bound))

    result = bisection_method(str(function), int(lower_bound), int(upper_bound))

    # result = perform_calculation(numbers, method)
    return jsonify({"result": result})

@numerical_methods_blueprint.route('/newtonraphson', methods=['POST'])
def newtonraphson():
    data = request.json
    function = data.get('function')
    x = data.get('x')

    print("FUNCTION: "+str(function))
    print("x: " + str(x))

    result = newton_raphson_method(str(function), int(x))

    return jsonify({"result": result})