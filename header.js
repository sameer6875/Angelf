
    // Function to toggle the navigation menu
    function toggleNav() {
        var navbarNav = document.getElementById("navbarNav");
        if (navbarNav.classList.contains("show")) {
            navbarNav.classList.remove("show");
        } else {
            navbarNav.classList.add("show");
        }
    }

    // Add an event listener to the button
    var toggleButton = document.querySelector(".navbar-toggler");
    toggleButton.addEventListener("click", toggleNav);

