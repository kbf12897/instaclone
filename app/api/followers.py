# from flask import Blueprint, request
# from flask_login import login_required
# from app.models import follows_table
# from app.forms.follow_form import EmptyForm
# from app.models import User

# followers_routes = Blueprint('follows', __name__)

# @followers_routes.route('/follow/<int:userId>', methods=['POST'])
# def follow(userId):
#     form = EmptyForm()
#     form['csrf_token'].data = request.cookies['csrf_token']

#     if form.validate_on_submit():
