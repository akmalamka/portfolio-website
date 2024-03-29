import each from 'lodash/each'
import NormalizeWheel from 'normalize-wheel'

import Canvas from 'components/Canvas'
import Preloader from 'components/Preloader'
import Navigation from 'components/Navigation'

import About from 'pages/About'
import Blog from 'pages/Blog'
import Category from 'pages/Category'
import Home from 'pages/Home'
import Works from 'pages/Works'

import { mapCategoryTag } from 'utils/location'

class App {
	constructor() {
		this.createContent()

		this.createCanvas()
		this.createPreloader()
		this.createPages()
		this.createNavigation()

		this.addEventListeners()
		this.addLinkListeners()

		this.onResize()

		this.update()
	}

	createNavigation() {
		this.navigation = new Navigation({ template: this.template })
	}

	createPreloader() {
		this.preloader = new Preloader({ canvas: this.canvas })
		this.preloader.once('completed', this.onPreloaded.bind(this))
	}

	createCanvas() {
		this.canvas = new Canvas({ template: this.template })
	}

	createContent() {
		this.content = document.querySelector('.content')
		this.template = this.content.getAttribute('data-template')
	}
	createPages() {
		this.pages = {
			about: new About(),
			blog: new Blog(),
			category: new Category(),
			home: new Home(),
			works: new Works(),
		}

		this.page = this.pages[this.template]
		this.page.create()
	}

	/**
	 * Events
	 */

	onPopState() {
		this.onChange({ url: window.location.pathname, push: false })
	}

	onPreloaded() {
		this.onResize()

		this.canvas.onPreloaded()

		this.page.show()
	}

	async onChange({ url, push = true, isHashExist = false, tag = '' }) {
		this.canvas.onChangeStart(this.template, url)

		await this.page.hide()

		const request = await window.fetch(url)

		if (request.status === 200) {
			const html = await request.text()
			const div = document.createElement('div')

			if (push) {
				if (isHashExist && tag.length > 0) {
					window.history.pushState({}, '', `/works#${tag}`)
				} else {
					window.history.pushState({}, '', url)
				}
			}
			div.innerHTML = html

			const divContent = div.querySelector('.content')

			this.template = divContent.getAttribute('data-template')

			this.navigation.onChange(this.template)

			this.content.setAttribute('data-template', this.template)
			this.content.innerHTML = divContent.innerHTML

			this.canvas.onChangeEnd(this.template)

			this.page = this.pages[this.template]

			this.page.create()

			this.onResize()

			this.page.show()

			this.addLinkListeners()
		} else {
			console.log('error')
		}
	}

	onResize() {
		if (this.page && this.page.onResize) {
			this.page.onResize()
		}

		window.requestAnimationFrame((_) => {
			if (this.canvas && this.canvas.onResize) {
				this.canvas.onResize()
			}
		})
	}

	onTouchDown(event) {
		if (this.canvas && this.canvas.onTouchDown) {
			this.canvas.onTouchDown(event)
		}

		if (this.page && this.page.onTouchDown) {
			this.page.onTouchDown(event)
		}
	}

	onTouchMove(event) {
		if (this.canvas && this.canvas.onTouchMove) {
			this.canvas.onTouchMove(event)
		}

		if (this.page && this.page.onTouchMove) {
			this.page.onTouchMove(event)
		}
	}

	onTouchUp(event) {
		if (this.canvas && this.canvas.onTouchUp) {
			this.canvas.onTouchUp(event)
		}

		if (this.page && this.page.onTouchUp) {
			this.page.onTouchUp(event)
		}
	}

	onWheel(event) {
		const normalizedWheel = NormalizeWheel(event)
		if (this.canvas && this.canvas.onWheel) {
			this.canvas.onWheel(normalizedWheel)
		}
		if (this.page && this.page.onWheel) {
			this.page.onWheel(normalizedWheel)
		}
	}

	/**
	 * Loop
	 */

	update() {
		if (this.page && this.page.update) {
			this.page.update()
		}
		if (this.canvas && this.canvas.update) {
			this.canvas.update(this.page.scroll)
		}
		this.frame = window.requestAnimationFrame(this.update.bind(this))
	}

	/**
	 * Listeners
	 */
	addEventListeners() {
		window.addEventListener('wheel', this.onWheel.bind(this))
		window.addEventListener('mousedown', this.onTouchDown.bind(this))
		window.addEventListener('mousemove', this.onTouchMove.bind(this))
		window.addEventListener('mouseup', this.onTouchUp.bind(this))

		window.addEventListener('touchstart', this.onTouchDown.bind(this))
		window.addEventListener('touchmove', this.onTouchMove.bind(this))
		window.addEventListener('touchend', this.onTouchUp.bind(this))

		window.addEventListener('popstate', this.onPopState.bind(this))
		window.addEventListener('resize', this.onResize.bind(this))
	}

	addLinkListeners() {
		const links = document.querySelectorAll('a')
		const buttons = document.querySelectorAll('button')

		each(links, (link) => {
			link.onclick = (event) => {
				const { href } = link
				if (href.includes('localhost:3000') || href.includes('akmal.works')) {
					event.preventDefault()

					this.onChange({ url: href })
				}
			}
		})

		each(buttons, (button) => {
			button.onclick = (event) => {
				if (button.className === 'category__title') {
					event.preventDefault()

					this.onChange({
						url: '/works',
						push: true,
						isHashExist: true,
						tag: mapCategoryTag(button.innerText),
					})
				}
			}
		})
	}
}

new App()
