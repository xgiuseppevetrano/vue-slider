// Descrizione:
// Partendo dal markup HTML allegato creare uno slider di immagini in VueJS.

// Bonus:
// 1- al click su una thumb, visualizzare in grande l'immagine corrispondente
// 2- applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
// 3- quando il mouse va in hover sullo slider, bloccare l'autoplay e farlo riprendere quando esce

// 1. Mi aggancio al container in cui voglio utilizzare Vuejs e creo i dati che mi servono
const app = new Vue ({
    el: '#app',
    data: {
        currentIndex: 0,
        images: [
            {
                src: 'img/01.jpg',
                title: 'Svezia',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
            },
            {
                src: 'img/02.jpg',
                title: 'Svizzera',
                text: 'Lorem ipsum',
            },
            {
                src: 'img/03.jpg',
                title: 'Gran Bretagna',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            },
            {
                src: 'img/04.jpg',
                title: 'Germania',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
            },
            {
                src: 'img/05.jpg',
                title: 'Paradise',
                text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
            },
        ],
    },
    methods: {
        // 2. Creo una funzione per far salire le immagini cliccando la freccia verso su
        upImage() {
            this.currentIndex === 0 ? this.currentIndex = this.images.length - 1  : this.currentIndex--;
        },
        // 3. Creo una funzione per far scendere le immagini cliccando la freccia verso giu
        downImage() {
            this.currentIndex === this.images.length - 1 ? this.currentIndex = 0  : this.currentIndex++;
        }
    }
});

