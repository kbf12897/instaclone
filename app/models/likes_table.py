from app.models.db import db

likes = db.Table(
    'likes',
    db.Column('liked_post', db.Integer, db.ForeignKey('posts.id')),
    db.Column('like_owner', db.Integer, db.ForeignKey('users.id'))
)
