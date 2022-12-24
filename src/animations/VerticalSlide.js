import GSAP from 'gsap'

import Animation from 'classes/Animation'

export default class VerticalSlide extends Animation {
	constructor({ element, elements }) {
		super({ element, elements })
	}

	animateIn() {
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

	animateOut() {
		GSAP.set(this.element, {
			autoAlpha: 0,
		})
	}

	animateRepeat() {
		var vSlideOptions = {
			slides: this.elements.currentText,
			list: this.element,
			duration: 1,
			lineHeight: 12,
		}

		var vSlide = GSAP.timeline({
			paused: true,
			repeat: -1,
		})

		vSlideOptions.slides.forEach(function (slide, i) {
			// Create a label
			let label = 'slide' + i
			vSlide.add(label)
			// Move the whole word
			vSlide.to(
				vSlideOptions.list,
				{
					duration: vSlideOptions.duration,
					y: i * -1 * vSlideOptions.lineHeight,
				},
				label
			)
			// Add some blank space before the next animation
			vSlide.to({}, { duration: 4 })
		})

		vSlide.play()
	}
}
