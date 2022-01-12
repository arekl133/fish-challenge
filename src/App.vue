<template>
  <div class="app">
    <div class="boxNav">
      <Navigation />
    </div>
    <div class="container">
      <router-view />
    </div>
    
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue'



export default {
  name: 'App',
  components: {
    Navigation
  }
}
</script>

<style>
@import url("https://fonts.google.com/icons?selected=Material%20Icons%20Outlined%3Amenu%3A");
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}
.app{
  width: 100%;
  height: auto;
  background-color: rgb(164, 170, 199);
}
.boxNav{
  width: 100%;
  height: 74px;
}

.container{
  width: 100%;
  height: auto;
  background-color: rgb(234, 234, 243);
}

</style>
