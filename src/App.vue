<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>
<script>
  export default {
    name: 'App'
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
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
