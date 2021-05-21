<template lang="pug">
  .widget
    .flex-group
      .back(@click="close")
        include ./assets/back.svg
      h3 Доставка по России
    .flex-group.tab-group
      .tab(
        v-for="tab in tabs"
        :class="{active: tab.isCourier === isCourier}"
        @click="toggleIsCourier(tab.isCourier)"
      )
        span.radio
        p {{ tab.name }}
    WidgetPochta(
      v-if="isCourier"
      :weight="weight"
      :sumoc="total * 100"
      @widget="formatterOrder"
      :isCourier="isCourier"
      key="courierWidget"
    )
    WidgetPochta(
      v-if="!isCourier"
      :weight="weight"
      :sumoc="total * 100"
      @widget="formatterOrder"
      key="standartWidget"
    )
    button.button-orange(:class="{disabled: !address}" @click="arrangeDelivery") Оформить Доставку
</template>

<script>
import WidgetPochta from '@/components/WidgetPochta'

export default {
  components: {
    WidgetPochta,
  },
  props: {
    address: {
      type: String,
      default: '',
    },
    weight: {
      type: Number,
      default: 2500,
    },
    total: {
      type: Number,
      default: 4990,
    },
  },
  data() {
    return {
      isCourier: false,
      tabs: [
        { name: 'Доставка почтой', isCourier: false },
        { name: 'Курьерская доставка', isCourier: true },
      ],
    }
  },
  mounted() {
    this.$emit('remove-address')
  },
  methods: {
    toggleIsCourier(isCourier) {
      this.isCourier = isCourier
    },
    formatterOrder(val) {
      this.$emit('formatter-order', val)
    },
    arrangeDelivery() {
      let deliveryType = 'pickup'
      if (this.isCourier) deliveryType = 'delivery'
      this.$emit('arrange-delivery', deliveryType)
    },
    close() {
      this.$emit('close')
    },
  },
}
</script>

<style lang="sass" scoped>
  h3
    font-weight: 500
    color: $light-green

  .flex-group
    display: flex
    align-items: center
    margin-bottom: 36px
    &.tab-group
      margin-bottom: 32px

  .tab
    display: flex
    align-items: center
    cursor: pointer
    &:first-child
      margin-right: 90px
    p
      font-weight: 500
      font-size: 16px
      line-height: 20px
      color: $green
    .radio
      @include flex-center
      width: 20px
      height: 20px
      border: 1px solid #C1C0C0
      border-radius: 50%
      margin-right: 18px
      &::before
        @include pseudo($pos: relative)
        width: 12px
        height: 12px
        background: transparent
        border-radius: 50%
        transition: $time
    &.active
      .radio
        &::before
          background: $light-green

  .back
    margin: 2px 25px 2px 0
    &:hover
      cursor: pointer
      svg > *
        fill: $orange

  .button-orange
    width: 100%

  @include breakpoint(medium)
    h3
      font-weight: 700
      font-size: 25px

    .flex-group
      margin-bottom: 20px

    .back
      margin: 2px 12px 2px -10px
      width: 32px
      height: 32px
      padding: 6px
      svg
        width: 20px
        height: 20px

  @include breakpoint(small)
    .flex-group.tab-group
      display: grid
      grid-template-columns: 100%
      grid-gap: 16px

    .tab
      &:first-child
        margin-right: 0

  @include breakpoint(mini)
    .button-orange
      margin-top: 10px
      height: 48px
      font-size: 16px
</style>