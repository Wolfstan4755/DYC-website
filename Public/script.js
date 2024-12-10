<<<<<<< HEAD
<<<<<<< HEAD
function toggleDropdown() {
    var dropdownContent = document.getElementById("dropdownContent");
=======
// script.js
function toggleDropdown() {
    var dropdownContent = document.getElementById("dropdown-content");
>>>>>>> 394079c (add js)
=======
function toggleDropdown() {
    var dropdownContent = document.getElementById("dropdownContent");
>>>>>>> 1ea482a (add to fix the drop down)
    if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none"; // Hide the dropdown
    } else {
        dropdownContent.style.display = "block"; // Show the dropdown
    }
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 1ea482a (add to fix the drop down)
}

// Optional: Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.style.display === 'block') {
                openDropdown.style.display = 'none';
            }
        }
    }
<<<<<<< HEAD
=======
>>>>>>> 394079c (add js)
=======
>>>>>>> 1ea482a (add to fix the drop down)
}