# reponsible for everything like getting numbers from the client to returning number (IN JSON FORMAT) the ano the result

from flask import Blueprint, request, jsonify
from ..services.calculations import perform_calculation

numerical_methods_blueprint = Blueprint('numerical_methods', __name__)

@numerical_methods_blueprint.route('/compute', methods=['POST'])
def compute():
    data = request.json
    print(data)
    numbers = data.get('numbers')
    method = data.get('method')

    result = perform_calculation(numbers, method)
    return jsonify({"result": result})
