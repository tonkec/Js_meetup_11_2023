import { intersectionObserver } from './intersectionObserver.ts';
import "./main.css";

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    <nav></nav>
    <section data-bgclr="purple">PURPLE</section>
    <section data-bgclr="blue">BLUE</section>
    <section data-bgclr="green">GREEN</section>
`

intersectionObserver()