// imprtare il debugger
vue.config.devtools = true;
// COME INIZIALIZZARE
const app = new vue(
    {
        // per inizializzare ancorato al div con root
        el:'#root',
        data:{
            titleText:'Ciao sono un Titolo VueJs!!',
            subtitleText:'Benvenuto VUE',
            // MAi VALORI VUOTI
            valore:'',
            // inizializzare o stringa vuota o false
            valore: false
        }
    }
);