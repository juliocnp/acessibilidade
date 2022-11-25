const tabs = document.querySelectorAll('.js-tab')
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const contentId = tab.dataset.content
    const tabContent = document.getElementById(`tab-content-${contentId}`)
    const activeContent = document.querySelector('.js-tab-content.is-visible')
    const activeTab = document.querySelector('.js-tab.is-active')

    if (activeContent) {
      activeContent.classList.remove('is-visible')
    }
    
    if (activeTab) {
      activeTab.classList.remove('is-active')
    }

    tabContent.classList.add('is-visible')
    tab.classList.add('is-active')
  })

  tab.addEventListener('keydown', event => {
    event.preventDefault()
    const { key } = event

    if (key === 'ArrowRight') {
      console.log("direita")
    }

    if (key === 'ArrowLeft') {
      console.log("esquerda")
    }

    if (key === 'Home') {
      console.log("home")
    }

    if (key === 'End') {
      console.log("end") 
    }

    if (key === ' ' || key === 'Enter') {
      console.log("espaço ou enter") 
    }
  })
})