/*Formulario para adicionar usuario*/

var btnAddUser = document.querySelector('#add-user');

btnAddUser.addEventListener('click', function(event) {
    /*prevenir o evento default, comportamernto default do browser*/
    event.preventDefault();
    var form = document.querySelector('#formAddUser');

    //var usuario recebendo funcao
    var user = getUserFromForm(form);

    var errors = validationUser(user);
    /*se os erros encontrados forem maior que zero dispare mensagens de erro*/
    if(errors.length >0) {
        showErrorMsg(errors);
        return;
    }
    addUserInTable(user);
    form.reset();

    /*resetando mensagem de erros usando um innerHTML vazio*/
    var errorCleanMsg = document.querySelector("#errorMsg");
    errorCleanMsg.innerHTML = '';
});

/*funcao para adicionar usuario na tabela*/
function addUserInTable(user) {
    var userTr = mountTr(user); //monta a TR do usuario
    var table = document.querySelector("#table-users"); //busca tabela de usuarios
    table.appendChild(userTr); //adiciona nova linha a tabela de usuarios
}

/*funcao de tratamento de mensagem de errors*/
function showErrorMsg(errors) {
    var ul = document.querySelector("#errorMsg");
    ul.innerHTML = '';
    errors.forEach(function(error) {
        var li = document.createElement('li');
        li.textContent = error;
        ul.appendChild(li);
    });
}

/*capturando as informacoes dos campos input no form e criando variaveis para receber*/
    function getUserFromForm(form) {
        var user = {
        var name: form.name.value,
        var weight: form.weight.value,
        var height: form.height.value,
        var fat: form.fat.value,
        imc: calcImc(form.weight.value, form.height.value)
    }
    return user;
}

/*Montando a tabela*/
function mountTr(user) {
    var userTr = document.createElement("tr");
    userTr.classList.add('user');

    userTr.appendChild(mountTr(user.name, 'info-name'));
    userTr.appendChild(mountTr(user.weight, 'info-weight'));
    userTr.appendChild(mountTr(user.height, 'info-height'));
    userTr.appendChild(mountTr(user.fat, 'info-fat'));
    userTr.appendChild(mountTr(user.imc, 'info-imc'));

    return userTr;
}

function mountTd(data, class) {
    var td = document.createElement('td');
    td.textContent = data;
    td.classList.add(class);
    return td;
}

function validationUser(user) {
    var errors[];
    if (user.name == '') errors.push('Nome não pode ser vazio');
    if (!validationWeight(user.weight)) errors.push('Altura Inválida');
    if (user.weight.length == 0) errors.push('Altura não pode ser vazio');
    if (!validationHeight(user.height)) errors.push('Peso Inválido');
    if (user.height.length == 0) errors.push('Peso não pode ser vazio');
    if (user.fat.length == 0) errors.push('Gordura não pode ser vazia');
    return errors;
};
