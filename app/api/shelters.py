from flask import jsonify, request
from app import db
from app.models import Shelter
from app.api import bp

@bp.route('/shelters', methods=['GET'])
def get_shelters():
    return jsonify(Shelter.get_all_shelters())

@bp.route('/setShelters', methods=['POST'])
def set_shelters():
    data = request.get_json()
    Shelter.set_shelters(data)
    return Response("", 201, mimetype='application/json')
