from flask import jsonify, request
from app import db
from app.models import Shelter, Animal
from app.api import bp

@bp.route('/shelters', methods=['GET'])
def get_shelters():
    return jsonify({"hey": "idi v pizdu dolbaeb"})

@bp.route('/animals', methods=['GET'])
def get_animals():
    return jsonify(Animal.get_all_animals())

@bp.route('/setShelters', methods=['POST'])
def set_shelters():
    data = request.get_json()
    print(data)
    #Shelter.set_shelters(data)

@bp.route('/addshelter', methods=['POST'])
def add_shelter():
    data = request
    print(data)
    
