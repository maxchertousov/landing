<template lang="pug">
  .screen
    section.reviews.container
      h2 Отзывы
      .swiper-container(v-swiper:mySwiper="swiperOption")
        .swiper-wrapper
          .swiper-slide
            img(src="./assets/slide-1.png" alt="")
          .swiper-slide
            img(src="./assets/slide-2.png" alt="")
          .swiper-slide
            img(src="./assets/slide-3.png" alt="")
          .swiper-slide
            img(src="./assets/slide-4.png" alt="")
          .swiper-slide
            img(src="./assets/slide-1.png" alt="")
          .swiper-slide
            img(src="./assets/slide-2.png" alt="")
          .swiper-slide
            img(src="./assets/slide-3.png" alt="")
          .swiper-slide
            img(src="./assets/slide-4.png" alt="")
      .swiper-navigation
        .swiper-button-prev
        .swiper-button-next
</template>

<script>
export default {
  data: () => ({
    swiperOption: {
      slidesPerView: 4,
      spaceBetween: 40,
      navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
      },
      breakpoints: {
        1024: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 2,
        },
        490: {
          slidesPerView: 1,
        },
      },
    },
  }),
}
</script>

<style lang="sass" scoped>
  .screen
    padding-bottom: 150px
    .reviews
      position: relative
      h2
        margin-bottom: 50px
      .swiper-navigation ::v-deep
        position: absolute
        right: 145px
        top: 35px
      .swiper-button-prev
        width: 41px
        height: 41px
        background-image: url('./assets/slider-arrow.svg')
        background-size: auto
        outline: none
      .swiper-button-next
        width: 41px
        height: 41px
        background-image: url('./assets/slider-arrow.svg')
        transform: rotate(180deg)
        background-size: auto
        right: -130px
        outline: none
  @include breakpoint(small)
    .screen
      padding-bottom: 117px
      .reviews
        .swiper-navigation
          bottom: -545px
          top: 0
          left: 0
</style>