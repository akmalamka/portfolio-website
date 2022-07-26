import { Mesh, Plane, Program } from 'ogl'
import GSAP from 'gsap'

import fragment from 'shaders/plane-fragment.glsl'
import vertex from 'shaders/plane-vertex.glsl'

export default class {
	constructor({ gl, scene, sizes, url }) {
		this.gl = gl
		this.scene = scene
		this.sizes = sizes
		this.url = url

		this.geometry = new Plane(this.gl)
	}

	createProgram(texture) {
		this.program = new Program(this.gl, {
			fragment,
			vertex,
			uniforms: {
				uAlpha: { value: 1 },
				tMap: { value: texture },
			},
		})
	}

	createMesh(mesh) {
		this.mesh = new Mesh(this.gl, {
			geometry: this.geometry,
			program: this.program,
		})

		this.mesh.scale.x = mesh.scale.x
		this.mesh.scale.y = mesh.scale.y
		this.mesh.scale.z = mesh.scale.z

		this.mesh.position.x = mesh.position.x
		this.mesh.position.y = mesh.position.y
		this.mesh.position.z = mesh.position.z + 0.01

		this.mesh.setParent(this.scene)
	}

	/**
	 * Element
	 */

	setElement(element) {
		if (element.id === 'works') {
			console.log('aaa')
			const { index, medias } = element

			const media = medias[index]

			this.createProgram(media.texture)
			this.createMesh(media.mesh)

			this.transition = 'blog'
		}
	}

	/**
	 * Animations
	 */

	animate(element, onComplete) {
		console.log(element)
		if (this.transition === 'blog') {
			const timeline = GSAP.timeline({ delay: 1, onComplete })

			timeline.to(
				this.mesh.scale,
				{
					duration: 1.5,
					ease: 'expo.inOut',
					x: element.scale.x,
					y: element.scale.y,
					z: element.scale.z,
				},
				0
			)

			timeline.to(
				this.mesh.position,
				{
					duration: 1.5,
					ease: 'expo.inOut',
					x: element.position.x,
					y: element.position.y,
					z: element.position.z,
				},
				0
			)

			timeline.call((_) => {
				this.scene.removeChild(this.mesh)
			})
		}
	}
}
