from app.models import db, Comment

def seed_comments():
    post_1_comment_1 = Comment(
        user_id=2,
        post_id=1,
        comment_body="I've got to visit one day!"
    )
    post_2_comment_1 = Comment(
        user_id=1,
        post_id=2,
        comment_body="Keep up the good work!"
    )
    post_3_comment_1 = Comment(
        user_id=2,
        post_id=3,
        comment_body="He's so cute!"
    )


    db.session.add(post_1_comment_1)
    db.session.add(post_2_comment_1)
    db.session.add(post_3_comment_1)
    db.session.commit()

def undo_comments():
    db.session.execute('TRUNCATE comments RESTART IDENTITY CASCADE;')
    db.session.commit()
