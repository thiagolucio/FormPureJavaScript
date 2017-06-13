var addButton = document.querySelector("#search-user");

addButton.addEventListener("click", function() {
    console.log("Buscando pacientes....");

    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function() {
        if(xhr.status == 200) {
            erroAjax.classList.add("invisible");
            var answer = xhr.answerText;
            var users = JSON.parse(answer);

            users.forEach(fucntion(user) {
                addUserInTable(user);
            });
        } else {
            var ajaxError = document.querySelector("!ajax-error");
                ajaxError.classList.remove("invisible");
        }
    });
    xhr.send();
});
