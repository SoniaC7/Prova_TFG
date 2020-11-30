const tips = Vue.createApp({
    data(){
        return {
            section: 'Game',
           tips: [
               {
                   text: "Check the background for bent or distorted parts because when something is \"pushed\" to look thinner the background may appear bent as well",
                   example: "./assets/images/tips/bent.jpg"
               },{
                   text: "Check the shadows",
                   example: "./assets/images/tips/shadow.jpg"
               },{
                   text: "Check the poses",
                   example: "./assets/images/tips/pose.jpg"
               }
            ]
        }
    },
    methods:{
		changePage(){ window.location.href = "./game.html"; }	
	}
})