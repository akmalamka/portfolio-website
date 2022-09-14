import About from 'pages/About'
import Blog from 'pages/Blog'
import Home from 'pages/Home'
import Works from 'pages/Works'

import each from 'lodash/each'

class App {
	constructor() {
		this.createContent()
		this.createPages()

		this.addLinkListeners()
	}

	createContent() {
		this.content = document.querySelector('.content')
		this.template = this.content.getAttribute('data-template')
	}
	createPages() {
		this.pages = {
			about: new About(),
			blog: new Blog(),
			home: new Home(),
			works: new Works(),
		}

		this.page = this.pages[this.template]
		this.page.create()
		this.page.show()
	}

	async onChange(url) {
		await this.page.hide()

		const request = await window.fetch(url)

		if (request.status === 200) {
			const html = await request.text()
			console.log(html)
			const div = document.createElement('div')

			div.innerHTML = html

			const divContent = div.querySelector('.content')

			this.template = divContent.getAttribute('data-template')
			this.content.setAttribute('data-template', this.template)
			this.content.innerHTML = divContent.innerHTML

			this.page = this.pages[this.template]
			this.page.create()
			this.page.show()
		} else {
			console.log('error')
		}
	}

	addLinkListeners() {
		const links = document.querySelectorAll('a')

		each(links, (link) => {
			link.onclick = (event) => {
				event.preventDefault()

				const { href } = link

				this.onChange(href)
			}
		})
	}
}

new App()
