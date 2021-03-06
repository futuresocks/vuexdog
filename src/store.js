import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    beers: [],
    favourites: [],
    selectedBeer: null
  },
  mutations: {
    setBeers(state, beers){
      state.beers = beers
    },
    addFavourite(state, beer){
      state.favourites.push(beer)
    },
    setSelectedBeer(state, beer){
      state.selectedBeer = beer
    },
    deselectBeer(state){
      state.selectedBeer = null
    },
    removeFavourite(state, beer){
      const index = state.favourites.indexOf(beer)
      state.favourites.splice(index, 1)
    }
  },
  getters: {
    beers: state => state.beers,
    favourites: state => state.favourites,
    selectedBeer: state => state.selectedBeer,
    isFavourite: state => beer => state.favourites.includes(beer)
  }
})
