<template lang="html">
  <div>
    <vuedog-header title="Favourite Beers"></vuedog-header>
    <vuedog-no-favourites v-if="noFavourites"></vuedog-no-favourites>
    <div class="favourites-view" v-if="$store.getters.favourites.length">
      <vuedog-beer-list :beers="$store.getters.favourites"></vuedog-beer-list>
      <vuedog-beer-info v-show="$store.getters.selectedBeer" :beer="$store.getters.selectedBeer"></vuedog-beer-info>
    </div>
  </div>
</template>

<script>
import VuedogBeerList from '@/components/VuedogBeerList'
import VuedogBeerInfo from '@/components/VuedogBeerInfo'
import VuedogHeader from '@/components/VuedogHeader'
import VuedogNoFavourites from '@/components/VuedogNoFavourites'


export default {
  mounted(){
    this.$store.commit('deselectBeer')
  },
  computed: {
    noFavourites: function(){
      return this.$store.getters.favourites.length === 0
    }
  },
  components: {
    "vuedog-beer-info": VuedogBeerInfo,
    "vuedog-beer-list": VuedogBeerList,
    "vuedog-no-favourites": VuedogNoFavourites,
    "vuedog-header": VuedogHeader
  }
}
</script>

<style lang="css" scoped>

  .favourites-view {
    display: flex;
    flex-wrap: wrap;
  }

</style>
