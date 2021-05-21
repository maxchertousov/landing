<template lang="pug">
  .pop-up
    .overlay(@click="hide()")
    .wraper
      .close(@click="hide()")
        .line.vertical
        .line.horizontal
    .modal-window
      .top
        h2 Подробнее обо мне
        .all
          .left
            .text
              p Я сертифицированный специалист по здоровому образу жизни - <span>health coach</span> (Institute for Integrative Nutrition).<br><br>
              p Повышала квалификацию в онлайн-школе <span>«Doctor’s food»</span>, консультативно-образовательном центре «Путь к здоровью» (Санкт-Петербург) и Ludwig-Maximilians-Universität München (Мюнхен).<br><br>
              p На протяжение нескольких лет я изучаю вопросы похудения и омоложения и достигла в этом определённых успехов.
            .wrap.mob
              img(src="../assets/top-right.png" alt="")
              img.abs1(src="../assets/top-abs.png" alt="")
            p.mob Я мама двух дочек (10 лет и 1 год) и автор марафона диеты, имитирующей голодание. Мы начали впервые проводить марафоны в декабре 2019 года, после того, как я сама, восстанавливаясь после родов и активно худея, привезла из Америки FMD - <span> Fast Mimicking Diet</span>, которая изменила мою жизнь.
            .wrapper
              img(src="../assets/top-left.png" alt="")
          .right
            .wrapper
              img(src="../assets/top-right.png" alt="")
              img.abs1(src="../assets/top-abs.png" alt="")
            p Я мама двух дочек (10 лет и 1 год) и автор марафона диеты, имитирующей голодание. Мы начали впервые проводить марафоны в декабре 2019 года, после того, как я сама, восстанавливаясь после родов и активно худея, привезла из Америки FMD - <span> Fast Mimicking Diet</span>, которая изменила мою жизнь.
      .bottom
        .all
          .left
            p Я изучаю все современные методики похудения и омоложения, слежу за новыми исследованиями и научными публикациями, собираю полезную информацию из десятков различных источников и активно рассказываю об этом в инстаграм: <a href="https://www.instagram.com/krylova.evgenia/" target="_blank">@krylova.evgenia </a>
            .buttons
              a.button-green(href="https://www.instagram.com/krylova.evgenia/" target="_blank") instagram
                img(src="../assets/arrow.png" alt="")
              a.button-green(href="https://www.instagram.com/stories/highlights/17903237428504147/" target="_blank") Stories
                img(src="../assets/arrow.png" alt="")
            .wrapper.desktop
              img(src="../assets/bottom-left.png" alt="")
            .wrapper.mob
              img.mob(src="../assets/bottom-right-mob.png" alt="")
              img.abs2(src="../assets/bottom-abs.png" alt="")
          .right
            .wrapper.desktop
              img.desktop(src="../assets/bottom-right.png" alt="")
              img.mob(src="../assets/bottom-right-mob.png" alt="")
              img.abs2(src="../assets/bottom-abs.png" alt="")
            .wrapper.mob
              img(src="../assets/bottom-left.png" alt="")
            .buttons
              p Для марафона FMD и FMDBOX у меня есть отдельный аккаунт:<a href="" target="_blank">@marafon</a>
              a.button-green(href="https://www.instagram.com/marafon.fmd/" target="_blank") Марафон
                img(src="../assets/arrow.png" alt="")
              p Также у меня есть телеграмм-канал, в котором я веду научный дневник. <br> <br> Там можно найти всё, что нужно знать, чтобы быть здоровым:
              a.button-green(href="https://t.me/krylova_marafon" target="_blank") Telegram
                img(src="../assets/arrow.png" alt="")
</template>

<script>
export default {
  methods: {
    hide() {
      this.$emit('hide')
    },
  },
}
</script>

