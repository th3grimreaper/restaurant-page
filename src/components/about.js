import { content, clearContent } from './clear'

function aboutPage() {
  clearContent()

  const frag = document.createDocumentFragment()
  const div = document.createElement('div')
  div.classList.add('address')
  div.textContent = `Address:
                    Kitty Poha Store
                    123 Main Street
                    Mumbai, Maharashtra 400001
                    India

                    Contact Number:
                    +91 98765 43210`

  frag.append(div)
  content.appendChild(frag)
}

export default aboutPage
