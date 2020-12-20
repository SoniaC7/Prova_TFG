const level = Vue.createApp({
    data(){
        return {
            options: ['Easy', 'Medium', 'Difficult']
        }
    },
    methods:{
        changePage(option){

			if (option === 'Easy') { window.location.href = "./easy.html"; }
            if (option === 'Medium') { window.location.href = "./medium.html"; }
            if (option === 'Difficult') { window.location.href = "./difficult.html"; }
			
		}
    }
})