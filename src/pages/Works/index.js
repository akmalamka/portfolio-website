import Page from 'classes/Page'

export default class Works extends Page {
	constructor() {
		super({
			id: 'works',
			element: '.works',
			element: {
				navigation: document.querySelector('.navigation'),
				wrapper: '.works__wrapper',
			},
		})
	}

	create() {
		super.create()
	}
}
