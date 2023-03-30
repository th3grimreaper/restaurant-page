import homePage from './components/home'
import menuPage from './components/menu'
import contactPage from './components/contact'
import './styles/main.scss'

const navArray = document.querySelectorAll('a')

function switchPage(e) {
  if (e.target.id === 'menu') {
    menuPage()
  } else if (e.target.id === 'about') {
    contactPage()
  } else {
    homePage()
  }
}

window.addEventListener('onload', homePage())

navArray.forEach((value) => {
  value.addEventListener('click', switchPage)
})
