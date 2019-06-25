<template>
  <div id="app">
    <vuedog-navbar/>
    <vuedog-header title = "VueDog"/>
    <vuedog-header v-if="!$store.getters.beers.length" title="LOADING..."/>
    <router-view id="view"/>
  </div>
</template>

<script>
import {eventBus} from '@/main'
import VuedogHeader from '@/components/VuedogHeader'
import VuedogNavBar from '@/components/VuedogNavBar'

export default {
  name: 'app',
  components: {
    'vuedog-header': VuedogHeader,
    'vuedog-navbar': VuedogNavBar
  },
  methods: {
    getBeers: function(){
      const promises = [1,2,3,4,5].map(num => {
        return fetch(`https://api.punkapi.com/v2/beers?page=${num}&per_page=80`)
        .then(res => res.json())
      })

      Promise.all(promises)
      .then(data => {
        const beers = data.reduce((flat, toFlatten) => flat.concat(toFlatten), [])
        this.$store.commit('setBeers', beers)
      })
    }

  },
  mounted(){
    this.getBeers()
  }
}
</script>

<style lang="css" scoped>
  #app {
    background-color: #6EC3F4;
  }

</style>
