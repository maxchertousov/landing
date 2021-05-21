<template lang="pug">
  nuxt
</template>

<script>
import { mapActions } from 'vuex'

export default {
  mounted() {
    this.$fb.enable()
    this.getActualPrice()
  },
  methods: {
    ...mapActions({
      getActualPrice: 'getActualPrice',
    }),
  },
}
</script>