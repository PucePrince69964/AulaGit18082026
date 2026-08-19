const b = document.querySelector('section')
const btn = document.getElementById('btn')

function add(){
    let a = window.prompt("Digite algo: ")

    if (a){
        const teste = document.createElement('p')
        teste.textContent = a
        b.appendChild(teste)
    }
}
