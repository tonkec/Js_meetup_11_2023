export function intersectionObserver() {
  const sections = document.querySelectorAll('section');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('isInView');
      } 
    });
  }, {rootMargin: '-50% 0px -50% 0px'});

  sections.forEach((section) => {
    observer.observe(section);
  })
}
