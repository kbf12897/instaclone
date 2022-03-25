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
![Screen Shot 2022-03-25 at 1 24 30 PM](https://user-images.githubusercontent.com/91348857/160171461-cb620874-4a42-4760-a217-143716829910.png)

Existing users can log in to their account to view others posts or log in as a demo user

## Signup page
![Screen Shot 2022-03-25 at 1 24 39 PM](https://user-images.githubusercontent.com/91348857/160171530-f7a31d30-9152-4ef9-a2d2-1320ab6374d5.png)

New users can create an account which will redirect them to the sites main page.

## Home page
![Screen Shot 2022-03-25 at 1 24 51 PM](https://user-images.githubusercontent.com/91348857/160171560-5f168255-d851-498a-827d-dc3c01b2517e.png)

The Instaclone main page shows all the posts from other users, you can explore others profile pages as well as your own from here.

## User Page
![Screen Shot 2022-03-25 at 1 25 23 PM](https://user-images.githubusercontent.com/91348857/160171640-4b0830d5-f3da-45c5-9dc0-15de3667b8d7.png)

If you click on a users username it will bring you to that users page.

## Add Comment
![Screen Shot 2022-03-25 at 1 25 09 PM](https://user-images.githubusercontent.com/91348857/160171705-dc18ce12-b61d-4006-b66e-edf42bb07eff.png)

To add a comment on a post, enter your comment at the bottom of a posts card, once added you will be able to edit or delete that comment.

## Edit / Delete Comment 
![Screen Shot 2022-03-25 at 4 08 29 PM](https://user-images.githubusercontent.com/91348857/160193862-b7be0cfc-f9dc-4e7a-826f-dcd1a12138a1.png)

To edit or delete a comment click on the three dots next to comment that you published.

## New Post 
![Screen Shot 2022-03-25 at 1 30 22 PM](https://user-images.githubusercontent.com/91348857/160172026-658a8c90-9d3c-40a2-909f-b9a78099be90.png)

To create a new post click the plus icon on the navigation bar which will bring up a modal form

## New Post Form
![Screen Shot 2022-03-25 at 1 31 44 PM](https://user-images.githubusercontent.com/91348857/160172081-ae04c060-0a3f-454b-aa1e-5959b5113a60.png)

To create a new post with s3 upload, choose the file you would like to upload, users that create a post will be able to edit the caption of the post, but not the image. A user will also be able to delete their posts.

## Delete Post
![Screen Shot 2022-03-25 at 4 09 30 PM](https://user-images.githubusercontent.com/91348857/160194040-cdd03860-8d6c-40f0-9354-902eecc847a5.png)

To delete a post you created click on the three dots at the top of the post, this will open a modal giving you the options to delete or cancel. These three dots will only appear on posts you own.

## Edit caption of post
![Screen Shot 2022-03-25 at 4 11 13 PM](https://user-images.githubusercontent.com/91348857/160194225-43141593-812c-46c4-9d85-e660cb5a15be.png)

You are not allowed to edit the image of a post, so to edit the caption click on the three dots next to your caption.

