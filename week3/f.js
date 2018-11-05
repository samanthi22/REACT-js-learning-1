const SLIDE = {
    title: 'React is Declarative',
    bullets: [
        'Imeritive vs Declarative',
        'The browser APIs are not fun to work with', 
        'React allows us to write what we want, and the library will take care of the DOM manipulative']
}

function createSlide(slide) {
    return (
        <div>
        <h1>{SLIDE.title}</h1>
        <ul>
        {SLIDE.bullets.map(bullet => <li> {bullet}</li>)}
        </ul>
        </div>
    )
}