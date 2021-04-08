from flask import Flask, jsonify, render_template
from flask_restful import Resource, Api
from flask_cors import CORS, cross_origin


app = Flask(__name__, static_folder='build/static', template_folder="build")

@app.route('/')
@cross_origin()
def index():
    return render_template('index.html')
  

if __name__ == '__main__':
    app.run(debug=True)