from app.models import db, Comment

def seed_comments():
    post_1_comment_1 = Comment(
        user_id=2,
        post_id=4,
        comment_body="He's so cute!"
    )
    post_1_comment_2 = Comment(
        user_id=4,
        post_id=4,
        comment_body="I want one!"
    )
    post_1_comment_3 = Comment(
        user_id=3,
        post_id=4,
        comment_body="Australian shephards are my favorite"
    )
    post_1_comment_4 = Comment(
        user_id=6,
        post_id=4,
        comment_body="I've got to visit one day!"
    )
    post_1_comment_5 = Comment(
        user_id=7,
        post_id=4,
        comment_body="I've got to visit one day!"
    )


    db.session.add(post_1_comment_1)
    db.session.add(post_2_comment_1)
    db.session.add(post_3_comment_1)
    db.session.commit()

def undo_comments():
    db.session.execute('TRUNCATE comments RESTART IDENTITY CASCADE;')
    db.session.commit()
