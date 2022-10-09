import GSAP from 'gsap'
import { Transform } from 'ogl'

import map from 'lodash/map'

import Media from './Media'

export default class {
	constructor({ element, geometry, index, gl, scene, sizes }) {
		this.element = element
		this.elementWrapper = element.querySelector('.blog_gallery_wrapper')
		this.geometry = geometry
		this.index = index
		this.gl = gl
		this.scene = scene
		this.sizes = sizes

		this.group = new Transform()

		this.scroll = {
			current: 0,
			start: 0,
			target: 0,
			lerp: 0.1,
			velocity: 1,
		}

		this.createMedias()
		this.onResize({ sizes: this.sizes })

		this.group.setParent(this.scene)
	}

	createMedias() {
		this.mediasElements = this.element.querySelectorAll('.blog__gallery__media')

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
		this.bounds = this.elementWrapper.getBoundingClientRect()

		this.sizes = event.sizes
		this.width = (this.bounds.width / window.innerWidth) * this.sizes.width
		this.scroll.current = this.scroll.target = 0
		this.scroll.limit = this.bounds.width - this.medias[0].element.clientWidth

		map(this.medias, (media) => media.onResize(event, this.scroll.current))
	}

	onTouchDown({ x, y }) {
		this.scroll.start = this.scroll.current
	}

	onTouchMove({ x, y }) {
		const distance = x.start - x.end

		this.scroll.target = this.scroll.start - distance
	}

	onTouchUp({ x, y }) {}

	/**
	 * Loop
	 */

	update(scroll) {
		//for distance auto scrolling
		// const distance = (scroll.current - scroll.target) * 0.05
		const y = scroll.current / window.innerHeight

		this.scroll.target = GSAP.utils.clamp(
			-this.scroll.limit,
			0,
			this.scroll.target
		)

		if (this.scroll.current < this.scroll.target) {
			this.direction = 'right'
			// for auto scroll
			// this.scroll.velocity = -1
		} else if (this.scroll.current > this.scroll.target) {
			this.direction = 'left'
			// for auto scroll
			// this.scroll.velocity = 1
		}
		// if we want auto scroll
		// this.scroll.target -= this.scroll.velocity
		// this.scroll.target -= distance

		this.scroll.current = GSAP.utils.interpolate(
			this.scroll.current,
			this.scroll.target,
			this.scroll.lerp
		)

		map(this.medias, (media) => {
			// const scaleX = media.mesh.scale.x / 2 + 0.25

			// if (this.direction === 'left') {
			// 	const x = media.mesh.position.x + scaleX
			// 	if (x < -this.sizes.width / 2) {
			// 		media.extra += this.width
			// 	}
			// } else if (this.direction === 'right') {
			// 	const x = media.mesh.position.x - scaleX
			// 	if (x > this.sizes.width / 2) {
			// 		media.extra -= this.width
			// 	}
			// }

			media.update(this.scroll.current)
		})
		this.group.position.y = y * this.sizes.height
	}

	/**
	 * Destroy
	 */

	destroy() {
		this.scene.removeChild(this.group)
	}
}
