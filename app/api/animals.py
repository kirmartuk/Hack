from flask import jsonify, request
from app import db
from app.models import Animal
from app.api import bp

@bp.route('/animals', methods=['GET'])
def get_animals():
    return jsonify(Animal.get_all())

@bp.route('/animals/<int:id>', methods=['GET'])
def get_animal(id):
    return jsonify(Animal.get_by_id(id))

@bp.route('/animals', methods=['POST'])
def add_animal():
    data = request.get_json()
    Animal.add_json(data)
    return Response("", 201, mimetype='application/json')
    
@bp.route('/animals', methods=['PUT'])
def update_animal():
    data = request.get_json()
    Animal.update_json(data)
    return Response("", 201, mimetype='application/json')
