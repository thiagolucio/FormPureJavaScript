var filterField = document.querySelector("#table-filter");

filterField.addEventListener("input", function() {
    var users = document.querySelectorAll("user");

    if (this.value.length > 0) {
        for(var i=0; i < users.length; i++) {
            var user = users[i];
            var tdName = user.querySelector(".info-name");
            var name = tdName.textContent;
            var expression = new RegExp(this.value, "i");

            if(!expression.test(name)) {
                user.classList.add("invisible");
            } else {
                user.classList.remove("invisible");
            }
        }
    } else {
        for (var i=0; i < users.length; i++) {
            var user = users[i];
            user.classList.remove("invisible");
        }
    }
});
