from flask_wtf import FlaskForm
from sqlalchemy import Integer
from wtforms import StringField, IntegerField, SubmitField
from wtforms.validators import DataRequired

class CommentForm(FlaskForm):
    user_id = IntegerField('user_id')
    post_id = IntegerField('post_id')
    commentBody = StringField('commentBody', validators=[DataRequired()])

    submit = SubmitField('submit')
