'use strict'
import { contatos } from "./contatos.js"

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

     contatos.append(img, name,description)
    // contatos.append(name,description)
    return contatos
}




const carregarContato = () => {
    const container = document.getElementById('chatlist')
    const cntatoI = contatos.map(criarContato)

    container.replaceChildren(...cntatoI )
}

carregarContato()