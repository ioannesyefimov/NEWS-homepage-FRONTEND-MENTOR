const hamburger = document.querySelector('.hamburger')
const body = document.querySelector('body')
const navMenu = document.querySelector('.nav-links')
const navbar = document.querySelector('.navbar')

hamburger.addEventListener('click', ()=> {
    const isMobile = navMenu.getAttribute('data-is-mobile') === 'false'
    const isActiveMenu = body.getAttribute('data-menu-active') === 'false'
    
    
    if(isMobile && isActiveMenu) {
        navMenu.setAttribute('data-is-mobile', 'true')
        navMenu.setAttribute('data-is-active', 'true')
        body.setAttribute('data-menu-active', 'true')
        hamburger.children[1].classList.remove('hidden')
        hamburger.children[0].classList.add('hidden')
        navbar.setAttribute('data-is-active', 'true')

    } else {
        navMenu.setAttribute('data-is-mobile', 'false')
        navMenu.setAttribute('data-is-active', 'false')
        body.setAttribute('data-menu-active', 'false')
        hamburger.children[1].classList.add('hidden')
        hamburger.children[0].classList.remove('hidden')
        navbar.setAttribute('data-is-active', 'false')
    }
})

const mediaQuery = window.matchMedia('(min-width: 750px)')
function handleTabletChange(e) {
    const menuState = navbar.getAttribute('data-is-active') === 'true'
    // const linksState = navMenu.getAttribute('data-is-active') === 'false'
    if(e.matches) {
       if(menuState) {
        menuState.setAttribute('data-is-active', 'true')
       }
    }
    
    
    
        

}
mediaQuery.addEventListener('change', handleTabletChange)

handleTabletChange(mediaQuery)