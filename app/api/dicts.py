from app.api import bp

@bp.route("/dicts")
def getDict():
	"""all dicts
    ---
    responses:
        '200':
          description: return all dicts
        """
	with open('dict.json', 'r') as file:
		data = file.read()
	return data
