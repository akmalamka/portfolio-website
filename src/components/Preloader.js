import Component from 'classes/Component'

import each from 'lodash/each'

export default class Preloader extends Component {
	constructor() {
		super({
			element: '.preloader',
			elements: {
				firstName: '.preloader__title__first__name',
				lastName: '.preloader__title__last__name',
				number: '.preloader__number',
				images: document.querySelectorAll('img'),
			},
		})
		this.createLoader()
	}

	createLoader() {
		each(this.elements.images, (image) => {
			console.log(image)
		})
	}
}
