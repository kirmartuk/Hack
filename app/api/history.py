from flask import jsonify, request
from app import db
from app.models import History
from app.api import bp

@bp.route('/history/<int:id>', methods=['GET'])
def get_events_for_animal(id):    
    return jsonify(History.get_events_for(id)))
    

@bp.route('/history', methods=['POST'])
def add_event():
    data = request.get_json()
    History.add(data)
    return Response("", 201, mimetype='application/json')
