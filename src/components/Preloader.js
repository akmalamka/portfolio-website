import { Texture } from 'ogl'
import GSAP from 'gsap'

import Component from 'classes/Component'

export default class Preloader extends Component {
	constructor({ canvas }) {
		super({
			element: '.preloader',
			elements: {
				firstName: '.preloader__title__first__name',
				lastName: '.preloader__title__last__name',
				number: '.preloader__number',
				numberText: '.preloader__number__text',
				quote: '.preloader__quote',
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

			this.animateOut.to(
				this.elements.quote,
				{
					autoAlpha: 0,
					duration: 1.5,
				},
				'-=1.4'
			)

			this.animateOut
				.to(this.elements.firstName, {
					y: '2000%',
					duration: 9,
				}) //desktop 700 TODO: differentiate between mobile and desktop duration mobile: 6, desktop:9 ,
				.to(this.elements.lastName, { y: '-500%', duration: 3 }, '-=4') //mobile: 5, desktop 7

			// TODO: update animations for numberText if required
			// this.animateOut.to(
			// 	this.elements.numberText,
			// 	{
			// 		duration: 1.5,
			// 		ease: 'expo.out',
			// 		y: '100%',
			// 	},
			// 	'-=1.4'
			// )

			this.animateOut.to(this.element, {
				autoAlpha: 0,
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
