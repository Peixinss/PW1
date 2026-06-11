let lado1 = 3;
let lado2 = 3;
let lado3 = 3;

console.log("Lado 1: " + lado1);
console.log("Lado 2: " + lado2);
console.log("Lado 3: " + lado3);

if((lado1 == lado2) && (lado1 == lado3)){
    console.log("O triangulo é equilatro");
}
else if((lado1 != lado2) && (lado1!= lado3) && (lado2 !=lado3)){
    console.log("triagulo escaleno");
}
else{
    console.log("triagulo isosceles");
}