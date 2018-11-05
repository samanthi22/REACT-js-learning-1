createElement()

const strings = ['E', 'A', 'D', 'G', 'B', 'E']

function Guitar() {
    const head = createElement('head')
    for (let i = 0; i < 6; i++)
        const peg = createElement('peg');
        head.append(peg);
}

    const neck = createElement('')
    for (let i = 0; i < 6; i++) {
        const fret = createElement('fret');
        head.append(fret);
    }
    
    const body = createElement('body')
    strings.forEach(tone => {
        const string = createElement('string')
        string.tune(tone)
        body.append(string)
    })
}