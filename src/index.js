import About from 'pages/About'
import Blog from 'pages/Blog'
import Home from 'pages/Home'
import Works from 'pages/Works'

class App {
	constructor() {
		this.createContent()
		this.createPages()
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
	}
}

new App()
