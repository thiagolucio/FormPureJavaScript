/*Titulo da Pagina injetado*/
var title = document.querySelector(".title");
title.textContent = "Título Injetado da Página";

/*Subtitulo da Pagina*/
var subTitle = document.querySelector(".subTitle");
subTitle.textContent = "Novo subtitulo small da pagina injetado";

/*Titulo da tabela*/
var tableName = document.querySelector(".table-name");
tableName = "Título Injetado da Tabela";

/*pegando toda tr de usuario*/
var users = document.querySelectorAll(".users");
    for (var i=0; i < users.lenght; i++) {
        var user = users[i];

        /*pegando conteudo de tds nome, peso, altura, perc gordura do usuario*/
        var tdName = user.querySelector(".info-name");
        var name = tdName.textContent;

        var tdWeight = user.querySelector(".info-weight");
        var weight = tdWeight.textContent;

        var tdHeight = user.querySelector(".info-height");
        var height = tdHeight.textContent;

        var tdImc = user.querySelector(".info-imc");

        /*validacao peso e altura*/
        var validWeight = validationWeight(weight);
        var validHeight = validationHeight(height);

        //valida peso
        if(!validWeight) {
            validWeight = false;
            tdWeight.textContent = "Peso Inválido.";
            user.classList.add("invalid-user");//add classe invalid-user
            tdImc.textContent = ("Não pode ser calculado."); //add texto de erro
        }

        //valida altura
        if(!validHeight) {
            validHeight = false;
            tdHeight.textContent = "Altura Inválida";
            user.classList.add("invalid-user"); //add classe invalid-user
            tdImc.textContent = ("Não pode ser calculado."); //add texto de erro
        }

        if (validWeight && validHeight) {
            var imc = calcImc(weight, height);
            tdImc.textContent = imc;
        }
        //valida peso
        function validationWeight(weight) {
            if (weight >= 0 && peso <= 1000) {
                return true;
            }else {
                return false;
            }
        }
            //valida altura
            function validationHeight(height) {
                if (height >=0 && height <=3.0) {
                    return true;
                }else {
                    return false;
                }
            }
            //calcula imc
            function calcImc(weight, height) {
                var imc = 0;
                imc = weight/ (height * height);
                return imc.toFixed(2); //retorna o imc
            }
    }
