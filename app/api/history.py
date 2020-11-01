from flask import jsonify, request, Response
from app import db
from app.models import History
from app.api import bp

@bp.route('/history/<int:id>', methods=['GET'])
<<<<<<< HEAD
def get_events_for_animal(id):    
    return jsonify(History.get_events_for(id))
    
=======
def get_events_for_animal(id):
    try:
        return jsonify(History.get_events_for(id))
    except:
        e = {}
        return jsonify(e)
>>>>>>> 9850d7b634770d5f2a5a5323313b0f3713a34069

@bp.route('/history', methods=['POST'])
def add_event():
    data = request.get_json()
    History.add(data)
    return Response("", 201, mimetype='application/json')
