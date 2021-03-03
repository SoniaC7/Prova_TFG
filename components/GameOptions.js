const shared_info ={
    badges: reactive({
        
        badge_1:{  
            id: 1,
            text: "Detective apprentice",
            example: "./assets/images/badges/apprentice.png",
            earned: false
        },
        badge_2:{
            id: 2,
            text: "Junior detective",
            example: "./assets/images/badges/apprentice_hat.png",
            earned: false
        }
    }),
}
const game = Vue.createApp({
    data(){
        return {
            options: ['Real vs Social Media', 'Fake photos', 'Badges'],
            badges: shared_info.badges
        }
    },
    methods:{
        changePage(option){

			if (option === 'Real vs Social Media') { window.location.href = "./instagram.html"; }
            if (option === 'Fake photos') { window.location.href = "./fake.html"; }
            if (option === 'Badges') { window.location.href = "./badges.html"; }
			
        },
        go_to_menu(){
            window.location.href = "./game.html";
        }
    }
})

