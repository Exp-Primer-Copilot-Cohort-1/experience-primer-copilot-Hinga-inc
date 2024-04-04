function skillsMember() {
    var path = window.location.pathname;
    if (path == "/member") {
        var skills = document.getElementsByClassName("skills");
        for (var i = 0; i < skills.length; i++) {
            if (skills[i].textContent == "N/A") {
                skills[i].style.color = "red";
            }
        }
    }
}