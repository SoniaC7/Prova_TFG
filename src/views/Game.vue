<template>
    <div class="game" > 
        <h1 class="mb-3 mt-3" v-show="!this.option_selected || level_completed">Game </h1>
    <v-row align="center" v-show="!this.option_selected || level_completed">
      <v-col
        cols="12"
        sm="6"
      >
          <v-btn-toggle style="flex-direction: column;" background-color="rgb(255, 0, 0, 0)">
				  <v-btn style="font-size: 15px" v-bind="buttonsTheme" class="my-8" v-for="section in sections" v-on:click="get_Option(section.title)" :key="section.title">{{ section.title }}</v-btn>
          </v-btn-toggle>
      </v-col>
    </v-row> 

    <Social v-show="this.sections[0].selected"></Social>
    <Fake v-show="this.sections[1].selected"></Fake>
    <Badges v-show="this.sections[2].selected"></Badges>
     
    <v-btn v-show="!this.option_selected || level_completed" style="font-size: 10px" v-bind="buttonsTheme" class="my-6 mt-10" v-on:click="back_to_menu()"> MENU </v-btn>

  </div>
</template>
<script>
  import Social from '@/components/Social.vue'
  import Fake from '@/components/Fake.vue'
  import Badges from '@/components/Badges.vue'
  import Swal from 'sweetalert2/dist/sweetalert2.js'
  import 'sweetalert2/src/sweetalert2.scss'

  export default {
    name:'Game',
    components:{
        Social,
        Fake,
        Badges
    },
    data: () => ({ 
      option_selected: false,
      sections: [
          {title:'Real vs Social Media', selected:false},
          {title:'Fake photos', selected:false},
          {title:'Badges', selected:false},
        ],
    }),
    computed:{
        buttonsTheme(){
          return this.$store.state.buttonsTheme;
        },
        level_completed(){
          return this.$store.state.level_completed;
        }
    },
    methods:{
      reset_values(){
        this.$store.commit('reset_level_completed');
        this.option_selected = false;   

        this.sections[0].selected = false; 
        this.sections[1].selected = false; 
        this.sections[2].selected = false; 
        /*for(var i = 0; i <= this.sections.length;i++){
           
        }*/
        console.log(this.option_selected = false,  
        this.sections[0].selected = false,
        this.sections[1].selected = false,
        this.sections[2].selected = false);

        
      },
      get_Option(section){
        this.option_selected = true;
        console.log(this.option_selected);
        
        switch(section){
          case 'Real vs Social Media':
            this.sections[0].selected = true;
            break;
          case 'Fake photos':
            Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Not available yet'
          })
            /*this.sections[1].selected = true;*/
            this.reset_values();
            break;
          case 'Badges':
            this.sections[2].selected = true;
            break;
        }
      },
      back_to_menu(){
        this.reset_values();
        this.$router.push("/");
      }
    }
  }
</script>