from flask import jsonify, request
from app import db
from app.models import Shelter
from app.api import bp

@bp.route('/shelters', methods=['GET'])
def get_shelters():
    return jsonify({"hey": "idi v pizdu dolbaeb"})
