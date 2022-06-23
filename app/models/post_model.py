from app.models.db import db
from datetime import datetime
from .user import User

class Post(db.Model):
    __tablename__ = 'posts'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    img_url = db.Column(db.String(1000), nullable=False)
    caption = db.Column(db.String(255), nullable=True)
    created_at = db.Column(db.DateTime(), nullable=False, default=datetime.now())
    updated_at = db.Column(db.DateTime(), nullable=True, default=datetime.now())


    # one to many with users, comments, likes
    users = db.relationship('User', back_populates='posts')
    comments = db.relationship('Comment', back_populates='posts', cascade='all, delete')


    @staticmethod
    def get_posts_by_following(current_user_id):
        current_user = User.query.get(current_user_id)
        following = current_user.following
        following_ids = [user.id for user in following]
        posts = Post.query.filter(Post.user_id.in_(following_ids)).all()

        return [post.to_dict() for post in posts]


    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'img_url': self.img_url,
            'caption': self.caption,
            'created_at': self.created_at,
            'updated_at': self.updated_at,
            'post_owner': self.users.username,
            'post_owner_profile_img': self.users.profile_img,
            # 'comments': self.comments,
            'comment_count': len(self.comments),
        }
