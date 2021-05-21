<template lang="pug">
  .international-delivery
    .flex-group
      .back(@click="close")
        include ./assets/back.svg
      h3 Международная доставка
    p *Международная доставка рассчитывается и оплачивается отдельно.
    form(@submit.prevent="arrangeDelivery")
      .input-group
        label Страна
        input(
          type="text"
          placeholder="Введите название вашей страны"
          v-model.trim="address.country"
          required
        )
      .input-group
        label Регион
        input(
          type="text"
          placeholder="Введите название региона"
          v-model.trim="address.region"
        )
      .input-group
        label Город
        input(
          type="text"
          placeholder="Введите название города"
          v-model.trim="address.city"
          required
        )
      .address-grid
        .input-group
          label Адрес
          input(
            type="text"
            placeholder="Введите улицу"
            v-model.trim="address.street"
            required
          )
        .input-group
          label Дом
          input(
            type="text"
            placeholder="Номер дома"
            v-model.trim="address.house"
            required
          )
        .input-group
          label Квартира
          input(
            type="text"
            placeholder="Квартира"
            v-model.trim="address.flat"
          )
      .input-group
        label Индекс
        input(
          type="text"
          placeholder="Введите индекс"
          v-model.trim="address.index"
          required
        )
      .input-group
        label Ваш комментарий к доставке
        textarea(
          type="text"
          placeholder="Введите комментарий или ваш международный номер телефона"
          v-model.trim="comment"
          maxlength="1024"
        )
      button.button-orange(type="submit") Оформить Доставку
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  data() {
    return {
      address: {
        index: '',
        country: '',
        region: '',
        city: '',
        street: '',
        house: '',
        flat: '',
      },
      comment: '',
    }
  },
  computed: {
    international_address() {
      return this.$store.state.international_address
    },
    comment_read() {
      return this.$store.state.comment
    },
  },
  mounted() {
    this.$emit('remove-address')
    for (let key in this.international_address) this.address[key] = this.international_address[key] // eslint-disable-line
    this.comment = this.comment_read
  },
  methods: {
    ...mapMutations({
      setInternationalAddress: 'setInternationalAddress',
    }),
    close() {
      this.$emit('close')
    },
    arrangeDelivery() {
      this.formatAddress()
      this.$emit('arrange-delivery', 'international_delivery')
    },
    formatAddress() {
      const arr = []
      const params = {}

      for (const key in this.address) { // eslint-disable-line
        if (this.address[key]) arr.push(this.address[key])
      }
      params.address = String(arr).replace(/,/g, ', ')

      if (this.comment) params.comment = this.comment

      this.setInternationalAddress({ address: this.address, comment: this.comment })
      this.$emit('formatter-order', params)
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

  .back
    margin: 2px 25px 2px 0
    &:hover
      cursor: pointer
      svg > *
        fill: $orange

  .button-orange
    margin-top: 20px
    width: 100%

  .international-delivery
    p
      color: $green
      margin-bottom: 40px

  .address-grid
    display: grid
    grid-template-columns: 1fr 170px 160px
    grid-gap: 0 20px

  @include breakpoint(medium)
    h3
      font-weight: 700
      font-size: 25px

    .international-delivery
      p
        color: $green
        margin-bottom: 30px

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

    .address-grid
      grid-template-columns: 1fr 1fr
      grid-template-areas: 'street street' 'house flat'
      & > :nth-child(1)
        grid-area: street
      & > :nth-child(2)
        grid-area: house
      & > :nth-child(3)
        grid-area: flat

  @include breakpoint(mini)
    .button-orange
      margin-top: 10px
      height: 48px
      font-size: 16px
</style>