import { content, clearContent } from './clear'

function contactPage() {
  clearContent()

  const contArr = [
    'Kitty Poha Hub',
    '123 Main Street',
    'Mumbai, Maharashtra 400001',
    'India',
    '+91 98765 43210',
    'admin@kittyhub.co',
  ]
  const frag = document.createDocumentFragment()
  const ul = document.createElement('ul')

  contArr.forEach((value) => {
    const li = document.createElement('li')
    li.textContent = value
    ul.appendChild(li)
  })
  frag.appendChild(ul)

  content.appendChild(frag)
}

export default contactPage
