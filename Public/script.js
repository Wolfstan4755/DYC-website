<<<<<<< HEAD
function toggleDropdown() {
    var dropdownContent = document.getElementById("dropdownContent");
=======
// script.js
function toggleDropdown() {
    var dropdownContent = document.getElementById("dropdown-content");
>>>>>>> 394079c (add js)
    if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none"; // Hide the dropdown
    } else {
        dropdownContent.style.display = "show"; // Show the dropdown
    }
<<<<<<< HEAD
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
=======
>>>>>>> 394079c (add js)
}