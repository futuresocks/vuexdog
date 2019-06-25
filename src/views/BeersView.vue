<template lang="html">
  <div class="beer-view" v-if="$store.getters.beers.length">
    <vuedog-beer-list :beers="$store.getters.beers"></vuedog-beer-list>
    <vuedog-beer-info v-show="$store.getters.selectedBeer" :beer="$store.getters.selectedBeer"></vuedog-beer-info>
  </div>
</template>

<script>
import { eventBus } from '@/main.js'
import VuedogBeerList from '@/components/VuedogBeerList'
import VuedogBeerInfo from '@/components/VuedogBeerInfo'

export default {
  mounted(){
    this.$store.commit('deselectBeer')
  },
  components: {
    "vuedog-beer-info": VuedogBeerInfo,
    "vuedog-beer-list": VuedogBeerList
  }
}
</script>

<style lang="css" scoped>

.beer-view {
  display: flex;
  flex-wrap: wrap;
}

</style>
