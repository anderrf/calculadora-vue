<template>
    <v-container>
        <v-row>
            <v-col>
                <v-text-field class="centered-input" solo-inverted disabled :value="`${(hours < 10) ? ('0'+  hours) : hours}:${(minutes < 10) ? ('0'+  minutes) : minutes}:${(seconds < 10) ? ('0'+  seconds) : seconds}`"></v-text-field>
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
                <v-btn block color="secondary" @click="clearTime()">
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
                running: false,
                interval: null
            }
        },
        created(){
            this.clearTime();
        },
        methods: {
            stopOrPlay(){
                this.running = !this.running;
                if(this.running){
                    this.startRun();
                }
                else{
                    this.stopRun();
                }
            },
            clearTime(){
                this.hours = this.minutes = this.seconds = 0;
                if(this.running){
                    this.stopRun();
                    this.startRun();
                }
            },
            startRun(){
                this.interval = setInterval(this.addTime, 1000);
            },
            stopRun(){
                clearInterval(this.interval);
            },
            addTime(){
                this.seconds++;
                if(this.seconds === 60){
                    this.seconds = 0;
                    this.minutes++;
                }
                if(this.minutes === 60){
                    this.minutes = 0;
                    this.hours++;
                }
            }
        }
    }
</script>
<style scoped>
    .centered-input >>> input{
        text-align: center;
    }
</style>