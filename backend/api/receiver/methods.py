# reponsible for everything like getting numbers from the client to returning number (IN JSON FORMAT) the ano the result

from flask import Blueprint, request, jsonify
from backend.api.services.prelims.calculations import *
from backend.api.services.midterms.matrix import *

numerical_methods_blueprint = Blueprint('numerical_methods', __name__)


@numerical_methods_blueprint.route('/bisection', methods=['POST'])
def bisection():
    data = request.json
    function = data.get('function')
    lower_bound = float(data.get('lb'))
    upper_bound = float(data.get('ub'))
    error = float(data.get('error'))

    print("FUNCTION: " + str(function))
    print("LOWER BOUND: " + str(lower_bound))
    print("UPPER B: " + str(upper_bound))
    print(error)

    result = bisection_method(str(function), lower_bound, upper_bound, error)

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

    matrix1_obj = Matrix.from_json(str(matrix1))
    matrix2_obj = Matrix.from_json(str(matrix2))

    result = matrix1_obj.matrix_operation(matrix2_obj, operation)
    return jsonify({"result": result})
