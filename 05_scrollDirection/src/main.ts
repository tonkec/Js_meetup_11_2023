import { intersectionObserver } from './intersectionObserver.ts';
import "./main.css";

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    <main class="observer__target"></main>
`

intersectionObserver();