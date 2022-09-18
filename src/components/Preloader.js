import GSAP from 'gsap'
import each from 'lodash/each'

import Component from 'classes/Component'

export default class Preloader extends Component {
	constructor() {
		super({
			element: '.preloader',
			elements: {
				firstName: '.preloader__title__first__name',
				lastName: '.preloader__title__last__name',
				number: '.preloader__number',
				numberText: '.preloader__number__text',
				images: document.querySelectorAll('img'),
			},
		})

		this.length = 0
		this.createLoader()
	}

	createLoader() {
		each(this.elements.images, (element) => {
			element.src = element.getAttribute('data-src')
			element.onload = (_) => this.onAssetLoaded(element)
		})
	}

	onAssetLoaded(image) {
		this.length += 1

		const percent = this.length / this.elements.images.length

		this.elements.numberText.innerHTML = `${Math.round(percent * 100)}%`

		if (percent === 1) {
			this.onLoaded()
		}
	}

	onLoaded() {
		return new Promise((resolve) => {
			this.animateOut = GSAP.timeline({
				delay: 2,
			})
			this.animateOut
				.to(this.elements.firstName, { y: '1300%', duration: 1 }) //desktop 700 TODO: differentiate between mobile and desktop duration mobile: 6, desktop:9 ,
				.to(this.elements.lastName, { y: '-500%', duration: 1 }, '-=1') //mobile: 5, desktop 7

			this.animateOut.to(
				this.elements.numberText,
				{
					duration: 1.5,
					ease: 'expo.out',
					y: '100%',
				},
				'-=1.4'
			)
			this.animateOut.to(this.element, {
				autoAlpha: 0,
			})
			this.animateOut.call((_) => {
				this.emit('completed')
			})
		})
	}

	destroy() {
		this.element.parentNode.removeChild(this.element)
	}
}
