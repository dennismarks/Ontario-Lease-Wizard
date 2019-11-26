from flask import Flask
from flask_cors import CORS
from lease_wizard.config import config

app = Flask(__name__, static_folder='../client/build')
app.config.from_object(config['development'])
CORS(app)

from lease_wizard.controller import index
