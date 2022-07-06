Vue.component("componente", { 
    
    props: {
        titulo: String,
        portada: String,
        puntaje: String,
        peliculas: Array,
        estilosnuevo: Object
        
    },

    template: //html
        `
        <table :style="estilosnuevo">
            <thead>
                <tr :style="estilosnuevo">
                    <th :style="estilosnuevo"> Titulo </th>
                    <th :style="estilosnuevo"> Año </th>
                    <th :style="estilosnuevo"> Categoria </th>
                    <th> Duracion </th>
                </tr>
            </thead>

            <tbody>
            
                <tr v-for="(o, index) in peliculas" :key="o.id"> 
                    <td> {{ o.titulo }} </td>
                    <td> {{ o.year }} </td>
                    <td> {{ o.categoria }} </td>
                    <td> {{ o.duracion }} </td>
                </tr>
            
            </tbody>
        </table>

        `

    ,
});
var app = new Vue({

    el: '#app',

    data: {
        
        infantiles: [
                {
                
                id: 1,
                
                titulo: "Cars",
                
                year: "2006",
                
                categoria: "Animacion / Comedia",

                duracion: "96 min"
                
                },
                
                {
                
                id: 2,
                
                titulo: "Metegol",
                
                year: "2013",
                
                categoria: "Animacion / Aventura",

                duracion: "106 min"
                
                },
                
                {
                
                id: 3,
                
                titulo: "Mi villano favorito",
                
                year: "2010",
                
                categoria: "Animacion / Comedia",

                duracion: "95 min"
                
                }
    ],

        todoPublico: [
            {
            
            id: 1,
            
            titulo: "Spider-Man",
            
            year: "2002",
            
            categoria: "Accion / Aventura",

            duracion: "120 min"
            
            },
            
            {
            
            id: 2,
            
            titulo: "Karate Kid",
            
            year: "1984",
            
            categoria: "Animacion / Aventura",

            duracion: "122 min"
            
            },
            
            {
            
            id: 3,
            
            titulo: "Juego de gemelas",
            
            year: "1998",
            
            categoria: "Comedia",

            duracion: "110 min"
            
            }
    ],

        maYores: [
            {
            
            id: 1,
            
            titulo: "John Wick 3",
            
            year: "2019",
            
            categoria: "Accion",

            duracion: "131 min"
            
            },
            
            {
            
            id: 2,
            
            titulo: "Proyecto X",
            
            year: "2012",
            
            categoria: "Comedia",

            duracion: "88 min"
            
            },
            
            {
            
            id: 3,
            
            titulo: "Ambulancia",
            
            year: "2022",
            
            categoria: "Suspenso",

            duracion: "136 min"
            
            }
            
    ],

    estiloInfantil: 
        {
            'border': '1px solid',
            'background' : '#FF5733',
            'color': 'white'
        },
    estiloTodo: 
        {
            'border': '2px solid blue',
            'background' : '#565F07',
            'color': '#2EFF00'
        },
    estilo18: 
        {
            'border': '1px solid red'
            ,'background' : '#00FFCD',
            'color': '#FF0000'
        }
        
    
    }
})