function calcular(){
//função para calcular a média de duas notas

//Pegar os campos
var nota1 = document.getElementById('nota1');
var nota2 = document.getElementById('nota2');
var resultado = document.getElementById('resultado');

//Ler os valores dos campos e transformá-los em números
var n1 = Number(nota1.value);
var n2 = Number(nota2.value);

//Realizar o cálculo e colocar como valor do campo Resultado
resultado.value = (n1 + n2)/2;
}