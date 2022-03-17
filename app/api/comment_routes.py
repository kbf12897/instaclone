from flask import Blueprint, render_template, redirect, request
from flask_login import login_required
from app.forms.comment_form import CommentForm
from app.models import Comment, db

comment_routes = Blueprint('comments', __name__)


#——————————————————————————————————GET POST COMMENTS————————————————————————————————————————————————

@comment_routes.route('/<int:postId>', methods=['GET'])
@login_required
def get_comments(postId):
    all_comments = Comment.query.filter(Comment.post_id == int(postId)).all()

    return {'post_comments': [comment.to_dict() for comment in all_comments]}


#——————————————————————————————————NEW COMMENT————————————————————————————————————————————————

@comment_routes.route('/new', methods=['POST'])
@login_required
def new_comment():
    form = CommentForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        new_comment = Comment(
            user_id = form.data['user_id'],
            post_id = form.data['post_id'],
            comment_body = form.data['comment_body']
        )

        db.session.add(new_comment)
        db.session.commit()

        return { **new_comment.to_dict() }


#——————————————————————————————————UPDATE COMMENT————————————————————————————————————————————————

@comment_routes.route('/<int:postId>', methods=['PUT'])
@login_required
def update_comment(postId):
    form = CommentForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        comment = Comment.query.get(postId)
        comment.user_id = form.data['user_id']
        comment.post_id = form.data['post_id']
        comment.comment_body = form.data['comment_body']

        db.session.commit()
        return { **comment.to_dict() }

    return form.errors


#——————————————————————————————————UPDATE COMMENT————————————————————————————————————————————————

@comment_routes.route('/<int:commentId>', methods=['DELETE'])
@login_required
def delete_comment(commentId):
    comment = Comment.query.get(commentId)
    db.session.delete(comment)
    db.session.commit()

    return { 'id': commentId }
