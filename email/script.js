//Função para criar as linhas da tabela
function adicionar(){
    //Pegar os campos
    let campoNome = document.getElementById("nome");
    let campoEmail = document.getElementById("email");
    let tabela = document.getElementById("tab_lista");

    //Criar os elementos
    //nova linha
    let trNova = document.createElement("tr");
    //novas colunas da nova linha
    let tdNome = document.createElement("td");
    tdNome.innerText = campoNome.value;
    let tdEmail = document.createElement("td");
    tdEmail.innerText = campoEmail.value;
    let tdRemover = document.createElement("td");

    let btnRemover = document.createElement("button");
    btnRemover.innerText = "X";

    //criar o evento de remover a linha para o X
    btnRemover.addEventListener("click", function(){
        //Pedir confirmação da ação de remover
        if(confirm("Deseja realmente remover este registro ?")){
            this.parentNode.parentNode.remove();
        }
     });

     //conectar os elementos aos outros - relação pai e filho
     tdRemover.appendChild(btnRemover);
     
     trNova.appendChild(tdNome);
     trNova.appendChild(tdEmail);
     trNova.appendChild(tdRemover);

     tabela.appendChild(trNova);

     //Limpar campos do formulario
     campoNome.value = "";
     campoEmail.value = "";

    }
