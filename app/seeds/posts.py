from app.models import db, Post

def seed_posts():
    user_one_first_post = Post(
        user_id=1,
        img_url='https://i.ytimg.com/vi/zwBaJ6TViCI/maxresdefault.jpg',
        caption='How do they even get up there?',
    )
    user_one_second_post = Post(
        user_id=1,
        img_url='https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_33/2203981/171026-better-coffee-boost-se-329p.jpg',
        caption='How to build a website',
    )
    user_one_third_post = Post(
        user_id=1,
        img_url='https://www.kitchensanctuary.com/wp-content/uploads/2020/12/Quick-Chicken-Ramen-square-FS-22.jpg',
        caption='Need I say more?',
    )
    user_one_fourth_post = Post(
        user_id=1,
        img_url='https://www.hepper.com/wp-content/uploads/2021/11/Male-Blue-Merle-Border-Collie_ForeverNaturalPhotography_Shutterstock.jpg',
        caption='The bestest boy',
    )


    user_two_first_post = Post(
        user_id=2,
        img_url='https://images.unsplash.com/photo-1595295386623-c030a2fb49e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aWNlJTIwY3JlYW0lMjBtZWx0aW5nfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
        caption='Summers coming!',
    )
    user_two_second_post = Post(
        user_id=2,
        img_url='https://images.radiox.co.uk/images/284152?width=1200&crop=16_9&signature=fx913PkMi8RnuMVamL0ofarItBM=',
        caption='Wish this happened on my roof',
    )
    user_two_third_post = Post(
        user_id=2,
        img_url='https://www.cheatsheet.com/wp-content/uploads/2020/06/GettyImages-114148768.jpg',
        caption='Penny Lane is in my ears and in my eyes',
    )
    user_two_fourth_post = Post(
        user_id=2,
        img_url='https://academy.avast.com/hubfs/New_Avast_Academy/Hackers/Hacker-Thumb-a1.png',
        caption='Dollar a day? More like a penny a day - squidward',
    )


    user_three_first_post = Post(
        user_id=3,
        img_url='https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F20%2F2021%2F10%2F12%2Fbobby-flay-guy-fieri.jpg',
        caption='Who you got in a cookoff?',
    )
    user_three_second_post = Post(
        user_id=3,
        img_url='https://cdn.vox-cdn.com/thumbor/vP0yRMztDLkzQSyPMpDoL-tWsHk=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19086695/sohpie_flay_bobby_flay.jpg',
        caption='Taco Tuesday!',
    )
    user_three_third_post = Post(
        user_id=3,
        img_url='https://s.hdnux.com/photos/01/20/60/23/21169390/4/rawImage.jpg',
        caption='Las Vegas resturant now open!',
    )
    user_three_fourth_post = Post(
        user_id=3,
        img_url='https://www.sheknows.com/wp-content/uploads/2021/10/bobby-flay-contract.jpg',
        caption='Let me teach you how to cook better than Guy Fieri with this book!',
    )


    user_four_first_post = Post(
        user_id=4,
        img_url='https://www.theparisreview.org/blog/wp-content/uploads/2019/02/lionel-messi-barcelona-real-valladolid-la-liga-16022019_1bw6p2nvwm73514xf8ysqwlb6l.jpg',
        caption='Another goal whats new',
    )
    user_four_second_post = Post(
        user_id=4,
        img_url='https://www.ligue1.com/-/media/Project/LFP/Ligue1-COM/Images/Articles-Assests/2022/03/03/Desktop_2122_UK_CdF_Paris_Nice_Neymar_Messi_Mbappe.jpg',
        caption='My sons',
    )
    user_four_third_post = Post(
        user_id=4,
        img_url='https://i2-prod.mirror.co.uk/incoming/article25614088.ece/ALTERNATES/n615/1_TOPSHOT-FBL-ESP-LIGA-BARCELONA-MESSI.jpg',
        caption='Gotta go play in a farmers league',
    )
    user_four_fourth_post = Post(
        user_id=4,
        img_url='https://static01.nyt.com/images/2017/03/09/sports/09messi/09messi-jumbo.jpg',
        caption='Remontada!!!!!',
    )


    user_five_first_post = Post(
        user_id=5,
        img_url='https://editorial.uefa.com/resources/0257-0defa38502fd-f1091564b4c1-1000/xavi_hernandez_fc_barcelona_.jpeg',
        caption='We back!',
    )
    user_five_second_post = Post(
        user_id=5,
        img_url='https://cdn-media.theathletic.com/arMsI4PM43xr_arMsI4PM43xr_GbzolqwV7ujh_original_1440x960.jpg',
        caption='Time to bring us back to the top',
    )
    user_five_third_post = Post(
        user_id=5,
        img_url='https://i.ytimg.com/vi/3yR5B8viTWQ/maxresdefault.jpg',
        caption='Another one',
    )
    user_five_fourth_post = Post(
        user_id=5,
        img_url='https://barcauniversal.com/wp-content/uploads/2022/02/fbl-liga-esp-barcelona-real-sociedad-scaled.jpg',
        caption='Miss you king',
    )


    user_six_first_post = Post(
        user_id=6,
        img_url='https://www.rollingstone.com/wp-content/uploads/2018/06/rs-16181-20140716-kanye-1800-1405627684.jpg',
        caption='I miss the old Kanye',
    )
    user_six_second_post = Post(
        user_id=6,
        img_url='https://wp.usatodaysports.com/wp-content/uploads/sites/90/2016/02/gty_509642162_79592586.jpg',
        caption='Feel like pablo',
    )
    user_six_third_post = Post(
        user_id=6,
        img_url='https://www.rollingstone.com/wp-content/uploads/2018/06/rs-142271-rectangle.jpg?resize=1800,1200&w=1800',
        caption='Had all you wearing these',
    )
    user_six_fourth_post = Post(
        user_id=6,
        img_url='https://culted.com/wp-content/uploads/2021/06/otis-feature-1-scaled.jpg',
        caption='We in the HOV lane',
    )


    user_seven_first_post = Post(
        user_id=7,
        img_url='https://www.boredpanda.com/blog/wp-content/uploads/2021/12/2-61ae1e704e406__700.jpg',
        caption="I'm a hacker",
    )
    user_seven_second_post = Post(
        user_id=7,
        img_url='https://miro.medium.com/max/500/1*qZoBA3wFh-82y2N3qQCdpw.jpeg',
        caption='It be like that sometimes',
    )
    user_seven_third_post = Post(
        user_id=7,
        img_url='https://miro.medium.com/max/1400/1*wygpuRlFHFxNtihw9WQv7Q.png',
        caption='Genius!',
    )
    user_seven_fourth_post = Post(
        user_id=7,
        img_url='https://hackaday.com/wp-content/uploads/2014/04/18mpenleoksq8jpg.jpg',
        caption='No more traffic tickets',
    )


    user_eight_first_post = Post(
        user_id=8,
        img_url='https://yt3.ggpht.com/ytc/AKedOLQQEK4sbaot8nUVj3rjjmPVk-0VDXuTskPjaeqxyQ=s900-c-k-c0x00ffffff-no-rj',
        caption="Me and my bestie",
    )
    user_eight_second_post = Post(
        user_id=8,
        img_url='https://trhsnews.com/wp-content/uploads/2021/04/anderson_paak_israel_ramos-900x900.jpg',
        caption="Time traveler",
    )
    user_eight_third_post = Post(
        user_id=8,
        img_url='https://www.thelefortreport.com/blog/wp-content/uploads/andersonpaak_crobert_wide-92a3c2a29696f995ac8eb0c3a0955e23ecf2a996.jpg',
        caption="Tiny desk out now",
    )
    user_eight_fourth_post = Post(
        user_id=8,
        img_url='https://i.dailymail.co.uk/1s/2019/06/12/23/14719102-0-image-m-21_1560380329330.jpg',
        caption="Dang",
    )


    db.session.add(user_two_first_post)
    db.session.add(user_four_first_post)
    db.session.add(user_three_second_post)
    db.session.add(user_two_third_post)
    db.session.add(user_three_third_post)
    db.session.add(user_two_second_post)
    db.session.add(user_four_fourth_post)
    db.session.add(user_two_fourth_post)
    db.session.add(user_three_first_post)
    db.session.add(user_five_first_post)
    db.session.add(user_one_third_post)
    db.session.add(user_three_fourth_post)
    db.session.add(user_five_fourth_post)
    db.session.add(user_seven_first_post)
    db.session.add(user_six_fourth_post)
    db.session.add(user_five_third_post)
    db.session.add(user_four_third_post)
    db.session.add(user_five_second_post)
    db.session.add(user_eight_second_post)
    db.session.add(user_four_second_post)
    db.session.add(user_six_first_post)
    db.session.add(user_one_first_post)
    db.session.add(user_seven_second_post)
    db.session.add(user_eight_fourth_post)
    db.session.add(user_seven_third_post)
    db.session.add(user_eight_first_post)
    db.session.add(user_seven_fourth_post)
    db.session.add(user_six_third_post)
    db.session.add(user_six_second_post)
    db.session.add(user_one_second_post)
    db.session.add(user_eight_third_post)
    db.session.add(user_one_fourth_post)
    db.session.commit()


def undo_posts():
    db.session.execute('TRUNCATE posts RESTART IDENTITY CASCADE;')
    db.session.commit()
