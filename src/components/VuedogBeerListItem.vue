<template lang="html">
  <div class = "beerlistitem">
    <p>{{beer.name}}</p>
    <vuedog-beer-image :imageUrl = "beer.image_url"></vuedog-beer-image>
    <button v-on:click='displayInfo'>More Info &rarr;</button>
    <button v-if="!isFavourite" v-on:click="addFavourite">Add to Favourites</button>
    <button v-if="isFavourite" v-on:click="removeFavourite">Remove From Favourites</button>
  </div>
</template>

<script>
import { eventBus } from '@/main.js'
import VuedogBeerImage from '@/components/VuedogBeerImage'

export default {
  name: 'vuedog-beer-list-item',
  props: ['beer'],
  components: {
    'vuedog-beer-image': VuedogBeerImage,
  },
  methods: {
    displayInfo: function(){
      this.$store.commit('setSelectedBeer', this.beer)
    },

    addFavourite: function(){
      this.$store.commit('addFavourite', this.beer)
    },
    removeFavourite: function(){
      this.$store.commit('removeFavourite', this.beer)
    }
  },
  computed: {
    isFavourite(){
      return this.$store.getters.isFavourite(this.beer)
    }
  }
}
</script>

<style lang="css" scoped>

p {
  font: bold 13px Futura;
}

.beerlistitem {
  display: flex;
  flex-direction: column;
  padding: 20px;
  align-items: center;
  width: 150px;
  height: 225px;
  border-radius: 25px;
  border: 2px solid dodgerblue;
  background-color: white;
}

button {
  font: bold 11px Futura;
  text-decoration: none;
  background-color: #EEEEEE;
  color: #333333;
  padding: 2px 6px 2px 6px;
  border-top: 1px solid #CCCCCC;
  border-right: 1px solid #333333;
  border-bottom: 1px solid #333333;
  border-left: 1px solid #CCCCCC;
}
</style>
