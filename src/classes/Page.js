import each from 'lodash/each'
import map from 'lodash/map'
import NormalizeWheel from 'normalize-wheel'
import Prefix from 'prefix'
import GSAP from 'gsap'

import Label from 'animations/Label'
import Paragraph from 'animations/Paragraph'
import Social from 'animations/Social'
import Title from 'animations/Title'

import AsyncLoad from 'classes/AsyncLoad'
import { isHashLocationExist } from 'utils/location'

export default class Page {
	constructor({ element, elements, id }) {
		this.selector = element
		this.selectorChildren = {
			...elements,
			animationsLabels: '[data-animation="label"]',
			animationsParagraphs: '[data-animation="paragraph"]',
			animationsSocials: '[data-animation="social"]',
			animationsTitles: '[data-animation="title"]',

			preloaders: '[data-src]',
		}

		this.id = id

		this.transformPrefix = Prefix('transform')

		this.onMouseWheelEvent = this.onMouseWheel.bind(this)
	}

	create() {
		this.element = document.querySelector(this.selector)

		this.elements = {}

		this.scroll = {
			current: 0,
			target: 0,
			last: 0,
			limit: 0,
		}

		each(this.selectorChildren, (entry, key) => {
			if (
				entry instanceof window.HTMLElement ||
				entry instanceof window.NodeList ||
				Array.isArray(entry)
			) {
				this.elements[key] = entry
			} else {
				this.elements[key] = document.querySelectorAll(entry)
				if (this.elements[key].length === 0) {
					this.elements[key] = null
				} else if (this.elements[key].length === 1) {
					if (!entry.includes('data-animation')) {
						this.elements[key] = document.querySelector(entry)
					}
				}
			}
		})

		this.createAnimations()
		this.createPreloader()
	}

	createAnimations() {
		this.animations = []

		//Labels
		this.animationsLabels = map(this.elements.animationsLabels, (element) => {
			return new Label({ element })
		})

		this.animations.push(...this.animationsLabels)

		//Paragraphs
		this.animationsParagraphs = map(
			this.elements.animationsParagraphs,
			(element) => {
				return new Paragraph({ element })
			}
		)
		this.animations.push(...this.animationsParagraphs)

		//Socials
		this.animationsSocials = map(this.elements.animationsSocials, (element) => {
			return new Social({ element })
		})

		this.animations.push(...this.animationsSocials)

		//Titles
		this.animationsTitles = map(this.elements.animationsTitles, (element) => {
			return new Title({ element })
		})

		this.animations.push(...this.animationsTitles)
	}

	createPreloader() {
		this.preloaders = map(this.elements.preloaders, (element) => {
			return new AsyncLoad({ element })
		})
	}

	/**
	 * Animations
	 */

	show() {
		return new Promise((resolve) => {
			this.animationIn = GSAP.timeline()
			if (isHashLocationExist() && this.id === 'works')
				this.animationIn.set(this.elements.openingWrapper, {
					autoAlpha: 0,
				})
			this.animationIn.fromTo(
				this.element,
				{ autoAlpha: 0 },
				{
					autoAlpha: 1,
					onComplete: resolve,
				}
			)
			this.animationIn.call((_) => {
				this.addEventListeners()

				resolve()
			})
		})
	}

	hide() {
		return new Promise((resolve) => {
			this.destroy()
			this.animateOut = GSAP.timeline()
			this.animateOut.to(this.element, {
				autoAlpha: 0,
				onComplete: resolve,
			})
		})
	}

	/**
	 * Events
	 */

	onMouseWheel(event) {
		const { pixelY } = NormalizeWheel(event)

		this.scroll.target += pixelY
	}

	onResize() {
		if (this.elements.wrapper) {
			this.scroll.limit =
				this.elements.wrapper.clientHeight - window.innerHeight
		}

		each(this.animations, (animation) => animation.onResize())
	}

	/**
	 * Loop
	 */

	update() {
		this.scroll.target = GSAP.utils.clamp(
			0,
			this.scroll.limit,
			this.scroll.target
		)

		this.scroll.current = GSAP.utils.interpolate(
			this.scroll.current,
			this.scroll.target,
			0.1
		)

		if (this.scroll.current < 0.01) {
			this.scroll.current = 0
		}

		if (this.elements.wrapper) {
			this.elements.wrapper.style[
				this.transformPrefix
			] = `translateY(-${this.scroll.current}px)`
		}
	}

	/**
	 * Listeners
	 */
	addEventListeners() {
		window.addEventListener('wheel', this.onMouseWheelEvent)
	}

	removeEventListeners() {
		window.removeEventListener('wheel', this.onMouseWheelEvent)
	}

	/**
	 * Destroy
	 */
	destroy() {
		// super.destroy()
		this.removeEventListeners()
	}
}
