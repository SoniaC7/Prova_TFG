var quiz_questions = {
    questions: [
        {
            text: "When you see a photo do you go to the users' profile?",
            responses: [{text: "Yes", correct: true}, {text:"No"}]
        },{
            text: "How many seconds do you spend on each photo?",
            responses: [{text: "< 5s"}, {text:"> 5s", correct: true}]
        }
    ]
};

const quiz = Vue.createApp({
    data(){
        return {
            quiz: quiz_questions,
            questionIndex: 0,
            u_responses: Array(quiz_questions.questions.length).fill(false),
            sections: ['Tips', 'Game']
        }
    },
    computed:{
        total_score(){
            return this.u_responses.filter(function(val){return val}).length / quiz_questions.questions.length;
        }
    },
    methods:{
        next: function() {
            this.questionIndex++;
        },
        changePage(section){

			if (section === 'Quiz') { window.location.href = "./quiz.html"; }
			if (section === 'Tips') { window.location.href = "./tips.html"; }
			if (section === 'Game') { window.location.href = "./game.html"; }	
			
		}
        
    }
})