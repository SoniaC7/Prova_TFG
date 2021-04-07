<template>  
  <div class="easy">
    <h1> Level 1 </h1>
   <div v-show="!this.finish_level">
				<h2 class="mb-8"> Select the ones you think are posted on social media</h2> 
      
				<div v-if="this.media_right" >
					<div class="column" >
						<img id="mediaId" :src="this.media_image" v-on:click="increment_score_win(index)"/>
					</div>
					{{ log(index) }}
					<div class="column">
						<img id="realId" :src="this.real_image" v-on:click="increment_score_lose(index)"/>
					</div>
				</div> 
        
				<div v-else >
					<div class="column">
						<img id="realId" :src="this.real_image" v-on:click="increment_score_lose(index)"/>
					</div>

					<div class="column" >
						<img id="mediaId" :src="this.media_image" v-on:click="increment_score_win(index)"/>
					</div>
				</div>


        <div class="bottom">
          <div class="ma-2" >
            <h4> Accuracy </h4>
            <div> {{ accuracy_value }}% </div>
            <v-progress-linear
              color="green"
              v-model="accuracy_value"
              height="10"
              striped
              rounded
              style="border: 1px solid black;"
            ></v-progress-linear>
            <!--<div class="progress-bar">
              <div class="percentatge" :style="{'width' : progress + '%'}"></div>
            </div>-->
          </div>

          <br>
          <div class="btn-section">
            <v-btn v-bind:disabled="!image_clicked" v-bind="buttonsTheme" v-on:click="next()" > Next </v-btn>
          </div>
          
          
          <v-btn v-show="!this.finish_level" style="font-size: 10px" v-bind="buttonsTheme" class="my-6 mt-10" v-on:click="back_to_menu()"> MENU </v-btn>
        </div>  
  	</div>
			<div v-show="this.finish_level">
				<br>
				<h2> Congrats! You have finished the level </h2>
				<div v-show="this.badge_earned">
					<h2> You earned a new badge! </h2>
					<div class="img-section">
						<img :src="badges[0].example" >
					</div>
				</div>
				<v-row align="center">
          <v-col
            cols="12"
            sm="6"
          >
              <v-btn-toggle style="flex-direction: column; width: 60%;" background-color="rgb(255, 0, 0, 0)">
              <v-btn style="font-size: 20px" v-bind="buttonsTheme" class="my-6" v-for="section in sections" :to="section.to" :key="section.title" v-on:click="level_completed_method()">{{ section.title }}</v-btn>
              </v-btn-toggle>
          </v-col>
        </v-row> 
		  </div> 
</div>
</template> 
<style scoped>
    .bottom{
      position: relative;
      /*border: 3px solid green;*/
      margin-top: 60%; /*si es amb ordinador 50% */ 
      margin-left: 10%;
      width: 80%;
    }
    .column img {
      width: 75%; /*si es amb ordinador 50%*/
      height: 75%; /*si es amb ordinador 50%*/
      
      /*width: 216px;
      height: 286px;   si es amb ordinador s'ha de fer la imatge mes petita*/
      margin: 0 auto;
      border-radius: 5% !important;
      overflow: hidden;
    }
    .column{
      float: left;
      width: 50%;
      height:100%;
      padding: 5px;
      /*border: 3px solid blue;*/
    }

    .img-section::after{
      content: "";
      clear: both;
      display: table; 
    }
</style>

<script>
  export default {
    name:'Easy',
    data: () => ({ 
      index: 1,
      i_clicked: 1,
      total_images: 15,
      fol_name: '',
      score: 0,
      progress: 0,
      accuracy:0,
      num_correct_answers:0,
      total_answers:0,
      finish_level: false,
      badge_earned: false,
      msg_win: false,
      msg_lose: false,
      media_right: false,
      image_clicked: false,
      
      media_image: require('../assets/images/media/easy/1/media.png'),
      real_image: require('../assets/images/media/easy/1/real.png'),

      sections: [
        { title: ' Home ', to:'/'},
        { title: ' Game ', to:'/game'}
      ] 
    }),
    computed:{
      /*progressed(){
          return this.progress.toFixed();
      },*/
      accuracy_value(){
          return this.accuracy.toFixed();
      },
      buttonsTheme(){
          return this.$store.state.buttonsTheme;
      },
      badges(){
            return this.$store.state.badges;
      }
    }, 
    
    methods:{
        log(message){
            console.log(message);
        },
        reset_values(){
          this.index = 1;
          this.i_clicked= 1;
          this.total_images= 15;
          this.fol_name= '';
          this.score= 0;
          this.progress= 0;
          this.accuracy= 0;
          this.total_answers= 0;
          this.num_correct_answers= 0;
          this.finish_level= false;
          this.badge_earned= false;
          this.msg_win= false;
          this.msg_lose= false;
          this.media_right= false;
          this.image_clicked= false;

          this.media_image= require('../assets/images/media/easy/1/media.png');
          this.real_image= require('../assets/images/media/easy/1/real.png');

        },
        show_badges(){
            this.$store.commit('show_badges');
        },
        badge_earned_method(id){
            this.$store.commit('badge_earned',id);
        },
        level_completed_method(){
          this.reset_values();
          this.$store.commit('level_completed');
          this.$parent.reset_values();
          //this.$store.commit('reset_level_completed');
        },
        back_to_menu(){
          this.reset_values();
          this.$parent.reset_values();
        },
        add_border(media_clicked){
          if(media_clicked)document.getElementById("mediaId").style.border = "2px solid black";
          else document.getElementById("realId").style.border = "2px solid black";
        },
        remove_borders(){
          document.getElementById("mediaId").style.border = "0px solid black";
          document.getElementById("realId").style.border = "0px solid black";
        },
        increment_score_win(index){
            if( this.i_clicked == index){
                this.score = this.score + 2;
                this.msg_win = true;
                this.num_correct_answers += 1;
                this.increment_progress();
                this.i_clicked += 1;
                this.add_border(true);
                this.image_clicked = true;
            }
        },
        increment_score_lose(index){
            if( this.i_clicked == index){
                this.score = this.score + 1;
                this.msg_lose = true;
                this.increment_progress();
                this.i_clicked += 1;
                this.add_border(false);
                this.image_clicked = true;
            }
        },
        increment_progress(){
          this.total_answers += 1;
          this.set_accuracy();
            if (this.progress < 100)
                this.progress = Math.round((this.score / this.total_images /2) * 100);
            
        },
        set_accuracy(){
          this.accuracy = Math.round((this.num_correct_answers / this.total_answers ) * 100);
        },
        getImageMedia(index){
            var in_string = index.toString();
            this.fol_name = require('../assets/images/media/easy/'+ in_string + '/media.png');
            return this.fol_name;
        },
        getImageReal(index){
            var in_string = index.toString();
            this.fol_name = require('../assets/images/media/easy/'+ in_string + '/real.png');
            return this.fol_name;
        },
        next(){
            
            this.remove_borders();
            this.image_clicked = false;
            this.index = this.index + 1;
            this.log(this.index);
            this.log(this.score);
            
            this.msg_win = false;
            this.msg_lose = false;
            
            this.media_right= Math.random() < 0.5;
            this.log(this.media_right);

            if(this.index <= this.total_images){
                this.media_image = this.getImageMedia(this.index);
                this.real_image = this.getImageReal(this.index);
            }

            else{
                this.finish_level = true;
                if(this.progress == 100){
                    this.badge_earned = true;
                    this.badge_earned_method(0);
                }
            }
        }
    }
  }
</script>