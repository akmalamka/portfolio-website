import Page from 'classes/Page'

export default class Works extends Page {
	constructor() {
		super({
			element: '.works',
			id: 'works',
			element: {
				navigation: document.querySelector('.navigation'),
				// wrapper: '.works__wrapper',
			},
		})
	}

	create() {
		super.create()
	}
}
