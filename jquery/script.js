//quando tudo estiver pronto
$(document).ready(function() {
    $("#tela").hide();
    //Evento do botão
    $("#botao").click(function(){
        //ver como está o botão para fazer a ação adequada
        if($("#botao").text() == "Esconder"){
            //esconder a div
            $("#tela").hide();
            $(this).text("mostrar");
        } else {
            //Mostrar a div
            $("#tela").show();
            $(this).text("esconder");
        }
        });
    });
