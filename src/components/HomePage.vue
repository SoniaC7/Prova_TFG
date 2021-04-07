<template>  
  
<v-container >
  <v-img src="../assets/images/detective_hat.png"
   class="main_photo ms-4 mt-8"></v-img>

    <v-row class="mt-6">
      <v-col
        cols="12"
      >
          <v-btn-toggle style="flex-direction: column; width: 60%;" background-color="rgb(255, 0, 0, 0)">
          <v-btn style="font-size: 20px" v-bind="buttonsTheme" class="my-6" v-for="section in sections" :to="section.to" :key="section.title">{{ section.title }}</v-btn>
          </v-btn-toggle>
      </v-col>
    </v-row> 

    </v-container>
</template> 

<style scoped>
.main_photo{
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>
<script>
  import VueStar from 'vue-star'
  export default {
    name:'HomePage',
    components:{
      VueStar
    },
    data: () => ({ 
      selectedSection: 1,
      sections: [
        { title: ' Quiz ', to:'/quiz'},
        { title: ' Game ', to:'/game'}
      ] 
      }),
      computed:{
        buttonsTheme(){
          return this.$store.state.buttonsTheme;
        }
      },
      methods: {
        onResize () {
          this.windowSize = { x: window.innerWidth, y: window.innerHeight }
        },
      }
  }
</script>
