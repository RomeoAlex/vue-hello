// vue.config.devtools = true;
// COME INIZIALIZZARE
const app = new Vue(
    {
        // per inizializzare ancorato al div con root
        el:'#root',
        data:{
            message:'Hello World',
            image: 'https://mypuppies.net/wp-content/uploads/2021/08/q5-43.jpg'
        }
    }
);