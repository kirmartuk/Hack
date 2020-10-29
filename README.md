# Hack
https://moscow-hackaton.herokuapp.com/
# 1- Activate virtual env
	source env/bin/activate
# 2 - Run server.py
	python3 server.py
# 3 http://localhost:5000/
***
## Endpoints
    GET: '/files' - return all files in server
    POST: '/files/<file_name>' - updload file to server
    GET: '/files/<file_name>' - download file from server
