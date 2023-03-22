import { content, clearContent } from './clear'

function homePage() {
  clearContent()
  const frag = document.createDocumentFragment()
  const newparaZero = document.createElement('p')
  const newparaOne = document.createElement('p')
  const newparaTwo = document.createElement('p')

  newparaZero.textContent =
    "Welcome to Kitty Poha Hub! At Kitty Poha Hub, we take pride in serving the best poha in town. Our legendary poha is made with high-quality ingredients, and it's the perfect meal to start your day or satisfy your midday cravings."
  newparaOne.textContent =
    'Our dedication to using only the freshest and most delicious ingredients has earned us a reputation for being the go-to spot for poha lovers. We take great care to ensure that every dish that leaves our kitchen meets the highest standards of quality and flavor.'
  newparaTwo.textContent =
    "We also offer a range of flavorful toppings and sides to personalize your poha experience. From the delicious Indori Poha to Maharashtrian Kanda Poha, we have everything you would ever need. At Kitty Poha Hub, we strive to create a warm and inviting environment for our diners. We believe that great food is best enjoyed in a friendly and welcoming atmosphere, and we make sure to create an experience that is just as enjoyable as our food. If you're looking for a quick breakfast, a midday snack, Kitty Poha Hub has got you covered. Come visit us and taste the best poha in town!"

  newparaZero.classList.add('info')
  newparaOne.classList.add('info')
  newparaTwo.classList.add('info')

  frag.append(newparaZero)
  frag.append(newparaOne)
  frag.append(newparaTwo)

  content.appendChild(frag)
}

export default homePage
