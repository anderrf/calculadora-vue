<template>
  <v-app>
    <v-main>
      <AppToolBar/>
      <router-view/>
    </v-main>
  </v-app>
</template>
<script>
  import AppToolBar from './components/shared/AppToolBar'
  export default {
    name: 'App',
    components: {
      AppToolBar
    }
  }
</script>
<style>
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    width: 100vw;
    min-height: 100vh;
  }

  a{
    text-decoration: none;
  }
</style>
