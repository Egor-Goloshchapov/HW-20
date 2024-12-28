document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".gallery .image");
  let currentIndex = 0;

  function showImage(index) {
    images.forEach((img, i) => {
      img.style.border = i === index ? "3px solid red" : "none";
    });
  }

  function handleKeydown(event) {
    if (event.key === "ArrowRight") {
      currentIndex = (currentIndex + 1) % images.length;
      showImage(currentIndex);
    } else if (event.key === "ArrowLeft") {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
    }
  }

  document.addEventListener("keydown", handleKeydown);
  showImage(currentIndex);
});
