document.getElementById('upload').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const imageUrl = e.target.result;
            createScreenshotContainer(imageUrl);
        }
        reader.readAsDataURL(file);
    }
});

function createScreenshotContainer(imageUrl) {
    const container = document.createElement('div');
    container.classList.add('container');
    
    const img = document.createElement('img');
    img.classList.add('image-preview');
    img.src = imageUrl;
    img.alt = 'Screenshot';

    const downloadBtn = document.createElement('button');
    downloadBtn.classList.add('neon-button');
    downloadBtn.textContent = 'Download';
    downloadBtn.addEventListener('click', function() {
        const link = document.createElement('a');
        link.href = imageUrl;
        link.download = 'screenshot.png';
        link.click();
    });

    container.appendChild(img);
    container.appendChild(downloadBtn);

    document.getElementById('imageContainer').appendChild(container);
}
