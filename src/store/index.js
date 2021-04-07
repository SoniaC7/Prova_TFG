import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    badges_count:0,
    badges:[
      {  
          id: 0,
          text: "Detective apprentice",
          example: require("../assets/images/badges/apprentice.png"),
          earned: false
      },
      {
          id: 1,
          text: "Detective in practice",
          example: require("../assets/images/badges/apprentice_hat.png"),
          earned: false
      },
      {
          id: 2,
          text: "Junior detective",
          example: require("../assets/images/badges/junior_detective.png"),
          earned: false
      },
      {
          id: 3,
          text: "1stº detective",
          example: require("../assets/images/badges/1st_degree.png"),
          earned: false
      },
      {
          id: 4,
          text: "2ndº detective",
          example: require("../assets/images/badges/2nd_degree.png"),
          earned: false
      },
      {
          id: 5,
          text: "Master detective",
          example: require("../assets/images/badges/master_detective.png"),
          earned: false
      }
    ],
    buttonsTheme:{
      color: "rgb(247, 190, 104)",
      elevation: 5,
      large:true,
    },
    level_completed: false
  },
  mutations: {
    badge_earned(state, id){
      state.badges[id].earned = true;
    },
    level_completed(state){
      state.level_completed = true;
    },
    reset_level_completed(state){
      state.level_completed = false;
    }
  },
  actions: {
  },
  modules: {
  }
})
