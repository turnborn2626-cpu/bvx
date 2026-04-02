import './style.css';

// Add click handlers for upload buttons
const uploadButtons = document.querySelectorAll('.btn-upload-header, .btn-upload-main');

for (const button of uploadButtons) {
  button.addEventListener('click', () => {
    console.log('Upload button clicked');
    // Add your upload logic here
  });
}
