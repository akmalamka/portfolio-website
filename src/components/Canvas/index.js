import { Camera, Renderer, Transform } from 'ogl'

import Blog from './Blog'
import Home from './Home'
import Works from './Works'

export default class Canvas {
	constructor({ template }) {
		this.template = template
		this.x = {
			start: 0,
			distance: 0,
			end: 0,
		}

		this.y = {
			start: 0,
			distance: 0,
			end: 0,
		}

		this.createRenderer()
		this.createCamera()
		this.createScene()

		this.onResize()
	}

	createRenderer() {
		this.renderer = new Renderer({
			alpha: true,
			antialias: true,
		})

		this.gl = this.renderer.gl

		document.body.appendChild(this.gl.canvas)
	}

	createCamera() {
		this.camera = new Camera(this.gl)
		this.camera.position.z = 5
	}

	createScene() {
		this.scene = new Transform()
	}

	/**
	 * Home
	 */
	createHome() {
		this.home = new Home({ gl: this.gl, scene: this.scene, sizes: this.sizes })
	}

	destroyHome() {
		if (!this.home) return
		this.home.destroy()
		this.home = null
	}

	/**
	 * Blog
	 */
	createBlog() {
		this.blog = new Blog({
			gl: this.gl,
			scene: this.scene,
			sizes: this.sizes,
		})
	}

	destroyBlog() {
		if (!this.blog) return
		this.blog.destroy()
		this.blog = null
	}

	/**
	 * Works
	 */
	createWorks() {
		const hash = window.location.hash.substring(1)
		this.mediasElements = document.querySelectorAll('.works__gallery__media')

		let firstIndex
		this.mediasElements.forEach((element, index) => {
			if (element.getAttribute('id') === `first-${hash}`) {
				firstIndex = index
			}
		})

		this.works = new Works({
			gl: this.gl,
			scene: this.scene,
			sizes: this.sizes,
			index: firstIndex,
		})
	}

	destroyWorks() {
		if (!this.works) return
		this.works.destroy()
		this.works = null
	}

	/**
	 * Events
	 */

	onPreloaded() {
		this.onChangeEnd(this.template)
	}

	onChangeStart(template, url) {
		if (this.blog) {
			this.blog.hide()
		}
		if (this.home) {
			this.home.hide()
		}
		if (this.works) {
			this.works.hide()
		}
	}

	onChangeEnd(template) {
		if (template === 'blog') {
			this.createBlog()
		} else {
			this.destroyBlog()
		}

		//TODO: remove everything related to home canvas
		// if (template === 'home') {
		// 	this.createHome()
		// } else {
		// 	this.destroyHome()
		// }

		if (template === 'works') {
			this.createWorks()
		} else {
			this.destroyWorks()
		}

		this.template = template
	}

	onResize() {
		this.renderer.setSize(window.innerWidth, window.innerHeight)

		this.camera.perspective({ aspect: window.innerWidth / window.innerHeight })

		const fov = this.camera.fov * (Math.PI / 180)
		const height = 2 * Math.tan(fov / 2) * this.camera.position.z
		const width = height * this.camera.aspect

		this.sizes = {
			height,
			width,
		}

		const values = { sizes: this.sizes }

		if (this.blog) {
			this.blog.onResize(values)
		}
		if (this.home) {
			this.home.onResize(values)
		}
		if (this.works) {
			this.works.onResize(values)
		}
	}

	onTouchDown(event) {
		this.isDown = true

		this.x.start = event.touches ? event.touches[0].clientX : event.clientX
		this.y.start = event.touches ? event.touches[0].clientY : event.clientY

		const values = { x: this.x, y: this.y }
		if (this.blog) {
			this.blog.onTouchDown(values)
		}
		if (this.home) {
			this.home.onTouchDown(values)
		}
		if (this.works) {
			this.works.onTouchDown(values)
		}
	}

	onTouchMove(event) {
		if (!this.isDown) return

		const x = event.touches ? event.touches[0].clientX : event.clientX
		const y = event.touches ? event.touches[0].clientY : event.clientY

		this.x.end = x
		this.y.end = y

		const values = { x: this.x, y: this.y }
		if (this.blog) {
			this.blog.onTouchMove(values)
		}
		if (this.home) {
			this.home.onTouchMove(values)
		}
		if (this.works) {
			this.works.onTouchMove(values)
		}
	}

	onTouchUp(event) {
		this.isDown = false
		const x = event.changedTouches
			? event.changedTouches[0].clientX
			: event.clientX
		const y = event.changedTouches
			? event.changedTouches[0].clientY
			: event.clientY

		this.x.end = x
		this.y.end = y

		const values = { x: this.x, y: this.y }
		if (this.blog) {
			this.blog.onTouchUp(values)
		}
		if (this.home) {
			this.home.onTouchUp(values)
		}
		if (this.works) {
			this.works.onTouchUp(values)
		}
	}

	onWheel(event) {
		if (this.home) {
			this.home.onWheel(event)
		}
		if (this.works) {
			this.works.onWheel(event)
		}
	}

	/**
	 * Loop
	 */

	update(scroll) {
		if (this.blog) {
			this.blog.update(scroll)
		}
		if (this.home) {
			this.home.update()
		}
		if (this.works) {
			this.works.update()
		}

		this.renderer.render({
			camera: this.camera,
			scene: this.scene,
		})
	}
}
