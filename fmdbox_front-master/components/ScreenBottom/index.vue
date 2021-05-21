<template lang="pug">
  .screen
    section.wrap.container
      .all
        .left
          .wraper
            img.big(src="./assets/bottom.png" alt="")
            img.abs1(src="./assets/bottom-left.png" alt="")
            img.abs2(src="./assets/bottom-right.png" alt="")
        .right
          .top
            .logo
              h2 FMD
                span BOX
            p Ваш ключ к молодости, здоровью и стройности всего за 5 дней.
            .buttons
              button.button-green(@click="click") Купить FMDBOX
              .social-links
                a(herf="https://www.instagram.com/marafon.fmd/" target="_blank")
                  img(src="@/components/ScreenTop/assets/inst.svg" alt="")
                a(herf="https://t.me/krylova_marafon" target="_blank")
                  img(src="@/components/ScreenTop/assets/tgm.svg" alt="")
          .bottom
            a(:href="require('./assets/user-agreement.pdf')" target="_blank") Пользовательское соглашение Крыловой
            a(:href="require('./assets/declaration.pdf')" target="_blank") Декларация о соответсвии
</template>

<script>
export default {
  methods: {
    click() {
      this.$emit('click')
    },
  },
}
</script>

<style lang="sass" scoped>
  .screen
    .wrap.container
      .all
        display: flex
        justify-content: space-between
        .left
          width: 48%
          .wraper
            max-width: 580px
            display: flex
            position: relative
            img.big
              width: 100%
              object-fit: contain
              object-position: center
              z-index: 2
            img.abs1
              position: absolute
              bottom: 0
              left: -120px
            img.abs2
              position: absolute
              bottom: 0
              right: -120px
        .right
          padding: 208px 0 20px 75px
          width: 50%
          display: flex
          flex-direction: column
          justify-content: space-between
          .top
            .logo
              h2
                font-family: Lovelace
                font-style: normal
                font-weight: normal
                font-size: 100px
                line-height: 100%
                text-transform: uppercase
                color: #40BC80
                z-index: 3
                margin-bottom: 51px
                span
                  color: #E39D75
            p
              font-size: 25px
              line-height: 120%
              color: #373737
              margin-bottom: 70px
            .buttons
              display: flex
              .social-links
                display: flex
                a
                  width: 50px
                  height: 50px
                  border-radius: 50%
                  background-color: #40BC80
                  display: flex
                  justify-content: center
                  align-items: center
                  margin-left: 26px
                  transition: $time linear
                  cursor: pointer
                  &:hover
                    background-color: #3DCD88
          .bottom
            display: flex
            justify-content: space-between
            flex-direction: row
            a
              font-size: 14px
              line-height: 120%
              text-decoration-line: underline
              color: #A2A8A1
              transition: $time linear
              &:hover
                color: #3DCD88
  @media(max-width: 1250px)
    .screen
      .wrap.container
        .all
          align-items: flex-end
          .left
            width: 38%
          .right
            width: 60%
            .buttons
              margin-bottom: 50px
  @include breakpoint(medium)
    .screen
      .wrap.container
        .all
          .left
            display: none
          .right
            width: 60%
            padding-top: 10px
            margin: 0 auto
            padding-left: 0
            padding-bottom: 0
            .bottom
              flex-direction: column
              a
                margin-bottom: 10px
  @include breakpoint(small)
    .screen
      .wrap.container
        .all
          .right
            width: 100%
            .top
              .logo
                h2
                  font-size: 41px
                  line-height: 100%
                  margin-bottom: 46px
              p
                font-size: 18px
                line-height: 120%
                margin-bottom: 30px
              .buttons
                flex-direction: column
                button
                  margin-bottom: 40px
                .social-links
                  margin-left: -26px
            .bottom
              a
                font-size: 12px
</style>