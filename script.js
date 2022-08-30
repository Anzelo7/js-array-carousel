console.log('JS OK')

// visualizziamo un'immagine e nascondiamo le altre, utilizzando una classe active che visualizza l'immagine a cui è associata

const images = ['01', '02', '03', '04', '05'];
let activeIndex = 0;


const container = document.querySelector('.carousel-container');

for (let i = 0; i < images.length; i++) {
    const image = images[i];
    const imageClass = i === activeIndex ? 'item active' : 'item'

    // con il backtick è più bello da vedere
    container.innerHTML += `<img
                                class="${imageClass}"
                                src="img/${image}.jpg" alt="${image}" 
                            />`

}


const pastButton = document.getElementById('past');

const nextButton = document.getElementById('next');

nextButton.addEventListener('click',
    function () {
        console.log('mi hai cliccato!');

        // recupero l'elemento attivo

        if (activeIndex < images.length - 1) {
            container.innerHTML = '';
            activeIndex++;

            for (let i = 0; i < images.length; i++) {
                const image = images[i];
                const imageClass = i === activeIndex ? 'item active' : 'item'

                container.innerHTML += '<img class="' + imageClass + '" src="img/' + image + '.jpg" alt="due" />'

            }

        }

    }
);


pastButton.addEventListener('click',
    function () {
        console.log('mi hai cliccato!');

        // la versione con activeIndex sarà uguale a quanto fatto per il nextButton eccetto
        // - controllo activeIndex > 0 (ci deve essere qualcosa dopo che ho sottratto!)
        // - decremento dell'indice con activeIndex--

        if (activeIndex > 0) {
            container.innerHTML = '';
            activeIndex--;

            for (let i = 0; i < images.length; i++) {
                const image = images[i];
                const imageClass = i === activeIndex ? 'item active' : 'item'

                container.innerHTML += '<img class="' + imageClass + '" src="img/' + image + '.jpg" alt="due" />'

            }

        }
    }
);
