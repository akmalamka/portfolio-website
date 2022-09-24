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
		//TODO update animation navbar, disabled the display none, and use animation instead, maybe better to use GSAP timeline for this
		switch (template) {
			case 'home':
				GSAP.set(this.element, {
					color: COLOR_BLACK,
					duration: 1.5,
				})
				each(this.elements.items, (element) => {
					GSAP.set(element, {
						autoAlpha: 1,
						delay: 0.75, //TODO it's for smooth transition in floema because different page has different color, just omit it when unusable
						duration: 0.75,
					})
				})
				break
			case 'about':
				each(this.elements.items, (element, index) => {
					GSAP.set(this.element, {
						color: COLOR_BLACK,
						duration: 1.5,
					})
					if (index === 1) {
						GSAP.set(element, {
							autoAlpha: 0,
							duration: 0.75,
						})
					} else {
						GSAP.set(element, {
							autoAlpha: 1,
							delay: 0.75,
							duration: 0.75,
						})
					}
				})
				break
			case 'works':
				each(this.elements.items, (element, index) => {
					GSAP.set(this.element, {
						color: COLOR_BLACK,
						duration: 1.5,
					})
					if (index === 0) {
						GSAP.set(element, {
							autoAlpha: 0,
							duration: 0.75,
						})
					} else {
						GSAP.set(element, {
							autoAlpha: 1,
							delay: 0.75,
							duration: 0.75,
						})
					}
				})
				break
			case 'blog':
				each(this.elements.items, (element) => {
					GSAP.set(this.element, {
						color: COLOR_WHITE,
						duration: 1.5,
					})
					GSAP.to(element, {
						autoAlpha: 1,
						delay: 0.75,
						duration: 0.75,
					})
				})
				break
		}
	}
}
