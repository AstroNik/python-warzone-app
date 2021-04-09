from flask import Flask, jsonify, render_template, request
from flask_restful import Resource, Api
from flask_cors import CORS, cross_origin
from environs import Env
import requests

env = Env()
env.read_env()

app = Flask(__name__, static_folder='build/static', template_folder="build")

@app.route('/')
@cross_origin()
def index():
    return render_template('index.html')
  

@app.route('/api/playerData', methods=['GET', 'POST'])
@cross_origin()
def playerData():
    data = request.json

    url = "https://call-of-duty-modern-warfare.p.rapidapi.com/warzone/"+str(data['gamerTag'])+"/" + str(data['platform'])

    headers = {
        'x-rapidapi-key': env('RAPID_API_KEY'),
        'x-rapidapi-host': "call-of-duty-modern-warfare.p.rapidapi.com"
    }

    response = requests.request("GET", url, headers=headers)
    
    return response.json()

if __name__ == '__main__':
    app.run(debug=True)