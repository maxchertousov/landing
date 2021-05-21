<template lang="pug">
  transition(name="fade")
    .pop-up-wrap(v-if="isPopUp" :class="{scroll: !showWidget && !showInternationalDelivery}")
      .pop-up
        form(v-if="!showWidget && !showInternationalDelivery" @submit.prevent="onSubmit")
          h3 Ваш заказ
          .product
            .name {{ product.name }}
            .count
              .minus(@click="sum(-1)")
                include ./assets/minus.svg
              span {{ product.count }}
              .plus(@click="sum(1)")
                include ./assets/plus.svg
            .price {{ intFormat(price) }} ₽

          p.error(v-if="error && !code") {{ error }}

          .input-group
            label Ваша фамилия
            input(
              type="text"
              placeholder="Введите вашу фамилию"
              v-model.trim="user.last_name"
              required
            )
          .name-group
            .input-group
              label Ваше имя
              input(
                type="text"
                placeholder="Введите ваше имя"
                v-model.trim="user.first_name"
                required
              )
            .input-group
              label Ваше отчество
              input(
                type="text"
                placeholder="Введите ваше отчество"
                v-model.trim="user.midlle_name"
                required
              )
          .input-group
            label Ваш E-mail
            input(
              type="email"
              placeholder="Введите ваш E-mail"
              v-model.trim="user.email"
              required
            )
          .input-group
            label Ваш телефон
            input(
              type="text"
              placeholder="+7 ("
              v-mask="'+7 (###) ###-##-##'"
              v-model="phone_mask"
              required
            )

          .address-group
            .input-address
              span.open(:class="{colon: user.address}" @click="showWidget = true") Выберите адрес доставки по России
              span.address(v-if="user.address && user.delivery_type !== 'international_delivery'") {{ user.address }}
            .input-address
              span.open(:class="{colon: user.address}" @click="showInternationalDelivery = true") Международная
                |  доставка* <span class="red">(доставки до Чехии, Украины и ОАЭ нет)</span>
              span.address(v-if="user.address && user.delivery_type === 'international_delivery'") {{ user.address }}

          .promo-code
            .promo-code-group
              .input-group
                label(:class="{error: error && code}") {{ error && code ? error : 'Промокод' }}
                input(
                  type="text"
                  placeholder="Введите ваш промокод"
                  v-model.trim="code"
                  @change="check"
                )
              p.info Если вы знаете промокод. Введите его и получите специальную цену
            .flex-group
              p.type(v-if="order_info && order_info.discount && order_info.discount.value")
                | {{ order_info.discount.description || 'Скидка' }}:
              p.discount(v-if="order_info && order_info.discount && order_info.discount.value")
                | {{ intFormat(order_info.discount.value) }}
                | {{ discount_types.get(order_info.discount.type) }}

          .total
            span Сумма:
            span {{ intFormat(total) }} ₽

          small.warning *Сумма доставки не входит в цену бокса и считается отдельно

          button.button-orange(:class="{disabled: disabled}") Оплатить заказ

        DeliveryWidget(
          v-if="showWidget"
          :address="user.address"
          :weight="weight"
          :total="total"
          @formatter-order="formatterOrder"
          @arrange-delivery="arrangeDelivery"
          @close="showWidget = false"
          @remove-address="remove"
        )

        InternationalDelivery(
          v-if="showInternationalDelivery"
          @formatter-order="formatterOrder"
          @arrange-delivery="arrangeDelivery"
          @close="showInternationalDelivery = false"
          @remove-address="remove"
        )

        .close(@click="close")
          include ./assets/close.svg
</template>

<script>
import { mapActions } from 'vuex'
import DeliveryWidget from './DeliveryWidget.vue'
import InternationalDelivery from './InternationalDelivery.vue'

