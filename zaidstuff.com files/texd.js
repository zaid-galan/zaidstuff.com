// Function to download a file
function downloadFile(filename, content) {
    // Create a new anchor element
    const element = document.createElement('a');
    
    // Create a Blob with the content and set the href to a URL representing the Blob
    const file = new Blob([content], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    
    // Set the download attribute with the desired file name
    element.download = filename;
    
    // Append the anchor to the body (required for some browsers)
    document.body.appendChild(element);
    
    // Programmatically click the anchor to trigger the download
    element.click();
    
    // Remove the anchor from the document
    document.body.removeChild(element);
}
const fileName = document.getElementById('fileName').value;
const fileContent = document.getElementById('fileContent').value;
document.getElementById("downloadBtn").addEventListener('click', function(){
    downloadFile(fileName,fileContent);
});