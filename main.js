const index = Vue.createApp({
	data: function(){
		return{
			title: 'Game Title',
			sections: ['Quiz', 'Game']
		}
	},
	methods:{
		changePage(section){

			if (section === 'Quiz') { window.location.href = "./quiz.html"; }
			if (section === 'Tips') { window.location.href = "./tips.html"; }
			if (section === 'Game') { window.location.href = "./game.html"; }	
			
		}
	}
})