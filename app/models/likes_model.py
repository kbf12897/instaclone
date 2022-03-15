from app.models.db import db

class Like(db.Model):
    __tablename__ = 'likes'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    post_id = db.Column(db.Integer, db.ForeignKey('posts.id'), nullable=False)


    # one to many with users
    users = db.relationship('User', back_populates='likes')

    # one to many with posts
    posts = db.relationship('Post', back_populates='likes')


    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'post_id': self.post_id,
            'like_owner': self.users.username
        }
