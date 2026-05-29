//criando vetor
let num = new Array (3,5,2,1,4);
let temp = 0; // variavel temporaria
console.log(num);
//for para o ponteiro maior i
for(let i  = 0; i < num.length - 1; i++){
    //for para o ponterio menor j
    for(let j = i + 1; j < num.length; j++){
        // verificar se o maior esta depois
        if(num[j] < num[i]){
            temp = num[i];
            num [i] = num[j];
            num [j] = temp;

        }

        console.log(num);
    }
}