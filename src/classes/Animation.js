import each from 'lodash/each'

import Component from 'classes/Component'

export default class Animation extends Component {
	constructor({ element, elements }) {
		super({ element, elements })

		this.createObserver()

		this.animateOut()
		this.isAnimateInCalled = false
	}

	createObserver() {
		this.observer = new window.IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					this.animateIn()
					this.isAnimateInCalled = true
				} else {
					this.animateOut()
				}
				this.animateRepeat()
			})
		})

		this.observer.observe(this.element)
	}

	animateIn() {}

	animateOut() {}

	animateRepeat() {}

	onResize() {}
}
