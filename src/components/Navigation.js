import GSAP from 'gsap'
import each from 'lodash/each'

import Component from 'classes/Component'

import { COLOR_BLACK, COLOR_WHITE } from 'utils/colors'
import { isHashLocationExist } from '../utils/location'

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
		//TODO update animation navbar, disabled the display none, and use animation instead, maybe better to use GSAP timeline for this
		if (template === 'works') {
			this.timeline.set(this.elements.items[2], {
				autoAlpha: 0,
			})
			this.timeline.set(this.element, {
				color: isHashLocationExist() ? COLOR_BLACK : COLOR_WHITE,
				duration: 1.5,
			})
			each(this.elements.items, (element, index) => {
				if (index !== 2) {
					this.timeline.to(element, {
						autoAlpha: 1,
						delay: 0.75,
						duration: 0.75,
					})
				}
			})
		} else if (template === 'blog') {
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
		// switch (template) {
		// 	case 'home':
		// 		this.timeline.set(this.element, {
		// 			color: COLOR_BLACK,
		// 			duration: 1.5,
		// 		})
		// 		each(this.elements.items, (element) => {
		// 			this.timeline.set(element, {
		// 				autoAlpha: 1,
		// 				delay: 0.75, //TODO it's for smooth transition in floema because different page has different color, just omit it when unusable
		// 				duration: 0.75,
		// 			})
		// 		})
		// 		break
		// 	case 'about':
		// 		each(this.elements.items, (element, index) => {
		// 			this.timeline.set(this.element, {
		// 				color: COLOR_BLACK,
		// 				duration: 1.5,
		// 			})
		// 			if (index === 1) {
		// 				this.timeline.set(element, {
		// 					autoAlpha: 0,
		// 					duration: 0.75,
		// 				})
		// 			} else {
		// 				this.timeline.set(element, {
		// 					autoAlpha: 1,
		// 					delay: 0.75,
		// 					duration: 0.75,
		// 				})
		// 			}
		// 		})
		// 		break
		// 	case 'works':
		// 		each(this.elements.items, (element, index) => {
		// 			this.timeline.set(this.element, {
		// 				color: COLOR_BLACK,
		// 				duration: 1.5,
		// 			})
		// 			if (index === 0) {
		// 				this.timeline.set(element, {
		// 					autoAlpha: 0,
		// 					duration: 0.75,
		// 				})
		// 			} else {
		// 				this.timeline.set(element, {
		// 					autoAlpha: 1,
		// 					delay: 0.75,
		// 					duration: 0.75,
		// 				})
		// 			}
		// 		})
		// 		break
		// 	case 'blog':
		// 		each(this.elements.items, (element) => {
		// 			this.timeline.set(this.element, {
		// 				color: COLOR_WHITE,
		// 				duration: 1.5,
		// 			})
		// 			this.timeline.to(element, {
		// 				autoAlpha: 1,
		// 				delay: 0.75,
		// 				duration: 0.75,
		// 			})
		// 		})
		// 		break
		// }
	}
}
