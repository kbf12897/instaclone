from flask_wtf import FlaskForm
from sqlalchemy import Integer
from wtforms import StringField, IntegerField, SubmitField
from wtforms.validators import DataRequired, ValidationError

def comment_body_length(form, field):
    comment_body = field.data
    if len(comment_body) > 255:
        raise ValidationError('Comment must be 255 characters or less.')

class CommentForm(FlaskForm):
    user_id = IntegerField('user_id')
    post_id = IntegerField('post_id')
    comment_body = StringField('comment_body', validators=[DataRequired(), comment_body_length])

    submit = SubmitField('submit')
