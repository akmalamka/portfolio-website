import each from 'lodash/each'
import map from 'lodash/map'

import Prefix from 'prefix'
import GSAP from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

import Label from 'animations/Label'
import Paragraph from 'animations/Paragraph'
import Social from 'animations/Social'
import Title from 'animations/Title'

import { split } from 'utils/text'

import AsyncLoad from 'classes/AsyncLoad'
import InfiniteMarquee from '../animations/InfiniteMarquee'

export default class Page {
	constructor({ element, elements, id }) {
		this.selector = element
		this.selectorChildren = {
			...elements,
			animationsInfiniteMarquee: '[data-animation="infinite-marquee"]',
			animationsLabels: '[data-animation="label"]',
			animationsParagraphs: '[data-animation="paragraph"]',
			animationsSocials: '[data-animation="social"]',
			animationsTitles: '[data-animation="title"]',
			preloaders: '[data-src]',
		}

		this.id = id

		this.transformPrefix = Prefix('transform')
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

		//Infinite Gallery
		this.animationsInfiniteMarquee = map(
			this.elements.animationsInfiniteMarquee,
			(element) => {
				return new InfiniteMarquee({
					element,
					infiniteLink: this.id === 'blog',
				})
			}
		)

		this.animations.push(...this.animationsInfiniteMarquee)

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

	show(animation) {
		return new Promise((resolve) => {
			if (animation) {
				this.animationIn = animation
			} else {
				this.animationIn = GSAP.timeline()
				if (this.id === 'category') {
					this.animationIn.fromTo(
						this.element,
						{ autoAlpha: 0 },
						{
							autoAlpha: 1,
						}
					)
					each(this.elements.titleWrapper, (element) => {
						this.animationIn.fromTo(
							element,
							{
								height: 0,
							},
							{
								height: element.offsetHeight,
								ease: 'ease.out',
								duration: 0.5,
							},
							`>-0.25`
						)
					})
					each(this.elements.titles, (element) => {
						this.animationIn.fromTo(
							element,
							{ autoAlpha: 0 },
							{ autoAlpha: 1, duration: 0.5 },
							'>-0.25'
						)
					})
				} else if (this.id === 'home') {
					this.animationIn.fromTo(
						this.element,
						{ autoAlpha: 0 },
						{
							autoAlpha: 1,
						}
					)

					GSAP.config({ trialWarn: false })
					GSAP.registerPlugin(ScrollTrigger)
					const splitted = new split({
						element: this.elements.example,
						expression: '<br>',
					})
					console.log({ splitted })
					splitted.forEach((target) => {
						GSAP.to(target, {
							backgroundPositionX: 0,
							ease: 'none',
							scrollTrigger: {
								trigger: target,
								markers: true,
								scrub: 1,
								start: 'top center',
								end: 'bottom center',
							},
						})
					})
				} else {
					this.animationIn.fromTo(
						this.element,
						{ autoAlpha: 0 },
						{
							autoAlpha: 1,
						}
					)
				}
			}

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
			//TODO update animations to expected behavior
			if (this.id === 'category') {
				each(this.elements.titles, (element) => {
					this.animateOut.to(element, { autoAlpha: 0, duration: 0.75 }, '-=0.5')
				})
				each(this.elements.titleWrapper, (element) => {
					this.animateOut.to(
						element,
						{
							height: 0,
							ease: 'ease.out',
							duration: 0.5,
						},
						`>-0.25`
					)
				})
			}
			this.animateOut.to(this.element, {
				autoAlpha: 0,
				onComplete: resolve,
			})
		})
	}

	/**
	 * Events
	 */

	onResize() {
		if (this.elements.wrapper) {
			this.scroll.limit =
				this.elements.wrapper.clientHeight - window.innerHeight
		}

		each(this.animations, (animation) => animation.onResize())
	}

	onWheel({ pixelY }) {
		this.scroll.target += pixelY
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
	addEventListeners() {}

	removeEventListeners() {}

	/**
	 * Destroy
	 */
	destroy() {
		this.removeEventListeners()
	}
}
