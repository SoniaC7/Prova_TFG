<template>
    <div class="badges"> 
        <h1 class="mb-3 mt-3"> Badges </h1>
        <div class="badge-section" >
            <div id="id_badges" class="column" v-for="badge in badges" :key="badge.id" >
                <div class="badge" style="white-space: break-spaces;">
                    {{ badge.text }} 
                    <br>
                    <div v-if="badge.earned" class="mt-2" >
                        <img :src="badge.example" >
                    </div>
                    <div v-else class="badge_not_earned mt-2" >
                        <img :src="badge.example" >
                    </div>
                </div>
            </div>
        </div>
        <v-container align="center" >
            <v-row align="center" style="width:100%;" no-gutters>
                <v-col
                    cols="12"
                    sm="6"
                    style="width:100%"
                >
                    <v-btn-toggle style="flex-direction: column; width: 60%;" background-color="rgb(255, 0, 0, 0)" >
                    <v-btn style="font-size: 20px" v-bind="buttonsTheme" class="my-6" v-for="section in sections" :to="section.to" :key="section.title" v-on:click=" reset()">{{ section.title }}</v-btn>
                    </v-btn-toggle>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<style>
    .badge_not_earned img{
        opacity: 0.5;
    }
    .column{
      float: left;
      width: 50%;
      height:100%;
      padding: 5px;
      /*border: 3px solid blue;*/
    }
    
    img {
      width: 108px;
      height: 143px;
      border: 1px solid black;
      border-radius: 5% !important;
      overflow: hidden;
    }
</style>
    
<script>
  export default {
    name:'Badges',
    data: () => ({ 
        sections: [
        { title: ' Home ', to:'/'},
        { title: ' Game ', to:'/game'}
      ]
    }),
    computed:
    {
        badges(){
            return this.$store.state.badges
        },
        buttonsTheme(){
          return this.$store.state.buttonsTheme;
        }
    }, 
    methods:
    {
        reset(){
            this.$parent.reset_values();
        }
    }
  }
</script>