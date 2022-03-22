from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        username='Demo', email='demo@aa.io', profile_img='https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/MSNBC/Components/Photo/_new/12025-ChuckPhoto-hmed-0950a.jpg' ,password='password')
    marnie = User(
        username='Marnie', email='marnie@aa.io', profile_img='https://cdn.myanimelist.net/images/characters/7/282923.jpg', password='password')
    bobbie = User(
        username='Bobbie', email='bobbie@aa.io', profile_img='https://food.fnr.sndimg.com/content/dam/images/food/editorial/talent/bobby-flay/FN-TalentAvatar-Bobby-Flay-colorblock.jpg.rend.hgtvcom.616.616.suffix/1531174427795.jpeg' ,password='password')
    messi = User(
        username='Messi', email='goat@goat.com', profile_img='https://i.guim.co.uk/img/media/a7fe7170defa865d2b96b829f05c5d8fa82d8edf/0_20_2201_1321/master/2201.jpg?width=465&quality=45&auto=format&fit=max&dpr=2&s=72bbae118ff1631bcc0d1f837159a727' ,password='thegoat')
    xavi = User(
        username='Xavi', email='barca@coach.com', profile_img='https://phantom-marca.unidadeditorial.es/19cc8b27556803d3a3addfabd18aeed4/resize/1320/f/jpg/assets/multimedia/imagenes/2021/11/20/16374489926682.jpg', password='tikitaka'
    )
    kanye = User(
        username='Yeezy', email='iamgod@me.com', profile_img='https://www.etonline.com/sites/default/files/styles/970xh/public/images/2017-02/1280_kanye_07_02GettyImages-56792309.jpg?itok=d7DlJy3-', password='kanye'
    )
    jupitor = User(
        username='jupitor', email='liljup@dope.com', profile_img='https://hips.hearstapps.com/pop.h-cdn.co/assets/17/11/1024x512/landscape-1489610227-jupiterjerk-1.jpg?resize=640:*', password='jupitor'
    )
    anderson = User(
        username='anderson._paak', email='yes@lawd.com', profile_img='https://lastfm.freetls.fastly.net/i/u/ar0/30df33a1bdcd3f15939c882537c96a13.jpg', password='yeslawd'
    )


    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(bobbie)
    db.session.add(messi)
    db.session.add(xavi)
    db.session.add(kanye)
    db.session.add(jupitor)
    db.session.add(anderson)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
