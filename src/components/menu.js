import { content, clearContent } from './clear'
import indoripoha from '../assets/indoripoha.jpg'

function menuPage() {
  clearContent()
  const frag = document.createDocumentFragment()

  const cardContainer = document.createElement('section')
  cardContainer.classList.add('card-container')

  const textWrapper = document.createElement('div')
  textWrapper.classList.add('text-wrapper')
  const title = document.createElement('div')
  title.textContent = 'Indori Poha'
  const desc = document.createElement('div')
  desc.textContent =
    'One of the popular street food snacks from Indore is poha with Jalebi. the poha which is made in Indore is very different than the Maharashtrian onion Poha recipe. In Indori poha onions are not sautéed but added as a topping on the poha. Along with onions some more ingredients are added as toppings. The taste of Indori poha is khatta meetha meaning sweet and sour. Fennel seeds are also added which give the poha a floral aroma and sweetish tones.'
  const imgWrap = document.createElement('div')
  imgWrap.classList.add('img-wrapper')
  const img = document.createElement('img')
  img.src = indoripoha
  imgWrap.appendChild(img)
  textWrapper.appendChild(title)
  textWrapper.appendChild(desc)
  cardContainer.appendChild(textWrapper)
  cardContainer.appendChild(imgWrap)
  frag.appendChild(cardContainer)

  content.appendChild(frag)
}

export default menuPage
