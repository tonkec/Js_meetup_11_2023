import { intersectionObserver } from './intersectionObserver.ts'
import "./main.css"

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    <div class="target">Target</div>
`

intersectionObserver();