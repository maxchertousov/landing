export default function errors(context, error) {
  if (!error.response) return context.commit('setError', 'Неизвестная ошибка. Обратитесь в техподдержку')
  switch (error.response.status) {
    case 500:
      context.commit('setError', 'Ошибка сервера. Обратитесь в техподдержку')
      break
    case 400:
      context.commit('setError', error.response.data.errors.error)
      break
    case 401:
      context.commit('setError', error.response.data.errors.error)
      break
    case 403:
      context.commit('setError', error.response.data.errors.error)
      break
    case 404:
      context.commit('setError', error.response.data.errors.error)
      break
    default:
      context.commit('setError', 'Неизвестная ошибка. Обратитесь в техподдержку')
  }

  throw error
}

export { errors }