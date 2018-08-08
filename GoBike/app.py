import os
from flask import (
    Flask,
    render_template,
    jsonify,
    request,
    redirect)

app = Flask(__name__)

from flask_sqlalchemy import SQLAlchemy
app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URL', '') or "sqlite:///db.sqlite"
# app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URL', '')
db = SQLAlchemy(app)


# from .models import GoBike

# @app.before_first_request
# def setup():
#     # Recreate database each time for demo
#     # db.drop_all()
#     db.create_all()

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/process")
def process():
    return render_template("process.html")

@app.route("/data")
def data():
    return render_template("process.html")

@app.route("/parallel")
def parallel():
    return render_template("parallel.html")

@app.route("/chords")
def chords():
    return render_template("chords.html")

@app.route("/tableau")
def tableau():
    return render_template("tableau.html")

@app.route("/sklearn")
def sklearn():
    return render_template("tableau.html")

@app.route("/NeuralNetwork")
def NeuralNetwork():
    return render_template("neuralnetwork.html")    


# @app.route("/api/gobikes")
# def pals():
#     return jsonify(bike_data)

if __name__ == "__main__":
    app.run()
