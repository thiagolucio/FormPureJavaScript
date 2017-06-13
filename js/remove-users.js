var table = document.querySelector("#table-users");
table.addEventListener("dblclick", function(event) {
    event.target.parentNode.classList.add("fadeOut");
    setTimeout(function() {
        window.alert("Paciente será removido");
        event.target.parentNode.remove();
    }, 1000);
});
