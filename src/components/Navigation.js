import GSAP from 'gsap'
import each from 'lodash/each'

import Component from 'classes/Component'

import { COLOR_BLACK, COLOR_WHITE } from 'utils/colors'

export default class Navigation extends Component {
	constructor({ template }) {
		super({
			element: '.navigation',
			elements: {
				items: '.navigation__list__item',
				links: '.navigation__list__link',
			},
		})

		this.disableGradientClass = 'navigation--disable-gradient'

		this.onChange(template)
	}

	onChange(template) {
		this.timeline = GSAP.timeline()

		if (template === 'category' || template === 'works') {
			this.element.classList.add(this.disableGradientClass)
		} else {
			this.element.classList.remove(this.disableGradientClass)
		}

		if (template === 'category') {
			this.timeline.set(this.element, {
				color: COLOR_WHITE,
				duration: 1.5,
			})
		} else {
			this.timeline.set(this.element, {
				color: COLOR_BLACK,
				duration: 1.5,
			})
		}
		each(this.elements.items, (element, index) => {
			this.timeline.set(element, {
				autoAlpha:
					(template === 'works' || template === 'category') && index === 2
						? 0
						: 1,
				delay: 0.75, //it's for smooth transition in floema because different page has different color, just omit it when unusable
				duration: 0.75,
			})
		})
	}
}
