from app.models import db, Comment

def seed_comments():
    post_1_comment_1 = Comment(
        user_id=2,
        post_id=32,
        comment_body="He's so cute!"
    )
    post_1_comment_2 = Comment(
        user_id=4,
        post_id=32,
        comment_body="I want one!"
    )
    post_1_comment_3 = Comment(
        user_id=3,
        post_id=32,
        comment_body="Australian shephards are my favorite"
    )
    post_1_comment_4 = Comment(
        user_id=6,
        post_id=32,
        comment_body="He looks so happy :)"
    )
    post_1_comment_5 = Comment(
        user_id=7,
        post_id=32,
        comment_body="What's his name??"
    )

    post_2_comment_1 = Comment(
        user_id=3,
        post_id=31,
        comment_body="If you haven't listened you're playing yourself"
    )
    post_2_comment_2 = Comment(
        user_id=1,
        post_id=31,
        comment_body="He so groovy"
    )

    post_3_comment_1 = Comment(
        user_id=5,
        post_id=30,
        comment_body="Nothing better"
    )
    post_3_comment_2 = Comment(
        user_id=6,
        post_id=30,
        comment_body="How artsy"
    )




    db.session.add(post_1_comment_1)
    db.session.add(post_1_comment_2)
    db.session.add(post_1_comment_3)
    db.session.add(post_1_comment_4)
    db.session.add(post_1_comment_5)

    db.session.add(post_2_comment_1)
    db.session.add(post_2_comment_2)

    db.session.add(post_3_comment_1)
    db.session.add(post_3_comment_2)

    db.session.commit()

def undo_comments():
    db.session.execute('TRUNCATE comments RESTART IDENTITY CASCADE;')
    db.session.commit()
