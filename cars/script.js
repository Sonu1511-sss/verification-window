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
            if (!image.querySelector('img').alt.startsWith('car')) {
                isCorrect = false;
            }
        });
        if (isCorrect) {
            document.getElementById('result').innerHTML = "Validation successful!";
          
        } else {
            document.getElementById('result').innerHTML = "Validation failed! Please select 3 images of cars.";
         
            selectedImages.forEach(image => image.classList.remove('selected'));
            selectedImages = [];
        }
    }
}
