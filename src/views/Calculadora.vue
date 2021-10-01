<template>
    <v-container>
        <v-row>
            <v-col>
                <v-input class="grey lighten-3" color="#000" disabled>
                    {{display}}
                </v-input>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-row>
                    <v-col>
                        <v-btn @click="adicionarAlgarismo(7)">7</v-btn>
                    </v-col>
                    <v-col>
                        <v-btn @click="adicionarAlgarismo(8)">8</v-btn>
                    </v-col>
                    <v-col>
                        <v-btn @click="adicionarAlgarismo(9)">9</v-btn>
                    </v-col>
                    <v-col>
                        <v-btn color="primary" @click="adicionarOperacao('+')">+</v-btn>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <v-btn @click="adicionarAlgarismo(4)">4</v-btn>
                    </v-col>
                    <v-col>
                        <v-btn @click="adicionarAlgarismo(5)">5</v-btn>
                    </v-col>
                    <v-col>
                        <v-btn @click="adicionarAlgarismo(6)">6</v-btn>
                    </v-col>
                    <v-col>
                        <v-btn color="primary" @click="negativar()">-</v-btn>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <v-btn @click="adicionarAlgarismo(1)">1</v-btn>
                    </v-col>
                    <v-col>
                        <v-btn @click="adicionarAlgarismo(2)">2</v-btn>
                    </v-col>
                    <v-col>
                        <v-btn @click="adicionarAlgarismo(3)">3</v-btn>
                    </v-col>
                    <v-col>
                        <v-btn color="primary" @click="adicionarOperacao('*')">*</v-btn>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <v-btn @click="fracionar()">.</v-btn>
                    </v-col>
                    <v-col>
                        <v-btn @click="adicionarAlgarismo(0)">0</v-btn>
                    </v-col>
                    <v-col>
                        <v-btn>=</v-btn>
                    </v-col>
                    <v-col>
                        <v-btn color="primary" @click="adicionarOperacao('/')">/</v-btn>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <v-btn block color="error" @click="limpar()">CE</v-btn>
                    </v-col>
                    <v-col>
                        <v-btn block color="success" @click="executarOperacao()">=</v-btn>
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
            display: '0',
            val1: null,
            val2: null,
            op: null
        }
    },
    methods: {
        limpar(){
            this.display = '0';
            this.val1 = this.val2 = this.op = null;
        },
        adicionarAlgarismo(num){
            if(num === 0 && this.display.includes('.')){
                this.display += num;
            }
            else{
                this.display = parseFloat(this.display + num.toString()).toString();
            }
        },
        adicionarOperacao(operador){
            if(this.op === null && this.val1 === null){
                this.op = operador;
                this.val1 = parseFloat(this.display);
                this.display = '0';
            }
            else if(this.display !== '0' && this.display !== '-' && this.op !== null && this.val1 !== null){
                this.executarOperacao();
            }
        },
        executarOperacao(){
            if(this.op !== null && this.val1 !== null){
                this.val2 = parseFloat(this.display);
                let resultado;
                switch(this.op){
                    case '+':
                        resultado = this.val1 + this.val2;
                        break;
                    case '-':
                        resultado = this.val1 - this.val2;
                        break;
                    case '*':
                        resultado = this.val1 * this.val2;
                        break;
                    case '/':
                        resultado = this.val1 / this.val2;
                        break;
                }
                this.display = resultado.toString();
                this.val1 = this.val2 = this.op = null;
            }
        },
        negativar(){
            if(this.display === '0' && this.val2 === null){
                this.display = '-';
            }
            else{
                this.adicionarOperacao('-');
            }
        },
        fracionar(){
            if(Number.isInteger(parseFloat(this.display))){
                this.display = this.display + '.';
            }
        }
    }
  }
</script>
<style scoped>

</style>