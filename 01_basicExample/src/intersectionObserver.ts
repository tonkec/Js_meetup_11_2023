export function intersectionObserver() {
  const target = document.querySelector('.target');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const intersecting = entry.isIntersecting
      entry.target.setAttribute("style", `background-color: ${intersecting ? 'red' : 'blue'}`)
    });
  }, {threshold: 0.5, rootMargin: '20px' });
  
  observer.observe(target!);
}
