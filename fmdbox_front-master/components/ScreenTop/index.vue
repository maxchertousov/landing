<template lang="pug">
  .screen
    .all.container
      .top
        .left
          button.button-green.desktop(@click="click") Купить FMDBOX
          .logo
            h1 FMD
              span box
            //- img(src="./assets/logo.svg" alt="лого сайта")
          .info
            .text-top
              p «Привет, меня зовут Женя, мне 40 лет, и я создатель FMDBOX.
                | <br>Я нутрициолог и health coach, а моя внешность - результат здорового
                | образа жизни и регулярного соблюдениям диеты молодости - FMD.
              p Чтобы диета FMD стала доступнее, я создала бокс, который позволит пройти диету в любой точке мира.
                | Я обещаю, что вы увидите и почувствуете результат уже после первого курса. Enjoy!»
            .wraper
              img.desktop(src="./assets/img-1.png" alt="")
            .buttons
              button.button-brown(@click="show()") Подробнее обо мне
              button.button-green.mob(@click="click") Купить FMDBOX
              AboutMe(
                v-show="isOpen"
                @show="show"
                @hide="hide"
              )
              .social-links
                a(href="https://www.instagram.com/marafon.fmd/" target="_blank")
                  img(src="./assets/inst.svg" alt="")
                a(href="https://t.me/krylova_marafon" target="_blank")
                  img(src="./assets/tgm.svg" alt="")
        .right
          .wraper
            img(src="./assets/img-1.png" alt="")
      .bottom
        .left
          h2 О диете FMD
          .wraper
            img(src="./assets/img-2.png" alt="")
        .right
          p Диета <span> Fast Mimicking Diet </span> (FMD) была разработана в Институте долголетия Школы геронтологии при Университете Южной Калифорнии.<br><br>
            |Учёные доказали, что если раз в месяц на протяжении 5 дней резко сокращать калорийность питания и содержание
            |в еде белка, организм под воздействием стресса голодания мобилизует внутренние ресурсы здоровья.
            |У пациентов снижается иммунная нагрузка и ускоряется метаболизм, а вместе с этим улучшается общее состояние тела и организма.
          p Здоровым людям проходить FMD рекомендуют <span> раз в полгода.</span>
          p Людям с лишним весом и факторами риска возникновения диабета, рака, сердечно-сосудистых заболеваний и нейродегенеративных расстройств — <span>один раз в месяц.</span>

</template>

<script>
import AboutMe from './components/about-me.vue'

export default {
  components: {
    AboutMe,
  },
  data: () => ({
    isOpen: false,
  }),
  methods: {
    click() {
      this.$emit('click')
    },
    show() {
      const body = document.querySelector('body')
      body.classList.add('open-popup')
      this.isOpen = true
      this.$emit('show')
    },
    hide() {
      this.isOpen = false
      const body = document.querySelector('body')
      body.classList.remove('open-popup')
    },
  },
}
</script>

<style lang="sass" scoped>
  .screen
    background-color: #ffffff
    background: linear-gradient(90deg, rgba(255,255,255,1) 50%, rgba(185, 219, 226, 0.25) 6.39%, rgba(110, 192, 153, 0.25) 51.11%, rgba(64, 188, 128, 0) 99.3%)
    .container
    .all
      position: relative
      .top
        display: flex
        position: relative
        .left
          padding-top: 40px
          width: 50%
          padding-right: 78px
          z-index: 2
          button.button-green
            margin-bottom: 88px
          .logo
            margin-bottom: 30px
            h1
              font-family: Lovelace
              font-style: normal
              font-weight: normal
              font-size: 193px
              line-height: 100%
              text-transform: uppercase
              color: #40BC80
              z-index: 3
              span
                color: #E39D75
          .info
            .text-top
              margin-bottom: 60px
              p
                font-size: 16px
                line-height: 150%
                color: #373737
                margin-bottom: 20px
                text-align: left
            .wraper
              border: 1px solid #E39D75
              max-width: 465px
              padding-bottom: 25px
              display: none
              img
                width: 100%
                height: 100%
                margin: -25px 0 0 -25px
                object-fit: contain
                object-position: center
            .buttons
              display: flex
              margin-bottom: 118px
              button.button-green.mob
                display: none
              button.button-brown
                width: 100%
                max-width: 250px
                height: 50px
                background-color: #ffffff
                border: 1px solid #E39D75
                cursor: pointer
                font-weight: 500
                font-size: 14px
                line-height: 150%
                text-transform: uppercase
                color: #E39D75
                transition: $time linear
                &:hover
                  background-color: #E39D75
                  color: #ffffff
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
        .right
          width: 50%
          padding-left: 110px
          padding-top: 117px
          .wraper
            border: 1px solid #E39D75
            padding-top: 25px
            display: flex
            max-width: 490px
            img
              width: 100%
              height: 100%
              margin: 0 0 -25px -25px
              object-fit: contain
              object-position: center
      .bottom
        display: flex
        padding-left: 25px
        .left
          width: 50%
          margin-bottom: 25px
          h2
            margin-bottom: 50px
          .wraper
            border: 2px solid rgba(64, 188, 128, 0.25)
            max-width: 465px
            border-radius: 200px 0px 0px 0px
            padding-bottom: 25px
            display: flex
            img
              width: 100%
              height: 100%
              margin: -25px 0 0 -25px
              object-fit: contain
              object-position: center
        .right
          width: 50%
          padding: 200px 0 0 70px
          p
            margin-bottom: 30px
            font-size: 16px
            line-height: 150%
            color: #373737
            span
              font-weight: 600
  @include breakpoint(medium)
    .screen
      .all.container
        .top
          flex-direction: column
          align-items: center
          .left
            width: 100%
            padding: 50px 0 0 0
            text-align: center
            button.button-green.desktop
              display: none
            .logo
              h1
                font-size: 61px
            .info
              .buttons
                flex-direction: column
                align-items: center
                margin-top: 33px
                margin-bottom: 60px
                button.button-green.mob
                  display: block
                  max-width: 290px
                  margin-bottom: 30px
                .button-brown
                  max-width: 290px
                  margin-bottom: 15px
                .social-links
                  margin-left: 0
                  width: 100px
                  justify-content: space-between
                  a
                    margin-left: 0
                    width: 42px
                    height: 42px
              .wraper
                display: flex
                margin: 0 auto
          .right
            width: 100%
            padding: 0
            .wraper
              display: none
        .bottom
          flex-direction: column
          align-items: center
          padding-left: 0
          .left
            width: 100%
            .wraper
              margin: 0 auto
          .right
            width: 100%
            padding: 40px 0 0 0
  @include breakpoint(small)
    .screen
      .all.container
        .top
          .left
            .info
              .text-top
                margin-bottom: 30px
                p
                  font-size: 12px
              .wraper
                padding-bottom: 12px
                img
                  margin: -12px 0 0 -12px
        .bottom
          .left
            .wraper
              padding-bottom: 12px
              img
                margin: -12px 0 0 -12px
          .right
            p
              font-size: 12px
</style>