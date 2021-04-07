<template>
  <div class="tips">
        <h1 class="mb-3 mt-3"> Tips </h1>
            <ol style="list-style-type: none">
                <li class="mt-6  mr-6 mb-6" style="font-size:13px" v-for="tip in tips" :key="tip.id">
                        {{ tip.text }} 
                    <img :src="tip.example" width="216" height="286">
                            
                </li>
            </ol>
            <h2 class="mb-3 mt-6"> Great! Let's play!</h2>
            <v-btn style="font-size: 15px" v-bind="buttonsTheme" class="mb-2" :to="section[0].to"> {{ section[0].title }} </v-btn>
			
    </div>
</template>
<script>
  export default {
    name:'Tips',
    data: () => ({ 
      section: [
          {title:'Game', to:"/game"}
        ],
      tips: [
            {
                id: 0,
                text: "Check the background for bent or distorted parts because when something is \"pushed\" to look thinner the background may appear bent as well",
                example: require("../assets/images/tips/bent.jpg")
            },{
                id:1,
                text: "Check the shadows",
                example: require("../assets/images/tips/shadow.jpg")
            },{
                id:2,
                text: "Be aware that a body may look very different depending on the pose",
                example: require("../assets/images/tips/pose.jpg")
            }
        ]
    }),
    computed:{
      buttonsTheme(){
          return this.$store.state.buttonsTheme;
        }
    }
  }
</script>