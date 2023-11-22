import { intersectionObserver } from './intersectionObserver.ts'
import "./main.css"

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    <section></section>
    <section></section>
    <section></section>
    <section></section>
`

intersectionObserver()