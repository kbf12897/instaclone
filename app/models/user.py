from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from .follows_table import follows
from .post_model import Post

class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    profile_img = db.Column(db.String(255), nullable=True)
    hashed_password = db.Column(db.String(255), nullable=False)

    # many to many users to users
    followers = db.relationship(
        "User",
        secondary=follows,
        primaryjoin=(follows.c.follower_id == id),
        secondaryjoin=(follows.c.followed_id == id),
        backref=db.backref('following', lazy='dynamic'),
        lazy='dynamic'
    )

    # one to many with posts, comments, likes
    posts = db.relationship('Post', back_populates='users')
    comments = db.relationship('Comment', back_populates='users')


    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def is_following(self, user):
        return self.followers.filter(follows.c.followed_id == user.id).count() > 0

    def follow(self, user):
        if not self.is_following(user):
            self.followers.append(user)

    def unfollow(self, user):
        if self.is_following(user):
            self.followers.remove(user)

    def followed_posts(self):
        followed = Post.query.join(
            follows, (follows.c.followed_id == Post.user_id)).filter(
                follows.c.follower_id == self.id)

        own = Post.query.filter_by(user_id=self.id)
        return followed.union(own).order_by(Post.created_at.desc())


    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'profile_img': self.profile_img,
            'email': self.email,
        }
