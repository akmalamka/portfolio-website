import Page from 'classes/Page'

export default class Home extends Page {
	constructor() {
		super({
			id: 'home',
			element: '.home',
			elements: {
				navigation: document.querySelector('.navigation'),
				wrapper: '.home__wrapper',
				infiniteGalleryWrapper: document.querySelector(
					'.home__personalities__wrapper'
				),
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
