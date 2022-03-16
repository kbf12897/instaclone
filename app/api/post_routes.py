from flask import Blueprint, request
from flask_login import login_required
import psycopg2
from app.models import Post, Comment, User, db
from app.forms.post_form import PostForm
from datetime import datetime

post_routes = Blueprint('posts', __name__)


# GET ALL
@post_routes.route('/', methods=['GET'])
@login_required
def get_all_posts():
    all_posts = Post.query.all()

    return {'all_posts': [post.to_dict() for post in all_posts]}


# POST NEW
@post_routes.route('/new', methods=['POST'])
@login_required
def new_post():
    form = PostForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        new_post = Post(
            user_id = form.data['user_id'],
            img_url = form.data['img_url'],
            caption = form.data['caption']
        )

        db.session.add(new_post)
        db.session.commit()

        return {'post': new_post.to_dict()}

    if form.errors:
        return form.errors
