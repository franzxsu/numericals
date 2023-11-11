# THIS WEHERE THE MAIN APPLICATION

from flask import Flask, request
from flask_cors import CORS
from backend.api.receiver.methods import numerical_methods_blueprint

app = Flask(__name__)
CORS(app)

app.register_blueprint(numerical_methods_blueprint)
#app.logger.info(f"Received request: {request.json}")

if __name__ == "__main__":
    app.run(debug=True, port=5000)
