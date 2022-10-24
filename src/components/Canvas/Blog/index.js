import { Plane, Transform } from 'ogl'
import map from 'lodash/map'

import Gallery from './Gallery'
import HeaderMedia from './HeaderMedia'

export default class {
	constructor({ gl, scene, sizes, transition }) {
		this.id = 'blog'
		this.gl = gl
		this.scene = scene
		this.sizes = sizes
		this.transition = transition

		this.galleriesGroup = new Transform()
		this.imageHeaderGroup = new Transform()

		this.createGeometry()
		this.createGalleries()
		this.createHeaderMedia()

		this.galleriesGroup.setParent(this.scene)
		this.imageHeaderGroup.setParent(this.scene)

		this.show()
	}

	createGeometry() {
		this.geometry = new Plane(this.gl)
	}

	createGalleries() {
		this.galleriesElements = document.querySelectorAll('.blog__gallery')

		this.galleries = map(this.galleriesElements, (element, index) => {
			return new Gallery({
				element,
				geometry: this.geometry,
				index,
				gl: this.gl,
				scene: this.galleriesGroup,
				sizes: this.sizes,
			})
		})
	}

	createHeaderMedia() {
		this.imageHeaderElement = document.querySelector(
			'.blog__header__media__image'
		)

		this.imageHeader = new HeaderMedia({
			element: this.imageHeaderElement,
			geometry: this.geometry,
			gl: this.gl,
			scene: this.imageHeaderGroup,
			sizes: this.sizes,
			transition: this.transition,
		})
	}

	/**
	 * Animations
	 */
	show() {
		map(this.galleries, (gallery) => gallery.show())
		this.imageHeader.show()
	}

	hide() {
		map(this.galleries, (gallery) => gallery.hide())
		this.imageHeader.hide()
	}

	/**
	 * Events
	 */

	onResize(event) {
		map(this.galleries, (gallery) => gallery.onResize(event)) //TODO: add this.scroll to params
		// this.imageHeader.onResize(event)
	}

	onTouchDown(event) {
		map(this.galleries, (gallery) => gallery.onTouchDown(event))
	}

	onTouchMove(event) {
		map(this.galleries, (gallery) => gallery.onTouchMove(event))
	}

	onTouchUp(event) {
		map(this.galleries, (gallery) => gallery.onTouchUp(event))
	}

	onWheel({ pixelX, pixelY }) {}

	/**
	 * Loop
	 */

	update(scroll) {
		map(this.galleries, (gallery) => gallery.update(scroll))
		this.imageHeader.update(scroll)
	}

	/**
	 * Destroy
	 */
	destroy() {
		map(this.galleries, (gallery) => gallery.destroy())

		this.imageHeader.destroy()
	}
}
