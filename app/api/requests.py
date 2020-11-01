from flask import jsonify, request, Response
from app import db
from app.models import PetRequest
from app.api import bp

@bp.route('/requests', methods=['GET'])
def get_requests():
    return jsonify(PetRequest.get_all_requests())

@bp.route('/requests/<int:id>', methods=['GET'])
def get_request(id):    
    return jsonify(PetRequest.get_request(id))

@bp.route('/requests', methods=['POST'])
def add_request():
    data = request.get_json()
    PetRequest.add_json(data)
    return Response("", 201, mimetype='application/json')
