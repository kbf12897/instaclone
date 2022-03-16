from flask import Blueprint, request
from flask_login import login_required
import psycopg2
from app.models import Post, db
from app.forms.post_form import PostForm
from datetime import datetime

post_routes = Blueprint('posts', __name__)


# _______________________________________GET ALL POSTS___________________________________________

@post_routes.route('/', methods=['GET'])
@login_required
def get_all_posts():
    all_posts = Post.query.all()

    return {'all_posts': [post.to_dict() for post in all_posts]}


# _______________________________________GET ONE POST___________________________________________

@post_routes.route('/<int:postId>', methods=['GET'])
@login_required
def get_one_post(postId):
    one_post = Post.query.get(postId)

    return { **one_post.to_dict() }


# _______________________________________CREATE NEW POST___________________________________________

@post_routes.route('/new', methods=['POST'])
@login_required
def new_post():
    form = PostForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        new_post = Post(
            user_id = form.data['user_id'],
            img_url = form.data['img_url'],
            caption = form.data['caption'],
            created_at = datetime.now(),
            updated_at = datetime.now()
        )

        db.session.add(new_post)
        db.session.commit()

        return { 'post': new_post.to_dict() }


    return form.errors


# _______________________________________EDIT POST___________________________________________

@post_routes.route('/<int:postId>', methods=['PUT'])
@login_required
def edit_post(postId):
    form = PostForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        post = Post.query.get(postId)
        post.user_id = form.data['user_id']
        post.img_url = form.data['img_url']
        post.caption = form.data['caption']
        post.updated_at = datetime.now()

        db.session.commit()

        return { **post.to_dict() }

    return form.errors


# _______________________________________DELETE POST___________________________________________

@post_routes.route('/<int:postId>', methods=['DELETE'])
@login_required
def delete_post(postId):
    post = Post.query.get(postId)

    db.session.delete(post)
    db.session.commit()

    return { 'id': postId }
