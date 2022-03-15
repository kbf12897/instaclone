from app.models import db, Post

def seed_posts():
    first_post = Post(
        user_id=1,
        img_url='https://media.cntraveler.com/photos/5a903dd660543c4ae96c2e74/16:9/w_2560%2Cc_limit/GettyImages-497268617.jpg',
        caption='What a beautiful city',
    )
    second_post = Post(
        user_id=2,
        img_url='https://academy.avast.com/hubfs/New_Avast_Academy/Hackers/Hacker-Thumb-a1.png',
        caption='Hard at work',
    )
    third_post = Post(
        user_id=3,
        img_url='https://www.hepper.com/wp-content/uploads/2021/11/Male-Blue-Merle-Border-Collie_ForeverNaturalPhotography_Shutterstock.jpg',
        caption='What a good boy',
    )

    db.session.add(first_post)
    db.session.add(second_post)
    db.session.add(third_post)
    db.session.commit()


def undo_posts():
    db.session.execute('TRUNCATE posts RESTART IDENTITY CASCADE;')
    db.session.commit()
