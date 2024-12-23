const images = document.querySelectorAll('.image');
    const fullImageContainer = document.getElementById('fullImageContainer');
    const fullImage = document.getElementById('fullImage');
    let currentIndex = 0;

    function openImage(index) {
      currentIndex = index;
      fullImage.src = images[index].src;
      fullImageContainer.style.display = 'block';
    }

    function closeImage() {
      fullImageContainer.style.display = 'none';
      fullImage.src = '';
    }

    function navigateImage(direction) {
      currentIndex += direction;
      if (currentIndex < 0) currentIndex = images.length - 1;
      if (currentIndex >= images.length) currentIndex = 0;
      fullImage.src = images[currentIndex].src;
    }

    images.forEach((img, index) => {
      img.addEventListener('click', () => openImage(index));
    });

    fullImageContainer.addEventListener('click', closeImage);

    document.addEventListener('keydown', (event) => {
      if (fullImageContainer.style.display === 'block') {
        if (event.key === 'ArrowRight') navigateImage(1);
        if (event.key === 'ArrowLeft') navigateImage(-1);
        if (event.key === 'Escape') closeImage();
      }
    });



    
    const createBtn = document.getElementById('createBtn');
    const destroyBtn = document.getElementById('destroyBtn');
    const boxes = document.getElementById('boxes');

    function getRandomColor() {
      return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    }

    function createBoxes(amount) {
      let size = 30;
      for (let i = 0; i < amount; i++) {
        const box = document.createElement('div');
        box.style.width = `${size}px`;
        box.style.height = `${size}px`;
        box.style.backgroundColor = getRandomColor();
        boxes.appendChild(box);
        size += 10;
      }
    }

    function destroyBoxes() {
      boxes.innerHTML = '';
    }

    createBtn.addEventListener('click', () => {
      const amount = Number(document.getElementById('amount').value);
      createBoxes(amount);
    });

    destroyBtn.addEventListener('click', destroyBoxes);