export default {
  components: {
    DeliveryWidget,
    InternationalDelivery,
  },
  data() {
    return {
      product: {
        name: 'Марафон',
        count: 1,
        weight: 2500,
      },
      phone_mask: '',
      name: {
        last_name: '',
        first_name: '',
        midlle_name: '',
      },
      code: null,
      user: {
        user_name: '',
        count: 1,
        phone: '',
        email: '',
        address: '',
        delivery_amount: 0,
        delivery_type: 'pickup', // pickup, delivery, international_delivery
      },
      showWidget: false,
      showInternationalDelivery: false,
      comment: '',
      discount_types: new Map([
        ['default_discount', '%'],
        ['static_percent', '%'],
        ['default_dynamic_percent', '%'],
        ['custom_dynamic_percent', '%'],
        ['fixed_price', ' ₽'],
      ]),
    }
  },
  computed: {
    user_name() {
      return `${this.user.last_name} ${this.user.first_name} ${this.user.midlle_name}`
    },
    total() {
      if (this.order_info) return this.order_info.amount + this.user.delivery_amount
      return this.price * this.product.count + this.user.delivery_amount
    },
    weight() {
      return this.product.weight * this.product.count
    },
    isPopUp() {
      return this.$store.state.isPopUp
    },
    error() {
      return this.$store.state.error
    },
    price() {
      return this.$store.state.price
    },
    order_info() {
      return this.$store.state.order_info
    },
    disabled() {
      return this.user.last_name === ''
          || this.user.first_name === ''
          || this.user.midlle_name === ''
          || this.user.phone === ''
          || this.user.email === ''
          || this.user.address === ''
    },
  },
  watch: {
    phone_mask(str) {
      if (str !== '') this.user.phone = this.phone_mask.replace(/\D+/g, '')
    },
    user_name(str) {
      this.user.user_name = str
    },
  },
  methods: {
    ...mapActions({
      openPopUP: 'openPopUP',
      createOrders: 'createOrders',
      getOrderInfo: 'getOrderInfo',
    }),
    onSubmit() {
      if (this.disabled) return
      const params = { ...this.user }
      if (this.code) params.code = this.code
      if (this.comment) params.comment = this.comment

      this.createOrders(params)
    },
    sum(num) {
      if (num === -1 && this.product.count === 1) return
      this.product.count += num
      this.user.count = this.product.count
      this.user.address = ''
      this.user.delivery_amount = 0
      this.check()
    },
    intFormat(num) {
      return new Intl.NumberFormat('ru-RU').format(num)
    },
    close() {
      this.openPopUP(false)
    },
    formatterOrder(params) {
      this.user.address = params.address
      if (params.delivery_amount) this.user.delivery_amount = params.delivery_amount
      if (params.comment) this.comment = params.comment
    },
    arrangeDelivery(type) {
      if (!this.user.address) return

      this.deliveryType(type)
      this.showWidget = false
      this.showInternationalDelivery = false
    },
    deliveryType(type) {
      this.user.delivery_type = type
    },
    remove() {
      this.user.address = ''
      this.user.delivery_amount = 0
    },
    check() {
      const params = { count: this.product.count }
      if (this.code) params.code = this.code

      this.getOrderInfo(params)
    },
  },
}
</script>

