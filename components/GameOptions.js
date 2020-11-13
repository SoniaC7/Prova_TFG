app.component('game-options',{
    template:
    /*html*/
    `<div class="btn-section">
        <button v-for="option in options" v-on:click="changePage(option)">{{ option }}</button>
    </div>`,
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