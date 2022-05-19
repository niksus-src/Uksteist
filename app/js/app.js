// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'

document.addEventListener('DOMContentLoaded', () => {

	// Navbar

	const navbar = document.querySelector('.navbar-menu'),
		  body = document.querySelector('body')
	
	if (window.screen.width>739) {
		window.addEventListener('scroll', () => {
			if (window.pageYOffset > 0 && !navbar.classList.contains('nav-top')) {
				navbar.classList = 'navbar-menu nav-top'
			}
			if (window.pageYOffset < 101 && !navbar.classList.contains('nav-down')) {
				navbar.classList = 'navbar-menu nav-down'
			}
		})
	}

	const button_menu = document.querySelector('.navbar-button_menu'),
		  navbar_mob = document.querySelector('.navbar-mob')
		  

	button_menu.addEventListener('click', (e)=>{
		navbar_mob.classList.add('scale-in-ver-top')
		navbar_mob.classList.remove('hide')
		let navbar_close = document.querySelector('.navbar-mob_close')
		navbar_close.addEventListener('click', (e)=>{
			navbar_mob.classList.remove('scale-in-ver-top')
			navbar_mob.classList.add('scale-out-ver-bottom')
			setTimeout(()=>{
				navbar_mob.classList = 'navbar-mob hide'
			},400)
		})
	})


	// Accordion 
	const button = document.querySelector('.accordion-title'),
		  content = document.querySelector('.dropdown-menu'),
		  simbol = document.querySelector('.accordion-title_sim')
	button.addEventListener('click', (e) => {
		simbol.classList.toggle('test')
		if (content.classList.contains('hide'))
		{
			content.classList = 'dropdown-menu slide-left show'
		}
		else {
			content.classList = 'dropdown-menu show slide-back-left'
			setTimeout(()=>{
				content.classList = 'dropdown-menu hide slide-back-left'
			},400)
		}
	})


	// Card
	const areasBlock = document.querySelector('.areas'),
		  areas = document.querySelectorAll('[data-area]'),
		  card = document.querySelector('.card-area')

	areasBlock.addEventListener('click', (e) => {
		if(e.target.getAttribute('data-area')) {
			if(e.target.classList.contains('area_active')){
				card.classList.remove('b-show')
				e.target.classList.remove('area_active')
			} else {
				areas.forEach(area => {
					area.classList.remove('area_active')
				})
				card.style.top = `${e.pageY}px`
				card.style.left = `${e.pageX}px`
				e.target.classList.add('area_active')
				card.classList.add('b-show')
			}
		} else {
			areas.forEach(area => {
				area.classList.remove('area_active')
			})
			card.classList.remove('b-show')
		}
	})
})
