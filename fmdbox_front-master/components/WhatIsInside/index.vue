<template lang="pug">
  .screen
    section.what-inside.container
      h2 FMDBOX
      .content
        .item-1
          img(src="./assets/item-1.png" alt="")
          p Это коробка, в которую уже входит питание на 5 дней, чтобы вам не пришлось готовить самостоятельно. Каждый день упакован в отдельную коробочку.
        .item-2
          img(src="./assets/item-2.png" alt="")
          p Коробочку на день удобно брать с собой: она не займёт много места, а для приготовления приема пищи понадобится только горячая вода.
        .item-3
          img(src="./assets/item-3.png" alt="")
          p Абсолютно натуральные составы только от проверенных поставщиков! Мы отбирали все ингредиенты самостоятельно, контролировали каждый этап производства и пробовали полученные блюда, чтобы сделать для вас лучший продукт!
        .item-4
          img(src="./assets/item-4.png" alt="")
          p Цена аналогичной коробки в Америке в три раза превышает цену FMDBOX. Мы сэкономили на маркетинге и дорогой фирменной  упаковке, сосредоточившись на качестве сырья и разработке сбалансированного состава. Так мы добились разумной цены, на 100% сохранив эффективность американского аналога, чтобы попробовать новый формат похудения мог каждый.
</template>

<style lang="sass" scoped>
  .screen
    padding: 150px 0 150px
    .what-inside
      h2
        margin-bottom: 196px
      .content
        .item-1
          position: relative
          background-color: #FFF8E8
          padding: 15px 15px 15px 125px
          width: 100%
          max-width: 710px
          margin-left: 220px
          margin-bottom: 80px
          p
            font-size: 16px
            line-height: 150%
            color: #373737
          img
            position: absolute
            width: 200px
            height: 200px
            left: -130px
            top: -70px
        .item-2
          position: relative
          background-color: #F4FFF3
          padding: 30px 78px 30px 40px
          width: 100%
          max-width: 638px
          margin-left: auto
          margin-right: 254px
          margin-bottom: 80px
          img
            position: absolute
            right: -260px
            top: -58px
          p
            font-size: 16px
            line-height: 150%
            color: #373737
        .item-3
          position: relative
          background-color: #FFF8E8
          padding: 30px 61px 30px 195px
          width: 100%
          max-width: 776px
          margin-left: 156px
          margin-bottom: 80px
          p
            font-size: 16px
            line-height: 150%
            color: #373737
          img
            position: absolute
            left: -130px
            top: -40px
        .item-4
          position: relative
          background-color: #F4FFF3
          padding: 30px 188px 30px 40px
          width: 100%
          max-width: 748px
          margin-left: auto
          margin-right: 140px
          img
            position: absolute
            right: -112px
            top: -58px
          p
            font-size: 16px
            line-height: 150%
            color: #373737
  @include breakpoint(medium)
    .screen
      .what-inside
        .content
          .item-1
            max-width: 560px
            margin-left: 150px
          .item-2
            max-width: 560px
          .item-3
            max-width: 554px
            padding: 15px 15px 15px 195px
  @include breakpoint(small)
    .screen
      padding-bottom: 30px
      padding-top: 30px
      .what-inside
        .content
          .item-1
            max-width: 290px
            padding: 35px 8px 25px 20px
            margin: 0 auto 100px auto
            img
              width: 173px
              height: 186px
              left: 0
              top: -155px
            p
              font-size: 14px
              line-height: 150%
          .item-2
            max-width: 295px
            padding: 35px 13px 25px 20px
            margin: 0 auto 100px auto
            img
              width: 213px
              height: 132px
              right: 0
              top: -96px
            p
              font-size: 14px
              line-height: 150%
          .item-3
            max-width: 290px
            padding: 35px 8px 25px 20px
            margin: 0 auto 100px auto
            img
              width: 150px
              height: 116px
              left: 0
              top: -96px
            p
              font-size: 14px
              line-height: 150%
          .item-4
            max-width: 290px
            padding: 35px 8px 25px 20px
            margin: 0 auto
            img
              width: 97px
              height: 124px
              right: 0
              top: -96px
            p
              font-size: 14px
              line-height: 150%
</style>