<template lang="pug">
  div(:id="isCourier ? widgetCourierParams.containerId : widgetParams.containerId")
    script(src="https://widget.pochta.ru/map/widget/widget.js")
    script(src="https://widget.pochta.ru/courier/widget/widget.js")
</template>

<script>
export default {
  props: {
    weight: {
      type: Number,
      default: 2500, // вес корзины в граммах
    },
    sumoc: {
      type: Number,
      default: 499000, // стоимость корзины в копейках
    },
    isCourier: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      widgetParams: {
        id: 8529, // прод - 8529, дев - 8931
        weight: this.weight,
        sumoc: this.sumoc,
        callbackFunction: this.getWidgetPochta,
        containerId: 'ecom-widget',
      },
      widgetCourierParams: {
        id: 8530, // прод - 8530, дев - 8932
        weight: this.weight,
        sumoc: this.sumoc,
        callbackFunction: this.getWidgetPochta,
        containerId: 'ecom-widget-courier',
      },
    }
  },
  watch: {
    isCourier() {
      this.ecomStartWidget()
    },
  },
  mounted() {
    setTimeout(() => {
      this.ecomStartWidget()
    }, 500)
  },
  methods: {
    getWidgetPochta(data) {
      const params = { delivery_amount: 0 }
      params.address = `${data.indexTo}, ${data.regionTo}, ${data.areaTo}, ${data.cityTo}, ${data.addressTo}`
      params.address = params.address.replace('null, ', '')
      if (data.cashOfDelivery) params.delivery_amount = data.cashOfDelivery / 100

      this.$emit('widget', params)
    },
    ecomStartWidget() {
      if (!window) return
      if (this.isCourier) window.courierStartWidget(this.widgetCourierParams)
      else window.ecomStartWidget(this.widgetParams)
    },
  },
}
</script>

<style lang="sass" scoped>
  #ecom-widget
    width: 100%
    height: 350px
    background: $fon
    margin-bottom: 30px
  #ecom-widget-courier
    width: 100%
    height: 380px
    margin-bottom: 30px

  @include breakpoint(medium)
    #ecom-widget
      margin-bottom: 10px
</style>