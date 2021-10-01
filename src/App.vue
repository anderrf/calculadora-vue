<template>
  <v-app>
    <v-main>
      <v-toolbar>
        <v-spacer></v-spacer>
        <router-link to="/calculadora">
          <v-btn icon>
            <v-icon>mdi-calculator</v-icon>
          </v-btn>
        </router-link>
        <router-link to="/cronometro">
          <v-btn icon>
            <v-icon>mdi-timer</v-icon>
          </v-btn>
        </router-link>
      </v-toolbar>
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
  }

  a{
    text-decoration: none;
  }

  .router-view{
    width: 50% !important;
  }
</style>
