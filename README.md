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