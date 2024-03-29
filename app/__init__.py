from flask import Flask, request, render_template, send_from_directory
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate, current_app
from .config import Config
from flasgger import Swagger
import os
app = Flask(__name__, static_url_path='/static')
#static_folder = '/static',template_folder = '/template',static_url_path='/template'
app.config.from_object(Config)
db = SQLAlchemy(app)
migrate = Migrate(app, db)


from app.api import bp as api_bp
app.register_blueprint(api_bp, url_prefix='/api')

@app.route('/', methods=['GET'])
def main():
	print(os.getcwd())
	#return app.send_static_file("index.html")
	return current_app.send_static_file('index.html')
	
@app.route('/portal', methods=['GET'])
def portal():
	print(os.getcwd())
	#return app.send_static_file("index.html")
	return current_app.send_static_file('portal.html')
		


@app.route('/js/<path:path>')
def send_js(path):
	return current_app.send_static_file('portal/'+path)
	
@app.route('/css/<path:path>')
def send_css(path):

    return current_app.send_static_file('portal/'+path)
    
@app.route('/index_files/<path:path>')
def send_bootstrap(path):

    return current_app.send_static_file('portal/'+path)

@app.route('/fonts/<path:path>')
def send_fonts(path):

    return current_app.send_static_file('portal/'+path)
    
@app.route('/photos/<path:path>')
def send_photos(path):
    return current_app.send_static_file('photos/'+path)
    


from app import models
