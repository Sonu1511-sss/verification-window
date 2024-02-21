// // Function to shuffle array elements
// function shuffleArray(array) {
//     for (let i = array.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [array[i], array[j]] = [array[j], array[i]];
//     }
//     return array;
// }

// Shuffle image elements within the container
// shuffleArray(Array.from(images)).forEach(image => container.appendChild(image));
const container = document.getElementById('imageContainer');
const images = container.querySelectorAll('.image');

let selectedImages = [];

function selectImage(element) {
    console.log('element', element);
    const maxSelection = 3;
    if (element.classList.contains('selected')) {
        element.classList.remove('selected');
        const index = selectedImages.indexOf(element);
        if (index !== -1) {
            selectedImages.splice(index, 1);
        }
    } else {
        if (selectedImages.length < maxSelection) {
            element.classList.add('selected');
            selectedImages.push(element);
        }
    }
    if (selectedImages.length === maxSelection) {
        let isCorrect = true;
        selectedImages.forEach(image => {
            if (!image.querySelector('img').alt.startsWith('integer')) {
                isCorrect = false;
            }
        });
        if (isCorrect) {
            // alert('Validation successful!');
            document.getElementById('result').innerHTML = "Validation successful!";
            // Perform further actions here upon successful validation
        } else {
            // alert('Validation failed! Please select 4 images of integers.');
            document.getElementById('result').innerHTML = "Validation failed! Please select 3 images of integer.";
            // Reset selection
            selectedImages.forEach(image => image.classList.remove('selected'));
            selectedImages = [];
        }
    }
}
