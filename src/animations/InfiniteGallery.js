import GSAP from 'gsap'

import Animation from 'classes/Animation'

export default class InfiniteGallery extends Animation {
	constructor({ element, elements }) {
		super({ element, elements })

		this.wrapperWidth = this.elements.infiniteGalleryWrapper.offsetWidth
	}

	animateIn() {
		this.visible = true
		GSAP.fromTo(
			this.element,
			{
				autoAlpha: 0,
				delay: 0.5,
			},
			{
				autoAlpha: 1,
				duration: 1,
			}
		)
	}

	animateRepeat() {
		GSAP.to(this.element, {
			duration: 20,
			ease: 'none',
			x: `-=${this.wrapperWidth}`, //move each box 500px to right
			modifiers: {
				x: GSAP.utils.unitize((x) => parseFloat(x) % this.wrapperWidth), //force x value to be between 0 and 500 using modulus
			},
			repeat: -1,
		})
	}

	animateOut() {
		if (this.visible) {
			GSAP.set(this.element, {
				x: `+=${this.wrapperWidth}`, //move each box 500px to right
				overwrite: true,
			})
			this.visible = false
		}
	}
}
