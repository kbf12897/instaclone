from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, SubmitField
from wtforms.validators import DataRequired, ValidationError


def caption_max_length(form, field):
    caption = field.data
    if len(caption) > 255:
        raise ValidationError('Caption must be 255 characters or less.')


class PostForm(FlaskForm):
    user_id = IntegerField('user_id')
    img_url = StringField('img_url', validators=[DataRequired()])
    caption = StringField('caption', validators=[caption_max_length])

    submit = SubmitField('submit')
