export const intersectionObserver = () => {
  const target = [...document.querySelectorAll('section')]
  const nav = document.querySelector('nav');

  const targetIntersectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const dataBgclr = entry.target.getAttribute('data-bgclr');
        nav!.style.backgroundColor = dataBgclr!;
      } 
    })
  }, {threshold: 1, rootMargin: `${nav!.offsetHeight}px`,})

    
  target.forEach((target) => {
    targetIntersectionObserver.observe(target);
  }
  )
};