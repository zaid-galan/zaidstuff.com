// Function to handle file input and display the image
function displayImage(event) {
    const fileInput = event.target; // Get the file input element
    const file = fileInput.files[0]; // Get the selected file

    if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();

        // When the file is loaded, set the image source
        reader.onload = function (e) {
            const img = document.getElementById('imagePreview');
            img.src = e.target.result; // Set the image source to the file content
            img.style.display = 'block'; // Make the image visible
        };

        reader.readAsDataURL(file); // Read the file as a Data URL
    } else {
        alert('Please select a valid image file.');
    }
}

// Attach the event listener to the file input
document.getElementById('fileInput').addEventListener('change', displayImage);