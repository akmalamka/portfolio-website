import Page from 'classes/Page'

export default class Works extends Page {
	constructor() {
		super({
			id: 'works',
			element: '.works',
			elements: {
				navigation: document.querySelector('.navigation'),
				wrapper: '.works__wrapper',
				transition: '.works__transition',
				transitionWrapper: '.works__transition__title__wrapper',
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
