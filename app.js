let imgFundo = document.body.style.backgroundImage = "url('imgs/fundo+.svg')"
let imgAlbum = document.querySelector('.imgAlbum')
let listaMusicas = document.querySelector('.listaMusicas')

const listaAlbuns = [
    {
        fundo: "url('imgs/fundo+.svg')",
        capa: "imgs/+EdSheeran.jpg",
        musicas: ["The A Team", "Drunk", "U.N.I.", "Grade 8", "Wake Me Up", "Small Bump", "This", "The City", "Lego House", "You Need Me, I Don't Need You", "Kiss Me", "Give Me Love"
        ]
    },

    {
        fundo: "url('imgs/fundoX.svg')",
        capa: "imgs/X_cover.png",
        musicas: ["One", "I'm a Mess", "Sing", "Don't", "Nina", "Photograph", "Bloodstream", "Tenerife Sea", "Runaway", "The Man", "Thinking Out Loud", "Afire Love"]
    },

    {
        fundo: "url('imgs/fundodivide.svg')",
        capa: "imgs/Ed_Sheeran_-_Divide.png",
        musicas: ["The A Team", "Drunk", "U.N.I.", "Grade 8", "Wake Me Up", "Small Bump", "This", "The City", "Lego House", "You Need Me, I Don't Need You", "Kiss Me", "Give Me Love"
        ]
    },

    {
        fundo: "url('imgs/fundo=.svg')",
        capa: "imgs/Equals_-_Ed_Sheeran.png",
        musicas: ["One", "I'm a Mess", "Sing", "Don't", "Nina", "Photograph", "Bloodstream", "Tenerife Sea", "Runaway", "The Man", "Thinking Out Loud", "Afire Love"]
    },

    {
        fundo: "url('imgs/fundo-.svg')",
        capa: "imgs/Ed_Sheeran_-_Subtract.png",
        musicas: ["The A Team", "Drunk", "U.N.I.", "Grade 8", "Wake Me Up", "Small Bump", "This", "The City", "Lego House", "You Need Me, I Don't Need You", "Kiss Me", "Give Me Love"
        ]
    },

    {
        fundo: "url('imgs/fundoplay.svg')",
        capa: "imgs/Ed_Sheeran_-_Play.png",
        musicas: ["One", "I'm a Mess", "Sing", "Don't", "Nina", "Photograph", "Bloodstream", "Tenerife Sea", "Runaway", "The Man", "Thinking Out Loud", "Afire Love"]
    }
]

let contador = 0

function proximo() {
    contador++
    if (contador > listaAlbuns.length - 1) {
        contador = 0
    }

    imgFundo = document.body.style.backgroundImage = listaAlbuns[contador].fundo
    imgAlbum.src = listaAlbuns[contador].capa

    //Usar for para trocar a lista de músicas
    for (let i = 0; i < array.length; i++) {

    }
}

function anterior() {
    contador--
    if (contador < 0) {
        contador = listaAlbuns.length - 1
    }
    
    imgFundo = document.body.style.backgroundImage = listaAlbuns[contador].fundo
    imgAlbum.src = listaAlbuns[contador].capa

    for (let i = 0; i < array.length; i++) {

    }
}