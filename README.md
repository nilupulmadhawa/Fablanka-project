# Fablanka-project
local test admin user: admin/password
reset migrations:
- delete everything under migrations except __init__.py
- python manage.py makemigrations
- python manage.py migrate

run server:
python manage.py runserver

install requirements:
pip install -r requirements.txt
add modules to requirements.txt: pip freeze > requirements.txt

venv:
python -m venv .venv
venv\Scripts\activate
deactivate

docker
docker build -t fablanka-local .
docker run -p 3000:3000 fablanka-local
docker tag fablanka 953437657370.dkr.ecr.ap-southeast-1.amazonaws.com/fablanka
docker push 953437657370.dkr.ecr.ap-southeast-1.amazonaws.com/fablanka

aws:
login using cli: aws --region ap-southeast-1 ecr get-login-password | docker login --username AWS --password-stdin 953437657370.dkr.ecr.ap-southeast-1.amazonaws.com