import { errors } from './errors'

export const state = () => ({
  error: null,
  isPopUp: false,
  international_address: {},
  comment: null,
  price: 4990,
  order_info: null,
})

export const mutations = {
  setError(state, error) { // eslint-disable-line
    state.error = error // eslint-disable-line
  },
  setIsPopUP(state, isPopUp) { // eslint-disable-line
    state.isPopUp = isPopUp // eslint-disable-line
  },
  setInternationalAddress(state, {address, comment}) { // eslint-disable-line
    for (let key in address) state.international_address[key] = address[key] // eslint-disable-line
    state.comment = comment // eslint-disable-line
  },
  setPrice(state, price) { // eslint-disable-line
    state.price = price // eslint-disable-line
  },
  setOrderInfo(state, order_info) { // eslint-disable-line
    state.order_info = order_info // eslint-disable-line
  },
}

export const actions = {
  removeError(context) {
    context.commit('setError', null)
  },
  openPopUP(context, params) {
    context.commit('setIsPopUP', params)
  },
  async createOrders(context, params) {
    const response = await this.$axios.post('/orders/', params).catch((error) => {
      errors(context, error)
    })

    if (response.status === 201) {
      window.location.href = response.data.payment.confirmation_url
      context.commit('setError', null)
    }
  },
  async getActualPrice(context) {
    const response = await this.$axios.get('/orders/get-actual-price/').catch((error) => {
      errors(context, error)
    })

    context.commit('setPrice', response.data.price || 4990)
  },
  async getOrderInfo(context, params) {
    context.commit('setOrderInfo', null)
    const response = await this.$axios.post('/orders/get-order-info/', params).catch((error) => {
      errors(context, error)
    })

    if (response.status === 200) {
      context.commit('setOrderInfo', response.data)
      context.commit('setError', null)
    }
  },
}
