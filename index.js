'use strict'
import { contatos } from "./contatos.js"


// const teste = contatos.forEach(function(mensagem) {

//     console.log(mensagem.messages[0])

// })


//console.log(contatos[0].messages[0].sender[1]);


const criarContato = (contato) => {
    const contatos = document.createElement('div')
    contatos.classList.add('person-talking')

    const img = document.createElement('img')
    img.classList.add('img-person-talking')
    img.src = `./img/${contato.image}`

    const name = document.createElement('h4')
    name.classList.add('name-person-talking')
    name.textContent = contato.name

    const description = document.createElement('h5')
    description.classList.add('last-mensage')
    description.textContent = contato.description

    contatos.append(img, name, description)
        // contatos.append(name,description)
    return contatos
}

const carregarContato = () => {
    const container = document.getElementById('chatlist')
    const cntatoI = contatos.map(criarContato)

    container.replaceChildren(...cntatoI)
}
carregarContato()

const criarMensagem = (mensagem) => {
    const mensagens = document.createElement('div')
    mensagens.classList.add('mensages')

    const msg = document.createElement('p')
    msg.classList.add('mesage')
        //msg.textContent = mensagem[1]

    console.log(mensagem.messages[0].content)

    // console.log(mensagem.messages)



    //console.log(mensagem.messages[1].timestamp)
    //console.log(mensagem.messages[0].content[0])


    mensagens.append(msg)

    return mensagens
}

const carregarHeader = () => {
    const container = document.getElementById('container-message-submissions')
    const cntatoI = contatos.map(criarMensagem)

    container.replaceChildren(...cntatoI)
}

carregarHeader()







// const criarMensagem = (mensagem) => {
//     const mensagens = document.createElement('div')
//     mensagens.classList.add('mensages')

//     const mensage = document.createElement('div')
//     mensage.classList.add('mesage')
//     mensage.textContent = mensagens.messages

//     mensagens.append(mensage)

//     return mensagens
// }

// const carregarMEnsagem = () => {
//     const container = document.getElementById('ms')
//     const cntatoI = contatos.map(criarMensagem)

//     container.append(...cntatoI)

// }

// carregarMEnsagem()