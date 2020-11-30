game.component('media-photos',{
    template:
    /*html*/
    `<div class="img-section">
        <div class="column">
            <input id="imageId" type="image" src="./assets/images/woman_3.jpg"  v-on:click="mark(this)"/>
        </div>
        <div class="column">
            <input id="imageId" type="image" src="./assets/images/woman_2.jpg"  v-on:click="mark(this)"/>
        </div>
        <!--<div class="column">
            <input id="imageId" type="image" src="./assets/images/woman_2.jpg" width="216" height="286" v-on:click="mark(this)"/>
        </div>-->
        <!--<button v-for="option in options" v-on:click="changePage(option)">{{ option }}</button>-->
    </div>`,
    data(){
        return {
           /* options: ['Real vs Instagram', 'Fake photos']*/
        }
    },
    methods:{
        mark(el) {
            el.style.border = "1px solid green";
        }
    }
})