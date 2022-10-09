import { Mesh, Plane, Program } from 'ogl'
import GSAP from 'gsap'

import fragment from 'shaders/plane-fragment.glsl'
import vertex from 'shaders/plane-vertex.glsl'

export default class {
	constructor({ element, geometry, gl, scene, sizes, transition }) {
		this.element = element
		this.geometry = geometry
		this.gl = gl
		this.scene = scene
		this.sizes = sizes
		this.transition = transition

		this.createTexture()
		this.createProgram()
		this.createMesh()
		this.createBounds({ sizes: this.sizes })

		this.show()
	}

	createTexture() {
		const image = this.element.getAttribute('data-src')
		this.texture = window.TEXTURES[image]
	}

	createProgram() {
		this.program = new Program(this.gl, {
			fragment,
			vertex,
			uniforms: {
				uAlpha: { value: 0 },
				tMap: { value: this.texture },
			},
		})
	}

	createMesh() {
		this.mesh = new Mesh(this.gl, {
			geometry: this.geometry,
			program: this.program,
		})

		this.mesh.setParent(this.scene)
	}

	createBounds({ sizes }) {
		this.sizes = sizes
		this.bounds = this.element.getBoundingClientRect()

		this.updateScale()
		this.updateX()
		this.updateY()
	}

	/**
	 * Animations
	 */

	show() {
		if (this.transition) {
			console.log('transition')
			this.transition.animate(this.mesh, (_) => {
				this.program.uniforms.uAlpha.value = 1
			})
		} else {
			console.log('not transition')
			// GSAP.to(this.program.uniforms.uAlpha, {
			// 	value: 1,
			// })
		}
	}

	hide() {}

	/**
	 * Events
	 */

	onResize(sizes) {
		this.createBounds(sizes)
		this.updateX()
		this.updateY()
	}

	updateScale() {
		this.height = this.bounds.height / window.innerHeight
		this.width = this.bounds.width / window.innerWidth

		this.mesh.scale.x = this.sizes.width * this.width
		this.mesh.scale.y = this.sizes.height * this.height
	}

	updateX() {
		this.x = this.bounds.left / window.innerWidth

		this.mesh.position.x =
			-this.sizes.width / 2 + this.mesh.scale.x / 2 + this.x * this.sizes.width
	}

	updateY() {
		this.y = this.bounds.top / window.innerHeight

		this.mesh.position.y =
			this.sizes.height / 2 - this.mesh.scale.y / 2 - this.y * this.sizes.height
	}

	/**
	 * Loop
	 */
	update(scroll) {
		const y = scroll.current / window.innerHeight

		this.updateX()
		this.updateY()

		this.scene.position.y = y * this.sizes.height
	}

	destroy() {
		this.scene.removeChild(this.mesh)
	}
}
