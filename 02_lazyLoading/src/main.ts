import { intersectionObserver } from './intersectionObserver.ts';
import placeholderImage from "./placholder.jpg";
import "./main.css";

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    <main>
        <img class="lazy-loaded-image" src="${placeholderImage}" alt="random image" width="600" height="600" data-src="https://images.pexels.com/photos/3358707/pexels-photo-3358707.png" />
        <img class="lazy-loaded-image" src="${placeholderImage}" alt="random image" width="600" height="600" data-src="https://images.pexels.com/photos/3358707/pexels-photo-3358707.png" />
        <img class="lazy-loaded-image" src="${placeholderImage}" alt="random image" width="600" height="600" data-src="https://images.pexels.com/photos/3358707/pexels-photo-3358707.png" />
    </main>
`

intersectionObserver();