import { Plane, Transform } from 'ogl'
import map from 'lodash/map'

import Gallery from './Gallery'

export default class {
	constructor({ gl, scene, sizes }) {
		this.id = 'blog'
		this.gl = gl
		this.scene = scene
		this.sizes = sizes

		this.galleriesGroup = new Transform()

		this.createGeometry()
		this.createGalleries()

		this.galleriesGroup.setParent(this.scene)

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

	/**
	 * Animations
	 */
	show() {
		map(this.galleries, (gallery) => gallery.show())
	}

	hide() {
		map(this.galleries, (gallery) => gallery.hide())
	}

	/**
	 * Events
	 */

	onResize(event) {
		map(this.galleries, (gallery) => gallery.onResize(event)) //TODO: add this.scroll to params
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
	}

	/**
	 * Destroy
	 */
	destroy() {
		map(this.galleries, (gallery) => gallery.destroy())
	}
}
