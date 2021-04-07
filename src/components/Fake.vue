<template>
    <div class="fake"> 
        <h1 class="mb-3 mt-3"> Fake </h1>
        <div class="btn-section">
				<v-btn v-for="option in options" v-on:click="get_Option(option.text)" :key="option.text">{{ option.text }}</v-btn>
		</div>
       <Easy v-show="this.options[0].selected"></Easy>
    </div>
</template>

<script>
  import Easy from '@/components/Easy.vue'

  export default {
    name:'Fake',
    components:{
        Easy
    },
    data: () => ({ 
        options: [
            {text: 'Easy', selected:false}, 
            {text: 'Medium',selected:false}, 
            {text: 'Difficult',selected:false}
        ]

    }),
    methods:{
        get_Option(option){
            switch(option){
                case 'Easy':
                    this.options[0].selected = true;
                    break;
                case 'Medium':
                    this.options[1].selected = true;
                    break;
                case 'Difficult':
                    this.options[2].selected = true;
                    break;
            }
        }
    }
    
  }
</script>