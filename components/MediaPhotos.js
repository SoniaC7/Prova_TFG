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
        getImageMedia(index){
            in_string = index.toString();
            this.fol_name = './assets/images/media/easy/'+ in_string + '/media.png';
            return this.fol_name;
        },
        getImageReal(index){
            in_string = index.toString();
            this.fol_name = './assets/images/media/easy/'+ in_string + '/real.png';
            return this.fol_name;
        },
        next(){
            this.index = this.index + 1;
            this.log(this.index);

            m_name = this.getImageMedia(this.index);
            document.getElementById('mediaId').src=m_name;

            r_name = this.getImageReal(this.index);
            document.getElementById('realId').src=r_name;
        }
    }
})
