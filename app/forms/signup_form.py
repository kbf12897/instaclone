from ast import Pass
from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField
from wtforms.validators import DataRequired, ValidationError
from app.models import User
import re

def user_exists(form, field):
    # Checking if user exists
    email = field.data
    user = User.query.filter(User.email == email).first()
    if user:
        raise ValidationError('Email address is already in use.')


def username_exists(form, field):
    # Checking if username is already in use
    username = field.data
    user = User.query.filter(User.username == username).first()
    if user:
        raise ValidationError('Username is already in use.')

def valid_email(form, field):
    regex = re.compile('^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$')
    email = field.data
    if not regex.match(email):
        raise ValidationError('Please provide a valid email.')

def username_max_length(form, field):
    username = field.data
    if len(username) > 30:
        raise ValidationError('Username must be 30 characters or less.')

def email_max_length(form, field):
    email = field.data
    if len(email) > 50:
        raise ValidationError('Email must be 50 characters or less.')

class SignUpForm(FlaskForm):
    username = StringField(
        'username', validators=[DataRequired(), username_exists, username_max_length])
    email = StringField('email', validators=[DataRequired(), user_exists, valid_email, email_max_length])
    password = PasswordField('password', validators=[DataRequired()])
