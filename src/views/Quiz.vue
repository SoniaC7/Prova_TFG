<template>
  <div class="quiz">
    <h1 class="mb-3 mt-3"> Quiz </h1>
			<div v-for="(question,index) in questions" :key="question.id">
				<div v-show="index === questionIndex">
					<h2 style="font-size:18px">{{ question.text }}</h2>
					
          <ol style="list-style-type: none">
						<li class="mt-6  mr-6 mb-6" style="font-size:25px" v-for="response in question.responses" :key="response.id_r">
							<label>
								<input type="radio" 
									v-bind:value="response.correct" 
									v-bind:name="index" 
									v-model="u_responses[index]"
                  > {{response.text}}
							</label>
						</li>
					</ol>
          <v-btn style="font-size: 15px" v-bind="buttonsTheme" v-on:click="next"> Next question </v-btn>

          <v-btn style="font-size: 10px" v-bind="buttonsTheme" class="ma-10" :to="sections[2].to"> MENU </v-btn>
						
				</div>
			</div>
			<div v-show="questionIndex === questions.length">
				<h2 class="mb-6 mt-6">Congrats! You finished the quiz</h2>
					<div v-if="total_score< 1">
						<h2 class="mb-10 mt-10"> Here's some tips you can use to identify fake photos</h2>
            <v-btn style="font-size: 15px" v-bind="buttonsTheme" :to="sections[0].to"> {{ sections[0].title }}</v-btn>
					</div>
					<div v-else>
						<h2 class="mb-6 mt-6">Let's play!</h2>
            <v-btn style="font-size: 15px" v-bind="buttonsTheme" :to="sections[1].to"> {{ sections[1].title }}</v-btn>
					</div>
				
				<!--<p>
					Total score: {{ total_score }} 
				</p>-->
			</div>
  </div>
</template>
<script>
  export default {
    name:'Quiz',
    data: () => ({ 
      questions: [
        {
            id:0,
            text: "When you see a photo do you go to the users' profile?",
            responses: [{id_r:0,text: "Yes", correct: true}, {id_r:1,text:"No"}]
        },{
            id:1,
            text: "How many seconds do you spend on each photo?",
            responses: [{id_r:2,text: "< 5s"}, {id_r:3,text:"> 5s", correct: true}]
        },{
            id:2,
            text: "How many hours do you spend on social media in a day?",
            responses: [{id_r:4,text: "< 4h", correct: true}, {id_r:5,text:"> 4h"}]
        },{
            id:3,
            text: "Are you satisfied with your body?",
            responses: [{id_r:6,text: "Yes", correct: true}, {id_r:7,text:"No"}]
        },{
            id:4,
            text: "From all the people you follow, how many are models or influencers?",
            responses: [{id_r:8,text: "< 50%", correct: true}, {id_r:9,text:"> 50%"}]
        }
      ],
      questionIndex: 0,
      u_responses: Array(5).fill(false),
      sections: [
        { title: 'Tips', to:'/tips'},
        { title: 'Game', to:'/game'},
        { title: 'Home', to:'/'}
        ]
    }),
    computed:{
        total_score(){
            return this.u_responses.filter(function(val){return val}).length / 5;
        },
        buttonsTheme(){
          return this.$store.state.buttonsTheme;
        }
    },
    methods:{
        next: function() {
            this.questionIndex++;
        }
    }
  }
</script>