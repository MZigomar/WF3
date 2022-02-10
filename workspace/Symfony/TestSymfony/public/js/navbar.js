var navbar = document.getElementById("navbar");

var links = [].slice.call(navbar.getElementsByClassName("link"));
for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function () {
        var current = [].slice.call(navbar.getElementsByClassName("active"));
        if (current.length > 0) {
            current[0].classList.remove("active");
        }
        this.classList.add("active");
        console.log(this);
    });
}