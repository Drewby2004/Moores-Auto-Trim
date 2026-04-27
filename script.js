const dropdownButtons = document.querySelectorAll(".dropdown-btn");

dropdownButtons.forEach(function(button) {
    button.addEventListener("click", function () {
        const dropdownContent = button.nextElementSibling;
        dropdownContent.classList.toggle("show");
    });
});