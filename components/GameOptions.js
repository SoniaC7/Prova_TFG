const game = Vue.createApp({
    data(){
        return {
            options: ['Real vs Instagram', 'Fake photos']
        }
    },
    methods:{
        changePage(option){

			if (option === 'Real vs Instagram') { window.location.href = "./instagram.html"; }
			if (option === 'Fake photos') { window.location.href = "./fake.html"; }
			
		}
    }
})