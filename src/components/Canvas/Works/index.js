import { Plane, Transform } from 'ogl'
import GSAP from 'gsap'
import map from 'lodash/map'
import Prefix from 'prefix'

import Media from './Media'

export default class {
	constructor({ gl, scene, sizes, index = 0 }) {
		this.id = 'works'
		this.gl = gl
		this.scene = scene
		this.sizes = sizes

		this.group = new Transform()

		this.transformPrefix = Prefix('transform')

		this.galleryElement = document.querySelector('.works__gallery')
		this.galleryWrapperElement = document.querySelector(
			'.works__gallery__wrapper'
		)

		this.categoriesElementsClass = 'works__category__wrapper'
		this.categoriesElements = document.querySelectorAll(
			`.${this.categoriesElementsClass}`
		)
		this.categoriesElementsActive = `${this.categoriesElementsClass}--active`

		this.headerTitleClass = 'works__header__title__wrapper__outer'
		this.headerTitleCircleClass = 'works__header__title__circle'
		this.headerTitleElements = document.querySelectorAll(
			`.${this.headerTitleClass}`
		)
		this.headerTitleCircleElements = document.querySelectorAll(
			`.${this.headerTitleCircleClass}`
		)
		this.headerTitleActive = `${this.headerTitleClass}--active`

		this.mediasElements = document.querySelectorAll('.works__gallery__media')
		this.mediasLink = document.querySelectorAll('.works__gallery__link')

		//TODO: add case for IE, https://stackoverflow.com/questions/14275304/how-to-get-margin-value-of-a-div-in-plain-javascript
		this.columnGap =
			parseFloat(
				window
					.getComputedStyle(this.mediasLink[0])
					.marginRight.replace('px', '')
			) * 2

		this.index = index
		this.hasMoved = false

		this.createGeometry()
		this.createGallery()

		this.scroll = {
			current:
				-(this.medias[0].element.clientWidth + this.columnGap) * this.index,
			target:
				-(this.medias[0].element.clientWidth + this.columnGap) * this.index,
			lerp: 0.1,
			velocity: 1,
		}

		this.speed = {
			current: 0,
			target: 0,
			lerp: 0.1,
		}

		this.onResize({ sizes: this.sizes })

		this.group.setParent(this.scene)
		this.onChange(this.index)

		this.show()
	}

	createGeometry() {
		this.geometry = new Plane(this.gl, {
			heightSegments: 20,
			widthSegments: 20,
		})
	}

	createGallery() {
		this.medias = map(this.mediasElements, (element, index) => {
			return new Media({
				element,
				geometry: this.geometry,
				index,
				gl: this.gl,
				scene: this.group,
				sizes: this.sizes,
			})
		})
	}

	/**
	 * Animations
	 */
	show() {
		map(this.medias, (media) => media.show())
	}

	hide() {
		map(this.medias, (media) => media.hide())
	}

	/**
	 * Events
	 */

	onResize(event) {
		this.sizes = event.sizes

		this.columnGap =
			parseFloat(
				window
					.getComputedStyle(this.mediasLink[0])
					.marginRight.replace('px', '')
			) * 2

		this.bounds = this.galleryWrapperElement.getBoundingClientRect()

		// this.scroll.last = this.scroll.target = 0
		this.scroll.last = this.scroll.target =
			-(this.medias[0].element.clientWidth + this.columnGap) * this.index

		map(this.medias, (media) => media.onResize(event, this.scroll))

		this.scroll.limit = this.bounds.width - this.medias[0].element.clientWidth
	}

	onTouchDown({ x, y }) {
		// this.hasMoved = true
		// this.scroll.last = this.scroll.current
	}

	onTouchMove({ x, y }) {
		this.hasMoved = true
		const distance = x.start - x.end
		this.scroll.target = this.scroll.last - distance
	}

	onTouchUp({ x, y }) {}

	onWheel({ pixelY }) {
		this.hasMoved = true
		this.scroll.target += pixelY
	}

	/**
	 * Changed
	 */
	onChange(index) {
		this.index = index

		const selectedCategory = parseInt(
			this.mediasElements[this.index].getAttribute('data-index')
		)

		map(this.categoriesElements, (element, elementIndex) => {
			if (elementIndex === selectedCategory) {
				element.classList.add(this.categoriesElementsActive)
				element.classList.add(
					`${this.categoriesElementsClass}--${elementIndex}`
				)
			} else {
				element.classList.remove(this.categoriesElementsActive)
				element.classList.remove(
					`${this.categoriesElementsClass}--${elementIndex}`
				)
			}
		})
		map(this.headerTitleElements, (element, elementIndex) => {
			if (elementIndex === this.index) {
				element.classList.add(this.headerTitleActive)
			} else {
				element.classList.remove(this.headerTitleActive)
			}
		})
	}

	/**
	 * Loop
	 */

	update() {
		this.speed.target = (this.scroll.target - this.scroll.current) * 0.01

		this.speed.current = GSAP.utils.interpolate(
			this.speed.current,
			this.speed.target,
			this.speed.lerp
		)

		this.scroll.target = GSAP.utils.clamp(
			-this.scroll.limit,
			0,
			this.scroll.target
		)

		this.scroll.current = GSAP.utils.interpolate(
			this.scroll.current,
			this.scroll.target,
			this.hasMoved ? this.scroll.lerp : 0
		)

		this.galleryElement.style[this.transformPrefix] = `translateX(${
			this.hasMoved ? this.scroll.current : 0
		}px)`

		if (this.scroll.last < this.scroll.current) {
			this.scroll.direction = 'right'
		} else if (this.scroll.last > this.scroll.current) {
			this.scroll.direction = 'left'
		}

		this.scroll.last = this.scroll.current

		const index = Math.floor(
			Math.abs(
				(this.scroll.current - this.medias[0].bounds.width / 2) /
					this.scroll.limit
			) *
				(this.medias.length - 1)
		)

		if (this.index !== index) {
			this.onChange(index)
		}

		map(this.medias, (media) => {
			// this is for infinite scrolling
			// const scaleX = media.mesh.scale.x / 2

			// if (this.scroll.direction === 'left') {
			// 	const x = media.mesh.position.x + scaleX
			// 	if (x < -this.sizes.width / 2) {
			// 		media.extra.x += this.width
			// 	}
			// } else if (this.scroll.direction === 'right') {
			// 	const x = media.mesh.position.x - scaleX
			// 	if (x > this.sizes.width / 2) {
			// 		media.extra.x -= this.width
			// 	}
			// }

			media.update(this.scroll.current, this.speed.current, this.index)
		})
	}

	/**
	 * Destroy
	 */
	destroy() {
		this.scene.removeChild(this.group)
	}
}
