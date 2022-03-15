from app.models.db import db
from datetime import datetime

class Comment(db.Model):
    __tablename__ = 'comments'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    post_id = db.Column(db.Integer, db.ForeignKey('posts.id'), nullable=False)
    comment_body = db.Column(db.String(255), nullable=False)
    created_at = db.Column(db.DateTime(), nullable=False, default=datetime.now())
    updated_at = db.Column(db.DateTime(), nullable=True, default=datetime.now())

    # one to many with users
    users = db.relationship('User', back_populates='comments')

    # one to many with posts
    posts = db.relationship('Post', back_populates='comments')

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'post_id': self.post_id,
            'comment_body': self.comment_body,
            'created_at': self.created_at,
            'updated_at': self.updated_at,
            'comment_owner': self.users.username
        }
