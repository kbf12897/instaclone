from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, SubmitField
from wtforms.validators import DataRequired, ValidationError


def caption_max_length(form, field):
    caption = field.data
    if len(caption) > 255:
        raise ValidationError('Caption must be 255 characters or less.')

def no_image(form, field):
    img_url = field.data
    if len(img_url) < 1:
        raise ValidationError('Please provide an image.')


class PostForm(FlaskForm):
    user_id = IntegerField('user_id')
    img_url = StringField('img_url', validators=[DataRequired()])
    caption = StringField('caption', validators=[caption_max_length])

    submit = SubmitField('submit')