<style lang="sass" scoped>
  .pop-up-wrap
    position: fixed
    top: 0
    left: 0
    @include flex-center
    width: 100vw
    height: 100vh
    background: rgba(12, 44, 10, 0.5)
    &.scroll
      padding: 60px 0
      overflow: auto
      align-items: flex-start
  .pop-up
    position: relative
    width: 700px
    max-width: calc(100vw - 30px)
    background: #FFFFFF
    box-shadow: 0px 0px 20px rgba(72, 72, 72, 0.25)
    border-radius: 20px
    padding: 40px 40px 50px
    transition: height $time

  h3
    font-weight: 500
    color: $light-green
    margin-bottom: 40px

  .product
    padding: 20px 0
    border-top: 1px solid #DFDFDF
    border-bottom: 1px solid #DFDFDF
    display: grid
    grid-template-columns: 1fr 110px 176px
    margin-bottom: 44px
    align-items: center
    font-size: 25px
    line-height: 32px
    grid-gap: 48px
  .name
    font-weight: 600
    font-size: 25px
    line-height: 32px
    color: #373737
  .count
    display: flex
    justify-content: space-between
    align-items: center
    .minus, .plus
      svg
        width: 100%
        height: 100%
      &:hover
        cursor: pointer
        svg > *
          stroke: #A2A2A2
  .total
    display: flex
    justify-content: space-between
    align-items: center
    font-weight: 700
    font-size: 25px
    line-height: 1
    color: #373737
    margin-bottom: 20px
    padding: 20px 0 0 0
    border-top: 1px solid #DFDFDF
    span
      &:first-child
        font-weight: 600

  .warning
    display: block
    font-size: 14px
    line-height: 1
    color: #959595
    margin-bottom: 34px

  .address-group
    margin-bottom: 24px
  .input-address
    padding: 6px 0
    font-size: 16px
    line-height: 24px
    display: grid
    grid-template-columns: auto 1fr
    grid-gap: 10px
    .open
      position: relative
      display: inline-block
      color: #373737
      &::before
        @include pseudo
        left: 0
        top: 24px
        width: 100%
        height: 1px
        background: #373737
      &:hover
        cursor: pointer
        &::before
          display: none
      &.colon
        &::after
          content: ':'
      .red
        color: red
  .button-orange
    width: 100%

  .close
    position: absolute
    top: 0
    right: -70px
    width: 25px
    height: 25px
    @include flex-center
    cursor: pointer
    &:hover
      svg > *
        stroke: $orange

  .fade-enter-active, .fade-leave-active
    transition: opacity .3s
  .fade-enter, .fade-leave-to
    opacity: 0

  .name-group
    display: grid
    grid-template-columns: 1fr 1fr
    grid-gap: 16px

  .promo-code
    .flex-group
      display: flex
      align-items: center
      justify-content: space-between
      padding: 10px 0
      min-height: 45px
      p
        color: $orange
        font-weight: 600
        font-size: 16px
        line-height: 1
        &.discount
          font-weight: 700
          font-size: 25px

  .promo-code-group
    display: grid
    grid-template-columns: 1fr 1fr
    grid-gap: 16px
    .input-group
      margin-bottom: 20px
      label
        &.error
          font-weight: 400
          color: #ff0000
    .info
      display: flex
      align-items: center
      margin-top: 26px
      padding: 0 20px 0 0
      height: 50px
      font-size: 14px
      line-height: 1.2
      color: #E6DE29

  @include breakpoint(medium)
    .pop-up-wrap
      padding: 60px 0
      overflow: auto
      align-items: flex-start
    .pop-up
      padding: 20px 20px 40px

    .close
      top: -45px
      right: 0

    h3
      font-weight: 700
      font-size: 25px
      margin-bottom: 20px

    .product
      padding: 15px 0
      grid-template-columns: 1fr 70px 76px
      margin-bottom: 35px
      font-size: 14px
      line-height: 21px
      grid-gap: 20px
    .name
      font-size: 14px
      line-height: 21px
    .count
      .minus, .plus
        width: 21px
        height: 21px
    .total
      font-size: 16px
      margin-bottom: 42px

    .address-group
      margin-bottom: 24px
    .input-address
      display: block
      .open
        text-decoration: underline
        &::before
          content: none
      .address
        display: block
        color: #7C7C7C
        line-height: 1.2
        padding-top: 10px

  @include breakpoint(small)
    .promo-code-group
      grid-template-columns: 100%
      grid-gap: 0
      .info
        display: block
        margin-top: 0
        padding: 0
        height: auto
    .name-group
      grid-template-columns: 1fr
      grid-gap: 0
  @include breakpoint(mini)
    .pop-up
      padding: 20px 20px 30px
    .product
      margin-bottom: 20px
    .total
      margin-bottom: 20px

    .button-orange
      margin-top: 10px
      height: 48px
      font-size: 16px

    .warning
      margin-bottom: 15px

  @media (max-height: 800px)
    .pop-up-wrap
      overflow: auto
      align-items: flex-start
      padding-top: 75px
      padding-bottom: 50px
</style>