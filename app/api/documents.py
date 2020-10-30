import os
from app.api import bp
from flask import Flask, request, abort, jsonify
from flask import send_from_directory, render_template
from app import app
from flasgger import Swagger

UPLOAD_DIRECTORY = os.getcwd() + "/src/"

if not os.path.exists(UPLOAD_DIRECTORY):
    os.makedirs(UPLOAD_DIRECTORY)
    
swagger = Swagger(app)


@bp.route("/files")
def list_files():
    """list files on the server
    ---
    responses:
        '200':
          description: return all files in directory
        """
    files = []
    for filename in os.listdir(UPLOAD_DIRECTORY):
        path = os.path.join(UPLOAD_DIRECTORY, filename)
        if os.path.isfile(path):
            files.append(filename)
    return jsonify(files)


@bp.route("/files/<path:path>")
def get_file(path):
    """Download a file.
    ---
    parameters:
         - in: path
           name: filename
           type: string
           required: true
    responses:
        '200':
          description: file downloaded
        """
    return send_from_directory(UPLOAD_DIRECTORY, path, as_attachment=True)


@bp.route("/files/<filename>", methods=["POST"])
def post_file(filename):
    """Upload a file
     ---
    parameters:
         - in: path
           name: filename
           type: string
           required: true
    responses:
         200:
           description: return file
        """

    if "/" in filename:
        # Return 400 BAD REQUEST
        abort(400, "no subdirectories allowed")

    with open(os.path.join(UPLOAD_DIRECTORY, filename), "wb") as fp:
        fp.write(request.data)

    # Return 201 CREATED
    return "", 201
