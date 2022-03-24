# Intaclone React Project

## Live Site
[Instaclone](https://karlfinstaclone.herokuapp.com/) is a pixel-perfect clone of instagram, a website to share photos with friends

## Technologies Used
Javascript | Python | Node.js | Flask | React | Redux | SQLAlchemy | PostgreSQL | AWS

## Getting started

1. Clone this repository (main branch)

   ```bash
   git clone https://github.com/kbf12897/instaclone.git
   ```
   
2. Install backend dependencies

   ```bash 
   pipenv install --dev -r dev-requirements.txt && pipenv install -r requirements.txt
   ```
3. Setup your PostgreSQL user, password and database and make sure it matches your **.env** file
   ```
   psql -c "CREATE USER <username> WITH PASSWORD '<password>' CREATEDB"
   psql -c "CREATE DATABASE <databasename> WITH OWNER '<username>'"
   ```

4. Create a **.env** file based on the example with proper settings for your
   development environment

5. Get into your pipenv, migrate your database, seed your database, and run your flask app

   ```bash
   pipenv shell
   ```

   ```bash
   flask db upgrade
   ```

   ```bash
   flask seed all
   ```

   ```bash
   flask run
   ```

6. Install frontend dependencies in react-app directory
   ```
   cd ./react-app
   npm install
   ```

7. To run the React App in development run ```npm start``` from ```react-app``` directory
   ```
   cd ./react-app
   npm start
   ```
   
#Instaclone overview

## Login page
Existing users can log in to their account to view others posts or log in as a demo user

## Signup page
New users can create an account which will redirect them to the sites main page.

## Home page
The Instaclone main page shows all the posts from other users, you can explore others profile pages as well as your own from here.

If you click on a users username it will bring you to that users page.

To add a comment on a post, enter your comment at the bottom of a posts card, once added you will be able to edit or delete that comment.

To create a new post with s3 upload, click the + icon on the navbar and choose the file you would like to upload, users that create a post will be able to edit the caption of the post, but not the image. A user will also be able to delete their posts.
