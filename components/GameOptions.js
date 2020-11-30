const game = Vue.createApp({
    data(){
        return {
            options: ['Real vs Social Media', 'Fake photos']
        }
    },
    methods:{
        changePage(option){

			if (option === 'Real vs Social Media') { window.location.href = "./instagram.html"; }
			if (option === 'Fake photos') { window.location.href = "./fake.html"; }
			
		}
    }
})