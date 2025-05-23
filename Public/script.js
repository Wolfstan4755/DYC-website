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
const pdfContainer = document.getElementById('pdf-container');
const videoContainer = document.getElementById('video-container');
const formContainer = document.getElementById('form-container');

// Load the PDF
pdfjsLib.getDocument(url).promise.then((pdf) => {
    pdfDoc = pdf;
    totalPages = pdf.numPages;
    renderPage(currentPage);
});

// Function to render a page
function renderPage(pageNum) {
    pdfDoc.getPage(pageNum).then((page) => {
        const viewport = page.getViewport({ scale: scale });
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        page.render({
            canvasContext: ctx,
            viewport: viewport,
        });
    });
}

// Function to go to the previous page
function goToPreviousPage() {
    if (currentPage <= 1) return;
    currentPage--;
    renderPage(currentPage);
}

// Function to go to the next page
function goToNextPage() {
    if (currentPage >= totalPages) return;
    currentPage++;
    renderPage(currentPage);
}

(function() {
    const videoContainer = document.getElementById('video-player');

    const videoId = 'T-LdS8uPaBg';
    const iframe = document.createElement('iframe');
    iframe.src = `https://www.youtube.com/embed/${videoId}`;
    iframe.width = "560";
    iframe.height = "315";
    iframe.frameBorder = "0";
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    iframe.allowFullscreen = true;
    
    videoContainer.appendChild(iframe);
})