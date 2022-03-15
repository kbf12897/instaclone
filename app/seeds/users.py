from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        username='Demo', email='demo@aa.io', profile_img='https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/MSNBC/Components/Photo/_new/12025-ChuckPhoto-hmed-0950a.jpg' ,password='password')
    marnie = User(
        username='marnie', email='marnie@aa.io', profile_img='https://cdn.myanimelist.net/images/characters/7/282923.jpg', password='password')
    bobbie = User(
        username='bobbie', email='bobbie@aa.io', profile_img='https://food.fnr.sndimg.com/content/dam/images/food/editorial/talent/bobby-flay/FN-TalentAvatar-Bobby-Flay-colorblock.jpg.rend.hgtvcom.616.616.suffix/1531174427795.jpeg' ,password='password')

    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(bobbie)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
