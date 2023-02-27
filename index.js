'use strict'
import { contatos } from "./contatos.js"

const criarContato = (contato) => {

    const personTalking = document.createElement('div')
    personTalking.classList.add('person-talking')

    const img = document.createElement('img')
    img.classList.add('img-user')
    img.src = `./images/${contato.image}`

    const name = document.createElement('h4')
    name.classList.add('name-person-talking')
    name.textContent = contato.name

    personTalking.append(img, name)

    return personTalking
}

criarContato()