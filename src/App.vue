<template>
  <v-app id="app" >
      <v-main> 
        <router-view> </router-view>
      </v-main>
  </v-app>
</template>

<style >
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
}
body{
  background: rgb(152, 191, 248);
  /*border-bottom: 10px solid rgb(247, 190, 104);*/
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: rgb(152, 191, 248);
  /*border: 10px solid rgb(247, 190, 104);
  border-bottom: none;
  box-shadow: inset 0px 0px 16px rgba(0,0,0,.4);*/
  height: 100%;
  max-width: 1920px;
  display: block;
  margin: 0 auto;  
}


</style>
 
<script>
  export default {
      computed: {
        theme () {
          return(this.$vuetify.theme.dark) ? 'dark' : 'light'
        },
      }
  }
</script>