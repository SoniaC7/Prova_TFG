<template>
    <div class="social"> 
        <h1 class="mb-3 mt-3" v-show="!this.option_selected"> Real vs Social Media</h1>
        <v-row align="center" v-show="!this.option_selected">
            <v-col
                cols="12"
            >
                <v-btn-toggle style="flex-direction: column;" background-color="rgb(255, 0, 0, 0)">
				  <v-btn style="font-size: 15px" v-bind="buttonsTheme" class="my-6" v-for="section in sections" v-on:click="get_Option(section.title)" :key="section.title">{{ section.title }}</v-btn>
                </v-btn-toggle>
            </v-col>
        </v-row> 

       <Easy v-show="this.sections[0].selected && !level_completed"></Easy>
       <Medium v-show="this.sections[1].selected && !level_completed"></Medium>
       <Difficult v-show="this.sections[2].selected && !level_completed"></Difficult>
        
        <div class="bottom">
        <v-btn v-show="!this.option_selected" style="font-size: 10px" v-bind="buttonsTheme" class="my-6 mt-10" v-on:click="reset_values()" > MENU </v-btn>
        </div>
    </div>
</template>
<style scoped>
   /* .bottom{
      position: relative;
      border: 3px solid green;
      margin-top: 40%; /*si es amb ordinador 50%  
      margin-left: 10%;
      width: 80%;
    }*/
</style>
<script>
  import Easy from '@/components/Easy.vue'
  import Medium from '@/components/Medium.vue'
  import Difficult from '@/components/Difficult.vue';

  export default {
    name:'Social',
    components:{
        Easy,
        Medium,
        Difficult
    },
    data: () => ({ 
        option_selected: false,
        sections: [
            {title: 'Level 1', selected:false}, 
            {title: 'Level 2',selected:false}, 
            {title: 'Level 3',selected:false}
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
        get_Option(option){
            this.option_selected = true;
            switch(option){
                case 'Level 1':
                    this.sections[0].selected = true;
                    break;
                case 'Level 2':
                    this.sections[1].selected = true;
                    break;
                case 'Level 3':
                    this.sections[2].selected = true;
                    break;
            }
        },
        reset_values(){
            this.option_selected = false;   
            this.sections[0].selected = false; 
            this.sections[1].selected = false; 
            this.sections[2].selected = false; 
            /*for(var i = 0; i <= this.sections.length;i++){
                this.sections[i].selected = false;   
            }*/
            this.$parent.reset_values();
            
            console.log(this.option_selected = false,  
            this.sections[0].selected = false,
            this.sections[1].selected = false,
            this.sections[2].selected = false,);
        }
    }
}
</script>