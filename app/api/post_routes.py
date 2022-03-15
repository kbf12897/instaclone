from flask import Blueprint, request
from flask_login import login_required
import psycopg2
from app.models import Post, Comment, User, db
from datetime import datetime

post_routes = Blueprint('posts', __name__)

@post_routes.route('/', methods=['GET'])
@login_required
def get_all_posts():
    all_posts = Post.query.all()

    return {'all_posts': [post.to_dict() for post in all_posts]}