<style lang="sass" scoped>
.pop-up
  display: flex
  justify-content: center
  align-items: center
  flex-direction: row-reverse
  position: fixed
  overflow-y: scroll
  top: 0
  right: 0
  bottom: 0
  left: 0
  z-index: 4
.overlay
  background: rgba(79, 84, 112, 0.2)
  position: absolute
  top: 0
  right: 0
  bottom: 0
  left: 0
.wraper
  display: flex
  align-items: flex-start
  height: 86%
  top: 40px
  right: 22px
  margin-left: 20px
  .close
    position: sticky
    width: 28px
    height: 28px
    cursor: pointer
    transform: rotate(45deg)
    z-index: 3
    transition: $time linear
    &:hover
      .line
        background-color: #3DCD88
    .line
      background-color: #ffffff
      position: absolute
      border-radius: 2px
      &.vertical
        top: 0
        left: 50%
        transform: translate(-50%)
        width: 3px
        height: 100%
      &.horizontal
        top: 50%
        transform: translate(0, -50%)
        width: 100%
        height: 3px
.modal-window::-webkit-scrollbar
  width: 0
.modal-window
  box-shadow: 0px 4px 36px rgba(0, 0, 0, 0.25)
  background-color: #FFFFFF
  position: relative
  border-radius: 10px
  z-index: 5
  width: 92%
  max-width: 1180px
  height: 86%
  overflow: auto
  .top
    background: linear-gradient(90deg,rgba(255,255,255,1) 50%, rgba(254, 223, 210, 0.58) 50.83%, #FFF8E8 86.12%, rgba(254, 202, 164, 0) 100%)
    padding: 100px 100px 0 100px
    h2
      margin-bottom: 50px
    .all
      display: flex
      .left
        width: 50%
        padding-right: 60px
        .text
          margin-bottom: 118px
          text-align: left
          p
            -webkit-font-smoothing: subpixel-antialiased
            -webkit-transform: translateZ(0) scale(1.0, 1.0)
            font-size: 20px
            line-height: 150%
            color: #373737
            span
              font-weight: 700
        .wrap.mob
          max-width: 380px
          width: 100%
          margin: 0 auto 98px auto
          position: relative
          display: none
          img.abs1
            position: absolute
            width: 121px
            height: 163px
            right: -30px
            bottom: -70px
          img
            width: 100%
            object-fit: contain
            object-position: center
        p.mob
          font-size: 14px
          line-height: 150%
          color: #373737
          text-align: left
          display: none
          margin-bottom: 62px
          span
            font-weight: 700
        .wrapper
          border: 2px solid rgba(64, 188, 128, 0.25)
          max-width: 320px
          border-radius: 200px 0px 0px 0px
          padding-bottom: 25px
          display: flex
          margin: 0 auto
          img
            width: 100%
            margin: -25px 0 0 -25px
            object-fit: contain
            object-position: center
      .right
        width: 50%
        padding-bottom: 210px
        padding-left: 25px
        .wrapper
          margin-bottom: 163px
          display: flex
          max-width: 360px
          position: relative
          img
            width: 100%
            object-fit: contain
            object-position: center
          img.abs1
            position: absolute
            bottom: -86px
            right: -120px
            width: 199px
            height: 266px
        p
          font-size: 20px
          line-height: 150%
          color: #373737
          span
            font-weight: 700
  .bottom
    // background: linear-gradient(90deg, rgba(255,255,255,1) 50%, rgba(185, 219, 226, 0.25) 6.39%, rgba(110, 192, 153, 0.25) 51.11%, rgba(64, 188, 128, 0) 99.3%)
    background: linear-gradient(90deg, rgba(185, 219, 226, 0.25) 6.39%, rgba(110, 192, 153, 0.25) 36.11%, rgba(64, 188, 128, 0) 50%, rgba(255,255,255,1) 100%)
    .all
      display: flex
      padding: 24px 100px 75px 100px
      .left
        width: 50%
        padding-right: 50px
        p
          font-size: 20px
          line-height: 150%
          color: #373737
          margin-bottom: 40px
          a
            font-weight: 700
            color: #373737
        .buttons
          margin-bottom: 207px
          a
            margin-bottom: 20px
            img
              margin-left: 20px
        .wrapper.mob
          display: none
        .wrapper
          border: 2px solid rgba(227, 157, 117, 0.45)
          max-width: 380px
          border-radius: 200px 0px 0px 0px
          padding-bottom: 25px
          display: flex
          margin: 0 auto
          img
            width: 100%
            margin: -25px 0 0 -25px
            object-fit: contain
            object-position: center
      .right
        width: 50%
        .wrapper.mob
          display: none
        .wrapper
          max-width: 380px
          width: 100%
          display: flex
          margin: 0 auto 98px auto
          position: relative
          img.mob
            display: none
          img
            width: 100%
            object-fit: contain
            object-position: center
          img.abs2
            position: absolute
            width: 180px
            height: 301px
            top: -144px
            left: -50px
        .buttons
          p
            font-size: 20px
            line-height: 150%
            color: #373737
            margin-bottom: 40px
            a
              font-weight: 700
              color: #373737
          a.button-green
            margin-bottom: 50px
            img
              margin-left: 20px

@include breakpoint(large)
  .modal-window
    max-width: 720px
    .top
      padding: 60px 46px 0 42px
      .all
        .left
          padding-right: 40px
          .text
            margin-bottom: 60px
            p
              font-size: 14px
        .right
          padding-bottom: 190px
          .wrapper
            margin-bottom: 130px
            img.abs1
              width: 114px
              height: 152px
              right: -30px
              bottom: -70px
          p
            font-size: 14px
    .bottom
      .all
        padding: 24px 44px 70px 44px
        .left
          p
            font-size: 14px
          .buttons
            margin-bottom: 142px
        .right
          .wrapper
            padding-left: 75px
            margin-bottom: 56px
            img.abs2
              width: 115px
              height: 192px
              left: 10px
              top: -108px
          .buttons
            p
              font-size: 14px
              margin-bottom: 20px
  @include breakpoint(medium)
    .modal-window
      .top
        .all
          flex-direction: column
          .left
            width: 100%
            padding-right: 0
            .text
              margin-bottom: 30px
            .wrap.mob
              display: flex
              margin-bottom: 100px
            p.mob
              display: block
          .right
            padding: 0
            padding-bottom: 30px
            width: 100%
            .wrapper
              display: none
            p
              display: none
      .bottom
        .all
          flex-direction: column
          align-items: center
          .left
            width: 100%
            margin-bottom: 30px
            padding-right: 0
            p
              text-align: left
            .buttons
              margin: 0 auto 40px auto
              a
                margin: 0 auto 20px auto
            .wrapper.desktop
              display: none
            .wrapper.mob
              display: block
              position: relative
              margin: 112px auto 0
              border: none
              padding-left: 84px
              img
                margin: 0
              img.abs2
                position: absolute
                width: 98px
                height: 165px
                left: 0
                top: -100px
          .right
            width: 100%
            flex-direction: column-reverse
            display: flex
            .wrapper.mob
              display: block
              padding-left: 0
            .wrapper.desktop
              display: none
            .wrapper
              padding-left: 84px
              margin-top: 60px
            .buttons
              a
                margin: 0 auto 30px auto
@include breakpoint(small)
  .pop-up
    flex-direction: column
    align-items: flex-end
    padding-right: 7%
    .wraper
      height: 40px
      .close
    .modal-window
      .top
        padding: 35px 15px 0 15px
      h2
        line-height: 100%
        text-align: left
      .bottom
        .all
          padding: 20px 15px 50px 15px
          .left
            .wrapper.mob
          .right
            .wrapper
              img.mob
                display: block
              img.desktop
                display: none
              img.abs2
                width: 98px
                height: 165px
</style>