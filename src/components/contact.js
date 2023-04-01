import { content, clearContent } from './clear'

function contactPage() {
  clearContent()
  const frag = document.createDocumentFragment()

  const cardContainer = document.createElement('section')
  cardContainer.classList.add('card-container', 'home-content')

  const textWrapper = document.createElement('div')
  textWrapper.classList.add('text-wrapper')

  const contArr = [
    'Kitty Poha Hub',
    '123 Main Street',
    'Mumbai, Maharashtra 400001',
    'India',
    '+91 98765 43210',
    'admin@kittyhub.co',
  ]
  const ul = document.createElement('ul')

  contArr.forEach((value) => {
    const li = document.createElement('li')
    li.textContent = value
    ul.appendChild(li)
  })
  textWrapper.appendChild(ul)
  cardContainer.appendChild(textWrapper)
  frag.appendChild(cardContainer)

  content.appendChild(frag)
}

export default contactPage
