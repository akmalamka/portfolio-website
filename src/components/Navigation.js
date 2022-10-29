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

		this.onChange(template)
	}

	onChange(template) {
		this.timeline = GSAP.timeline()

		if (template === 'blog' || template === 'category') {
			this.timeline.set(this.element, {
				color: COLOR_WHITE,
				duration: 1.5,
			})
			each(this.elements.items, (element) => {
				this.timeline.to(element, {
					autoAlpha: 1,
					delay: 0.75,
					duration: 0.75,
				})
			})
		} else {
			this.timeline.set(this.element, {
				color: COLOR_BLACK,
				duration: 1.5,
			})
			each(this.elements.items, (element) => {
				this.timeline.set(element, {
					autoAlpha: 1,
					delay: 0.75, //TODO it's for smooth transition in floema because different page has different color, just omit it when unusable
					duration: 0.75,
				})
			})
		}
	}
}
