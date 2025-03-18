const images = document.querySelectorAll('img');

const showImages = () => {
  images.forEach(image => {
    const top = image.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (top < windowHeight - 100) {
      image.style.opacity = 1;
      image.style.transform = 'translateY(0)';
    }
  });
};

window.addEventListener('scroll', showImages);
showImages(); // Trigger the effect on load