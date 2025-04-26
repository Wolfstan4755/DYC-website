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

// PDF.js script to load and render the PDF
const pdfUrl = 'path/to/your/document.pdf'; // Replace with your PDF file path

// Get the canvas element where the PDF will be rendered
const canvas = document.getElementById('pdf-canvas');
const context = canvas.getContext('2d');

// Load the PDF document
pdfjsLib.getDocument(pdfUrl).promise.then(function(pdf) {
    // Get the first page of the PDF
    pdf.getPage(1).then(function(page) {
        const viewport = page.getViewport({ scale: 1 });

        // Set canvas dimensions to match the PDF page
        canvas.width = viewport.width;
        canvas.height = viewport.height;

        // Render the page on the canvas
        const renderContext = {
            canvasContext: context,
            viewport: viewport
        };
        page.render(renderContext);
    });
});

// Optional: Functions for navigation
let currentPage = 1;
let pdfDoc = null;

// Load the PDF document for navigation
pdfjsLib.getDocument(pdfUrl).promise.then(function(pdf) {
    pdfDoc = pdf;
    renderPage(currentPage);
});

function renderPage(pageNum) {
    pdfDoc.getPage(pageNum).then(function(page) {
        const viewport = page.getViewport({ scale: 1 });
        canvas.width = viewport.width;
        canvas.height = viewport.height;

        const renderContext = {
            canvasContext: context,
            viewport: viewport
        };
        page.render(renderContext);
    });
}

function goToNextPage() {
    if (currentPage < pdfDoc.numPages) {
        currentPage++;
        renderPage(currentPage);
    }
}

function goToPreviousPage() {
    if (currentPage > 1) {
        currentPage--;
        renderPage(currentPage);
    }
}
