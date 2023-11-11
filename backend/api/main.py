# THIS WEHERE THE MAIN APPLICATION

from flask import Flask
from .receiver.methods import numerical_methods_blueprint

app = Flask(__name__)

app.register_blueprint(numerical_methods_blueprint)

if __name__ == "__main__":
    app.run(debug=True)
