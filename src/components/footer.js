function createFooter() {
  const container = document.querySelector('.container')

  const footer = document.createElement('footer')
  footer.classList.add('footer')
  const footDiv = document.createElement('div')
  footDiv.innerHTML = '&#169 th3grimreaper | The Odin Project (2023)'
  footer.appendChild(footDiv)

  container.appendChild(footer)
}

export default createFooter
