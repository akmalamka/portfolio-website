import GSAP from 'gsap'

import Page from 'classes/Page'

export default class Blog extends Page {
	constructor() {
		//TODO: make sure if routing directly to Blog the image header still displaying by changing the uAlpha to 1
		super({
			id: 'blog',
			element: '.blog',
			elements: {
				navigation: document.querySelector('.navigation'),
				wrapper: '.blog__wrapper',
			},
		})
	}

	create() {
		super.create()
	}

	show() {
		const timeline = GSAP.timeline({ delay: 2 })

		timeline.fromTo(
			this.element,
			{
				autoAlpha: 0,
			},
			{
				autoAlpha: 1,
			}
		)

		super.show(timeline)
	}

	/**
	 * Destroy.
	 */
	destroy() {
		super.destroy()
	}
}
