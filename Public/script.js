function toggleDropdown() {
    var dropdownContent = document.getElementById("dropdownContent");
    if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none"; // Hide the dropdown
    } else {
        dropdownContent.style.display = "block"; // Show the dropdown
    }
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
}

const url = 'Videos/DYC Booklet.pdf'; // Path to your PDF file
let pdfDoc = null;
let currentPage = 1;
let totalPages = 0;
const scale = 3.9; // Adjust this value (e.g., 0.5 to make it smaller, 1 for normal size)
const canvas = document.getElementById('pdf-canvas');
const ctx = canvas.getContext('2d');

// Load the PDF
pdfjsLib.getDocument(url).promise.then((pdf) => {
    pdfDoc = pdf;
    totalPages = pdf.numPages;
    renderPage(currentPage);
});

// Function to render a page
function renderPage(pageNum) {
    pdfDoc.getPage(pageNum).then((page) => {
        const viewport = page.getViewport({ scale: scale }); // Apply scale here
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        // Render the page into the canvas context
        page.render({
            canvasContext: ctx,
            viewport: viewport,
        });
    });
}

// Go to the previous page
function goToPreviousPage() {
    if (currentPage <= 1) return; // Already on the first page
    currentPage--;
    renderPage(currentPage);
}

// Go to the next page
function goToNextPage() {
    if (currentPage >= totalPages) return; // Already on the last page
    currentPage++;
    renderPage(currentPage);
}

// Detect swipe direction
let touchStartX = 0;
let touchEndX = 0;

function handleSwipe(e) {
    touchEndX = e.changedTouches[0].screenX;

    if (touchStartX - touchEndX > 50) {
        // Swiped Left: Go to next page
        goToNextPage();
    }

    if (touchEndX - touchStartX > 50) {
        // Swiped Right: Go to previous page
        goToPreviousPage();
    }

    touchStartX = 0; // Reset start position after swipe
}

// Attach touchstart and touchend events to the container
pdfContainer.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].screenX;
});

pdfContainer.addEventListener('touchend', handleSwipe);

function goToPreviousPage() {
    if (currentPage > 1) {
        currentPage--;
        renderPage(currentPage);
    }
}

function goToNextPage() {
    if (currentPage < totalPages) {
        currentPage++;
        renderPage(currentPage);
    }
}

function renderPage(pageNum) {
    // Your code to render the page goes here (PDF.js or custom content rendering)
    console.log(`Rendering page ${pageNum}`);
}

// Optional: You can call the `renderPage()` function initially to show the first page.
renderPage(currentPage);