import Page from 'classes/Page'

export default class Category extends Page {
	constructor() {
		super({
			id: 'category',
			element: '.category',
			elements: {
				navigation: document.querySelector('.navigation'),
				wrapper: '.category__wrapper',
				titleWrapper: '.category__title__wrapper',
				titles: '.category__title',
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
