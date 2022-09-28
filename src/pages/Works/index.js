import each from 'lodash/each'
import GSAP from 'gsap'

import Page from 'classes/Page'

export default class Works extends Page {
	constructor() {
		super({
			id: 'works',
			element: '.works',
			elements: {
				openingTitles: '.works__opening__title',
				navigation: document.querySelector('.navigation'),
				openingWrapper: '.works__opening',
				wrapper: '.works__wrapper',
			},
		})
	}

	create() {
		super.create()
	}

	addEventListeners() {
		each(this.elements.openingTitles, (element) => {
			const innerText = element.innerText
			element.addEventListener('click', this.onHideOpening.bind(this))
		})
	}

	onHideOpening() {
		//TODO update animations to expected behavior
		this.animateOnHideOpening = GSAP.timeline()

		each(this.elements.openingTitles, (element) => {
			this.animateOnHideOpening.to(
				element,
				{ autoAlpha: 0, duration: 0.75 },
				'-=0.5'
			)
		})
		this.animateOnHideOpening.to(this.elements.openingWrapper, {
			height: 0,
			ease: 'ease.out',
			duration: 1,
		})
	}
}
