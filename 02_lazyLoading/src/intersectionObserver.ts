export function intersectionObserver() {
  const lazyImages = document.querySelectorAll(".lazy-loaded-image");

  const lazyImageObserver = new IntersectionObserver((entries) => {
   entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const lazyImage = entry.target;
        const dataSrc = lazyImage.getAttribute("data-src")
        dataSrc && lazyImage.setAttribute("src", dataSrc);
        lazyImageObserver.unobserve(lazyImage);
      }
   })
  }, {threshold: 0.5});

  lazyImages.forEach(function(lazyImage) {
    lazyImageObserver.observe(lazyImage);
  });
}
