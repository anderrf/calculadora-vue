<template>
    <v-container>
        <v-row>
            <v-col>
                <v-text-field class="centered-input" solo-inverted disabled :label="`${(hours < 10) ? ('0'+  hours) : hours}:${(minutes < 10) ? ('0'+  minutes) : minutes}:${(seconds < 10) ? ('0'+  seconds) : seconds}`"></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-btn v-if="running" block color="error" @click="stopOrPlay()">
                    <v-icon>mdi-pause</v-icon>
                </v-btn>
                <v-btn v-else block color="success" @click="stopOrPlay()">
                    <v-icon>mdi-play</v-icon>
                </v-btn>
            </v-col>
            <v-col>
                <v-btn block color="secondary">
                    <v-icon>mdi-timer-sand-empty</v-icon>
                </v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
    export default {
        name: 'Cronometro',
        data(){
            return{
                hours: 0,
                minutes: 0,
                seconds: 0,
                running: false
            }
        },
        methods: {
            stopOrPlay(){
                this.running = !this.running;
            }
        }
    }
</script>
<style scoped>
    .centered-input >>> input {
      text-align: center
    }
</style>