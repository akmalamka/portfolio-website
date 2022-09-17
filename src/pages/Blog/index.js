import Page from 'classes/Page'

export default class Blog extends Page {
	constructor() {
		super({
			id: 'blog',
			element: '.blog',
			elements: {
				navigation: document.querySelector('.navigation'),
			},
		})
	}
}
