<template lang="pug">
  .root
    .content(:class="{blur: isPopUp}")
      ScreenTop(@click="openPopUp")
      WhatIs(@click="openPopUp")
      WhatIsInside
      BoxComposition(@click="openPopUp")
      WhyWork
      Reviews
      Advantages(@click="openPopUp")
      ScreenBottom(@click="openPopUp")
    PopUp
</template>

<script>
import ScreenTop from '@/components/ScreenTop'
import WhatIs from '@/components/WhatIs'
import WhatIsInside from '@/components/WhatIsInside'
import BoxComposition from '@/components/Box-composition'
import WhyWork from '@/components/Why-work'
import Reviews from '@/components/Reviews'
import Advantages from '@/components/Advantages'
import ScreenBottom from '@/components/ScreenBottom'
import PopUp from '@/components/PopUp'
import { mapActions } from 'vuex'

export default {
  components: {
    ScreenTop,
    WhatIs,
    WhatIsInside,
    BoxComposition,
    WhyWork,
    Reviews,
    Advantages,
    ScreenBottom,
    PopUp,
  },
  computed: {
    isPopUp() {
      return this.$store.state.isPopUp
    },
  },
  methods: {
    ...mapActions({
      openPopUP: 'openPopUP',
    }),
    openPopUp() {
      this.openPopUP(true)
      // window.ym(71778577, 'reachGoal', 'buy') // метрика работает только в режиме прода
    },
  },
}
</script>

<style lang="sass" scoped>
  .blur
    filter: blur(15px)
    height: 100vh
    overflow: hidden

  @include breakpoint(medium)
    .content
</style>