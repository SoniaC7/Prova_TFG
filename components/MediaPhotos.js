const easy = Vue.createApp({
    data(){
        return {
           index: 1,
           fol_name: '',
           score: 0
        }
    },
    methods:{
        log(message){
            console.log(message);
        },
        increment_score(){
            this.score = this.score + 1;
        },
        mark(el) {
            el.style.border = "1px solid green";
        },
        getImageMedia(index){
            in_string = this.index.toString();
            this.fol_name = './assets/images/media/easy/'+ in_string + '/media.png';
            return this.fol_name;
        },
        getImageReal(index){
            in_string = this.index.toString();
            this.fol_name = './assets/images/media/easy/'+ in_string + '/real.png';
            return this.fol_name;
        },
        next(){
            this.index = this.index + 1;
        }
    }
})
