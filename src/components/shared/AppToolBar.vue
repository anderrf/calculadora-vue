<template>
    <div class="app-toolbar">
        <v-toolbar>
            <v-spacer></v-spacer>
            <router-link to="/calculadora">
                <v-btn icon color="green accent-1">
                    <v-icon>mdi-calculator</v-icon>
                </v-btn>
            </router-link>
            <router-link to="/cronometro">
                <v-btn icon color="indigo accent-1">
                    <v-icon>mdi-timer</v-icon>
                </v-btn>
            </router-link>
        </v-toolbar>
    </div>    
</template>
<script>
export default {
    name: 'AppToolBar'
}
</script>
<style scoped>

</style>