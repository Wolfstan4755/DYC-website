const url = 'Videos/DYC Booklet.pdf';
let pdfDoc = null;
let currentPage = 1;
let totalPages = 0;
const scale = 3.9;
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

