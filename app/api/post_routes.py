from flask import Blueprint, request
from flask_login import login_required
import psycopg2
from app.models import Post, db
from app.forms.post_form import PostForm
from datetime import datetime
from app.s3_helpers import (upload_file_to_s3, allowed_file, get_unique_filename)

post_routes = Blueprint('posts', __name__)

def validation_errors_to_error_messages(validation_errors):
  errorMessages = []
  for field in validation_errors:
    for error in validation_errors[field]:
      errorMessages.append(f'{error}')
  return errorMessages

# _______________________________________GET ALL POSTS___________________________________________

@post_routes.route('/', methods=['GET'])
@login_required
def get_all_posts():
    all_posts = Post.query.order_by(Post.user_id).all()

    return {'all_posts': [post.to_dict() for post in all_posts]}


# _______________________________________GET ONE POST___________________________________________

@post_routes.route('/<int:postId>', methods=['GET'])
@login_required
def get_one_post(postId):
    one_post = Post.query.get(postId)

    return { **one_post.to_dict() }


# _______________________________________CREATE NEW POST___________________________________________

@post_routes.route('/new', methods=['POST'])
# @login_required
def new_post():
    form = PostForm()
    form['csrf_token'].data = request.cookies['csrf_token']


    url = 'no data provided'
    if type(form.data['img_url']) is not str:
        image = form.data['img_url']

        if not allowed_file(image.filename):
            return {'errors': 'file type no permitted'}, 400

        image.filename = get_unique_filename(image.filename)
        upload = upload_file_to_s3(image)


        if 'url' not in upload:
            return upload, 400
        url = upload['url']


    if form.validate_on_submit():
        new_post = Post(
            user_id = form.data['user_id'],
            img_url = url,
            caption = form.data['caption'],
            created_at = datetime.now(),
            updated_at = datetime.now()
        )

        db.session.add(new_post)
        db.session.commit()

        return {**new_post.to_dict()}


    return {'errors': validation_errors_to_error_messages(form.errors)}


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

    return {'errors': validation_errors_to_error_messages(form.errors)}


# _______________________________________DELETE POST___________________________________________

@post_routes.route('/<int:postId>', methods=['DELETE'])
@login_required
def delete_post(postId):
    post = Post.query.get(postId)

    db.session.delete(post)
    db.session.commit()

    return { 'id': postId }
