<template lang="pug">
  .screen
    section.advantages
      .container
        h2 Преимущества диеты FMD
        p Вам потребуется всего 5 дней, чтобы диета <br> FMD с планом питания изменила вашу жизнь.
    .top
      .container
        .left
          .wraper
            img(src="./assets/top.png" alt="")
        .right
          .item
            img(src="./assets/item-1.png" alt="")
            p Снижение веса
          .item
            img(src="./assets/item-2.png" alt="")
            p Улучшение самочувствия
          .item
            img(src="./assets/item-3.png" alt="")
            p Уменьшение объёмов
          .item
            img(src="./assets/item-4.png" alt="")
            p Избавление от пищевой зависимости
          .item
            img(src="./assets/item-5.png" alt="")
            p Клеточное обновление
          .item
            img(src="./assets/item-6.png" alt="")
            p Энергия и легкость
          .item
            img(src="./assets/item-7.png" alt="")
            p Снижение целлюлита
          .item
            img(src="./assets/item-8.png" alt="")
            p Не нужно готовить
          button.button-green(@click="click") Купить FMDBOX
    .bottom
      .container
        h2.mob Кому противопоказано?
        .all
          .left
            h2.desktop Кому противопоказано?
            .item
              .cross
                .line.vertical
                .line.horizontal
              p Детям до 18 лет
            .item
              .cross
                .line.vertical
                .line.horizontal
              p Беременным и кормящим
            .item
              .cross
                .line.vertical
                .line.horizontal
              p Людям с индексом массы тела ниже 18.5
            .item
              .cross
                .line.vertical
                .line.horizontal
              p Инфекционным больным и людям, имеющим проблемы с пищеварением
            .item
              .cross
                .line.vertical
                .line.horizontal
              p Больным диабетом 1 или 2 типа, заболеваниями почек, печени, сердечно-сосудистыми и раковыми заболеваниями
            .item
              .cross
                .line.vertical
                .line.horizontal
              p Людям, с нарушениями обмена веществ
            .item
              .cross
                .line.vertical
                .line.horizontal
              p Людям с обмороками на фоне низкокалорийной диеты в анамнезе.
          .right
            .wraper
              img(src="./assets/bottom.png" alt="")
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
    .advantages
      .container
        h2
          margin-bottom: 50px
        p
          font-size: 25px
          line-height: 120%
          color: #373737
          margin-bottom: 36px
    .top
      background: linear-gradient(90deg, rgba(255,255,255,1) 50%, rgba(185, 219, 226, 0.25) 56.39%, rgba(110, 192, 153, 0.25) 71.11%, rgba(64, 188, 128, 0) 99.3%)
      .container
        padding-left: 15px
        padding-right: 15px
        display: flex
        .left
          width: 50%
          padding-top: 74px
          padding-left: 15px
          padding-right: 15px
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
          padding: 44px 0 60px 80px
          .item
            margin-bottom: 20px
            display: flex
            align-items: center
            p
              font-weight: 500
              font-size: 20px
              line-height: 120%
              color: #373737
              margin-left: 30px
          button
            margin-top: 40px
    .bottom
      background: linear-gradient(90deg, rgba(254, 223, 210, 0.58) 0.83%, #FFF8E8 36.12%, rgba(254, 202, 164, 0) 50%, rgba(255,255,255,1) 100%,)
      .container
        padding-left: 15px
        padding-right: 15px
        h2.mob
          display: none
        .all
          display: flex
          .left
            position: relative
            width: 50%
            padding-top: 84px
            padding-bottom: 84px
            h2.desktop
              display: block
              white-space: nowrap
              margin-bottom: 82px
            .item
              position: relative
              margin-bottom: 22px
              p
                font-weight: 500
                font-size: 16px
                line-height: 150%
                color: #373737
                padding-left: 50px
              .cross
                position: absolute
                top: 3px
                min-width: 20px
                min-height: 20px
                transform: rotate(45deg)
                z-index: 3
                .line
                  background-color: #E39D75
                  position: absolute
                  &.vertical
                    top: 0
                    left: 50%
                    transform: translate(-50%)
                    width: 5px
                    height: 100%
                  &.horizontal
                    top: 50%
                    transform: translate(0, -50%)
                    width: 100%
                    height: 5px
          .right
            width: 50%
            padding: 198px 0 0 46px
            .wraper
              border: 2px solid rgba(227, 157, 117, 0.45)
              max-width: 490px
              display: flex
              padding-top: 25px
              img
                width: 100%
                height: 100%
                object-fit: contain
                object-position: center
                margin: 0 0 -25px -25px
  @include breakpoint(medium)
    .screen
      .advantages
        .container
      .top
        background: #ffffff
        .container
          flex-direction: column
          .left
            width: 100%
            .wraper
              margin: 0 auto
          .right
            background: linear-gradient(180deg, rgba(185, 219, 226, 0.25) 6.39%, rgba(110, 192, 153, 0.25) 51.11%, rgba(64, 188, 128, 0) 99.3%)
            width: 100%
            padding-left: 15px
            padding-right: 15px
            button
              margin: 40px auto 0 auto
      .bottom
        background: #ffffff
        .container
          h2.mob
            display: block
            padding-left: 15px
            padding-right: 15px
          .all
            flex-direction: column-reverse
            .left
              background: linear-gradient(180deg, rgba(254, 223, 210, 0.58) 0.83%, #FFF8E8 36.12%, rgba(254, 202, 164, 0) 100%)
              width: 100%
              padding-left: 15px
              padding-right: 15px
              h2.desktop
                display: none
            .right
              width: 100%
              padding-top: 30px
              padding-bottom: 42px
              padding-left: 15px
              padding-right: 15px
              .wraper
                margin: 0 auto
  @include breakpoint(small)
    .screen
      .advantages
        .container
          h2
            margin-bottom: 10px
          p
            font-size: 14px
            margin-bottom: 30px
      .top
        .container
          .left
            padding-top: 0
            .wraper
              padding-bottom: 12px
              img
                margin: -12px 0 0 -12px
          .right
            padding: 0 15px 50px 15px
            .item
              p
                font-size: 16px
                margin-left: 20px
              img
                width: 40px
                height: 40px
      .bottom
        .container
          .all
            .left
              padding-top: 10px
              .item
                p
                  font-size: 16px
                  padding-left: 40px
            .right
              .wraper
                padding-top: 12px
                img
                  margin: 0 0 -12px -12px
</style>