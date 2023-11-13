# reponsible for everything like getting numbers from the client to returning number (IN JSON FORMAT) the ano the result

from flask import Blueprint, request, jsonify
from backend.api.services.prelims.calculations import *
from backend.api.services.midterms.matrix import *

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

    print("FUNCTION: " + str(function))
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

    print("FUNCTION: " + str(function))
    print("x: " + str(x))

    result = newton_raphson_method(str(function), int(x))
    return jsonify({"result": result})

@numerical_methods_blueprint.route('/matrix_operation', methods=['POST'])
def matrix_operation():
    data = request.json
    matrix1 = data.get('matrix1')
    matrix2 = data.get('matrix2')
    operation = data.get('operation')

    print(matrix1)

    matrix1_obj = Matrix.from_json(str(matrix1))
    matrix2_obj = Matrix.from_json(str(matrix2))

    result = matrix1_obj.matrix_operation(matrix2_obj, operation)
    return jsonify({"result": result})

    # matrix2_obj = Matrix.from_json(matrix2)
    # print(matrix1_obj)
    # result = newton_raphson_method()
    # return jsonify({"result": result})