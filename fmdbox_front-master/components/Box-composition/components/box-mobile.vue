<template lang="pug">
  .items
    .swiper-container(v-swiper:mySwiper="swiperOption")
      .swiper-wrapper
        .swiper-slide
          .item-green
            p Лук
            p Морковь
            p Томаты
            p Сушёный картофель
            p Чеснок
            p Капуста
            p Фасоль
            p Пастернак
            p Белые грибы
            img(src="../assets/box-item-9.png" alt="")
        .swiper-slide
          .item-cream
            p Соль
            p Чёрный перец
            p Паприка
            p Кунжут
            p Семена льна
            p Инулин
            img(src="../assets/box-item-2.png" alt="")
        .swiper-slide
          .item-green
            p Укроп
            p Петрушка
            p Лён
            p Базилик
            img(src="../assets/box-item-3.png" alt="")
        .swiper-slide
          .item-cream
            p Кешью
            p Грецкие орехи
            p Миндаль
            p Смесь токоферолов
            img(src="../assets/box-item-4.png" alt="")
        .swiper-slide
          .item-cream
            p Какао порошок
            p Чаи: каркаде, ромашка и мята.
            p Экстракт зеленого чая
            p Экстракты имбиря и лимона
            img(src="../assets/box-item-5.png" alt="")
        .swiper-slide
          .item-green
            p Льняное масло
            p Кокосовое масло
            p Аскорбиновая кислота
            p Лимонная кислота
            p Мёд
            img(src="../assets/box-item-6.png" alt="")
        .swiper-slide
          .item-cream
            p Кокосовая мука
            p Рисовая мука
            p Льняная мукам
            p Гречневая крупа
            img(src="../assets/box-item-7.png" alt="")
        .swiper-slide
          .item-green
            p Сушёный лимон
            p Сушёное яблоко
            p Фруктоза
            img(src="../assets/box-item-8.png" alt="")
    .swiper-navigation
      .swiper-button-prev
      .swiper-button-next
</template>

<script>
export default {
  data: () => ({
    swiperOption: {
      slidesPerView: 2,
      spaceBetween: 30,
      navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
      },
      breakpoints: {
        620: {
          slidesPerView: 1,
        },
      },
    },
  }),
}
</script>

<style lang="sass" scoped>
  .items
    .swiper-container
      .swiper-wrapper
        .swiper-slide
          margin: 0 auto
          .item-green
            padding: 30px 16px 30px 30px
            background-color: #F4FFF3
            width: 100%
            max-width: 273px
            height: 466px
            position: relative
            p
              font-size: 16px
              line-height: 150%
              color: #373737
              margin-bottom: 20px
            img
              position: absolute
              bottom: 10px
              right: 0
          .item-cream
            padding: 30px 16px 30px 30px
            position: relative
            background-color: #FFF8E8
            width: 100%
            max-width: 273px
            height: 466px
            p
              font-size: 16px
              line-height: 150%
              color: #373737
              margin-bottom: 20px
            img
              position: absolute
              bottom: 20px
              right: 10px
    .swiper-navigation ::v-deep
      display: flex
      justify-content: space-between
      bottom: -560px
      top: 0
      left: 0
      margin-top: -45px
      .swiper-button-prev
        width: 41px
        height: 41px
        background-image: url('../assets/arrow.svg')
        background-size: auto
        outline: none
        position: inherit
      .swiper-button-next
        width: 41px
        height: 41px
        background-image: url('../assets/arrow.svg')
        transform: rotate(180deg)
        background-size: auto
        right: -288px
        outline: none
        position: inherit
  @include breakpoint(small)
    .items
      .swiper-container
        .swiper-wrapper
          margin-bottom: 80px
  @media(max-width: 620px)
    .items
      .swiper-container
        .swiper-wrapper
          .swiper-slide
            .item-green,
            .item-cream
              max-width: none
</style>