// https://stackoverflow.com/a/51976805
export const intersectionObserver = () => {
  const target = document.querySelector('.observer__target')
  const thresholdArray = (steps: number) => Array(steps + 1)
  .fill(0)
  .map((_, index) => index / steps || 0);

  let previousY = 0
  let previousRatio = 0 // a number between 0 and 1, that indicates how much of a target appears in the root

  const targetIntersectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const currentY = entry.boundingClientRect.y
      const currentRatio = entry.intersectionRatio
      const isIntersecting = entry.isIntersecting
  
      if (currentY < previousY) {
        if (currentRatio > previousRatio && isIntersecting) {
          console.log("Scrolling down enter")
        } else {
          console.log("Scrolling down leave")
        }
      } else if (currentY > previousY && isIntersecting) {
        if (currentRatio < previousRatio) {
          console.log("Scrolling up leave")
        } else {
          console.log("Scrolling up enter")
        }
      }
  
      previousY = currentY
      previousRatio = currentRatio
    })
  }, {threshold: thresholdArray(20)})

    
  targetIntersectionObserver.observe(target!)
}
