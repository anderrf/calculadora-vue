<template>
    <v-container>
        <v-row>
            <v-col>
                <v-input class="grey lighten-3" color="#000">{{display}}
                </v-input>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-row>
                    <v-col>
                        <v-btn>7</v-btn>
                    </v-col>
                    <v-col>
                        <v-btn>8</v-btn>
                    </v-col>
                    <v-col>
                        <v-btn>9</v-btn>
                    </v-col>
                    <v-col>
                        <v-btn color="primary">+</v-btn>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <v-btn>4</v-btn>
                    </v-col>
                    <v-col>
                        <v-btn>5</v-btn>
                    </v-col>
                    <v-col>
                        <v-btn>6</v-btn>
                    </v-col>
                    <v-col>
                        <v-btn color="primary">-</v-btn>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <v-btn>1</v-btn>
                    </v-col>
                    <v-col>
                        <v-btn>2</v-btn>
                    </v-col>
                    <v-col>
                        <v-btn>3</v-btn>
                    </v-col>
                    <v-col>
                        <v-btn color="primary">*</v-btn>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <v-btn>.</v-btn>
                    </v-col>
                    <v-col>
                        <v-btn>0</v-btn>
                    </v-col>
                    <v-col>
                        <v-btn>=</v-btn>
                    </v-col>
                    <v-col>
                        <v-btn color="primary">/</v-btn>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <v-btn block color="error">CE</v-btn>
                    </v-col>
                    <v-col>
                        <v-btn block color="success">=</v-btn>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>    
</template>
<script>
  export default {
    name: 'Calculadora',
    data(){
        return{
            display: 0,
            val1: null,
            val2: null
        }
    }
  }
</script>
<style scoped>
    
</style>