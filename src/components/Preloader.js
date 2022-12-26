import { Texture } from 'ogl'
import GSAP from 'gsap'

import Component from 'classes/Component'
import Detection from 'classes/Detection'

export default class Preloader extends Component {
	constructor({ canvas }) {
		super({
			element: '.preloader',
			elements: {
				firstName: '.preloader__title__first__name',
				lastName: '.preloader__title__last__name',
				number: '.preloader__number',
				numberText: '.preloader__number__text',
			},
		})

		this.canvas = canvas

		window.TEXTURES = {}

		this.length = 0
		this.createLoader()
	}

	createLoader() {
		window.ASSETS.forEach((image) => {
			const texture = new Texture(this.canvas.gl, {
				generateMipmaps: false,
			})

			const media = new window.Image()
			media.crossOrigin = 'anonymous'
			media.src = image

			media.onload = (_) => {
				texture.image = media
				this.onAssetLoaded()
			}

			window.TEXTURES[image] = texture
		})
	}

	onAssetLoaded(image) {
		this.length += 1

		const percent = this.length / window.ASSETS.length

		this.elements.numberText.innerHTML = `${Math.round(percent * 100)}%`

		if (percent === 1) {
			this.onLoaded()
		}
	}

	onLoaded() {
		return new Promise((resolve) => {
			this.emit('completed')

			this.animateOut = GSAP.timeline({
				delay: 1,
			})

			this.animateOut.to(
				this.elements.numberText,
				{
					autoAlpha: 0,
					duration: 1.5,
				},
				'-=1.4'
			)

			this.animateOut.fromTo(
				this.elements.firstName,
				{
					autoAlpha: 0,
				},
				{ autoAlpha: 1, duration: 1 }
			)

			this.animateOut.fromTo(
				this.elements.lastName,
				{
					autoAlpha: 0,
				},
				{ autoAlpha: 1, duration: 1 },
				'-=1'
			)

			this.animateOut.to(this.elements.firstName, {
				x: Detection.isPhone() ? '-150%' : '-100%',
				duration: 2.5,
			})

			this.animateOut.to(
				this.elements.lastName,
				{ x: '150%', duration: 2 },
				'-=1.5'
			)

			this.animateOut.to(this.element, {
				autoAlpha: 0,
				duration: 1.5,
			})

			this.animateOut.call((_) => {
				this.destroy()
			})
		})
	}

	destroy() {
		this.element.parentNode.removeChild(this.element)
	}
}
