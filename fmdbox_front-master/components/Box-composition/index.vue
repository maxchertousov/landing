<template lang="pug">
  .screen
    section.wrap.container
      h2 Что входит в состав бокса?
      p Мы максимально ушли от распространённых аллергенов (кроме меда), исключили глютен и все животные продукты. Если у вас есть индивидуальные непереносимости, вы можете свериться с составом бокса ниже.
      components(:is="componentName")
      .bottom
        p Все составы простые и понятные, чтобы голодание проходило не только вкусно (мы действительно проделали очень большую работу, чтобы сделать по-настоящему вкусный продукт без химических добавок), но и полезно для организма!
        button.button-green(@click="click") Купить FMDBOX
</template>

<script>
export default {
  components: {
    BoxDesktop: () => import('./components/box-desktop.vue'),
    BoxMobile: () => import('./components/box-mobile.vue'),
  },
  data: () => ({
    componentName: '',
  }),
  mounted() {
    this.getComponentName()
    window.onresize = this.getComponentName
  },
  methods: {
    click() {
      this.$emit('click')
    },
    getComponentName() {
      if (window.innerWidth <= 768) {
        this.componentName = 'BoxMobile'
      } else {
        this.componentName = 'BoxDesktop'
      }
    },
  },
}
</script>

<style lang="sass" scoped>
  .screen
    padding: 100px 0
    h2
      margin-bottom: 50px
    p
      font-size: 25px
      line-height: 150%
      color: #7A7A7A
      width: 100%
      max-width: 825px
      margin-bottom: 60px
    .bottom
      display: flex
      justify-content: center
      align-items: center
      flex-direction: column
      p
        font-size: 16px
        line-height: 150%
        color: #7A7A7A
        text-align: center
  @include breakpoint(small)
    .screen
      padding-top: 30px
      padding-bottom: 30px
      h2
        margin-bottom: 20px
      p
        font-size: 18px
      .bottom
        p
          font-size: 14px
          text-align: center
          margin-bottom: 30px
</style>