from app.models.db import db
from datetime import datetime

class Post(db.Model):
    __tablename__ = 'posts'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    img_url = db.Column(db.String(255), nullable=False)
    caption = db.Column(db.String(255), nullable=True)
    created_at = db.Column(db.Datetime(), nullable=False, default=datetime.now())
    updated_at = db.Column(db.Datetime(), nullable=True, default=datetime.now())


    # one to many with users, comments
    users = db.relationship('User', back_populates='posts')
    comments = db.relationship('Comment', back_populates='posts', cascade='all, delete')

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'img_url': self.img_url,
            'caption': self.caption,
            'created_at': self.created_at,
            'updated_at': self.updated_at,
            'post_owner': self.users.username
        }
