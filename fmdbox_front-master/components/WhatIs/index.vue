<template lang="pug">
.screen
  section.whatls
    .all.container
      .left
        .text
          p <span>FMD</span> - это самый безопасный на сегодня способ снизить ИФР-1, тот самый показатель, который отвечает за скорость нашего старения и расположенность к развитию ряда аутоимунных заболеваний. Снижение ИФР-1 способно продлить вам жизнь и обмануть генетику, даже если наследственность играет против вас.
          p Помимо продления молодости и профилактики внушительного списка заболеваний, «побочным эффектом» FMD является быстрое снижение веса - <span> в среднем, около 2,5 кг за 5 дней диеты.</span> Важно отметить, что потерянные килограммы не возвращаются, именно поэтому диета, имитирующая голодание, стремительно завоевала популярность.
        button.button-green(@click="click") Купить FMDBOX
      .right
        .wraper
          img(src="./assets/img-3.png" alt="")
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
  section.whatls
    background: linear-gradient(90deg, rgba(254, 223, 210, 0.58) 0.83%, #FFF8E8 36.12%, rgba(254, 202, 164, 0) 50%, rgba(255,255,255,1) 100%)
    .all
      display: flex
      .left
        width: 50%
        padding: 164px 116px 84px 0
        .text
          padding-bottom: 20px
          p
            font-weight: normal
            font-size: 16px
            line-height: 150%
            color: #373737
            padding-bottom: 40px
            span
              font-weight: 700
      .right
        padding-top: 80px
        width: 50%
        padding-left: 85px
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
            margin: 0 0 -50px -25px
@include breakpoint(medium)
  .screen
    .whatls
      .all.container
        flex-direction: column-reverse
        align-items: center
        .left
          width: 100%
          padding: 64px 0 0 0
          display: flex
          flex-direction: column
          align-items: center
          .text
            text-align: left
            padding: 0
        .right
          width: 100%
          padding-top: 50px
          display: flex
          justify-content: center
          padding-left: 0
          .wrapper
@include breakpoint(medium)
  .screen
    .whatls
      .all.container
        .left
          .text
            p
              font-size: 14px
        .right
          .wraper
            padding-top: 12px
            img
              margin: 0 0 -12px -12px
</style>