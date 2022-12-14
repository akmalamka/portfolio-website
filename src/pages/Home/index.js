import Page from 'classes/Page'

export default class Home extends Page {
	constructor() {
		super({
			id: 'home',
			element: '.home',
			elements: {
				navigation: document.querySelector('.navigation'),
				wrapper: '.home__wrapper',
				example: '.home__example__text',
			},
		})
	}

	create() {
		super.create()
	}

	/**
	 * Destroy.
	 */
	destroy() {
		super.destroy()
	}
}
