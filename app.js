require('dotenv').config()

const bodyParser = require('body-parser')
const errorHandler = require('errorhandler')
const express = require('express')
const logger = require('morgan')
const methodOverride = require('method-override')

const isEmpty = require('lodash/isEmpty')

const fetch = (...args) =>
	import('node-fetch').then(({ default: fetch }) => fetch(...args))

const app = express()
const path = require('path')
const port = 3000

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(methodOverride())
app.use(errorHandler())
app.use(express.static(path.join(__dirname, 'public')))

const prismic = require('@prismicio/client')
const prismicDOM = require('prismic-dom')
const prismicH = require('@prismicio/helpers')
const UAParser = require('ua-parser-js')

const addSpan = (word) => {
	return `<span>${word}</span>`
}
const addSpanHandler = (word, category) => {
	let newWord = ''
	if (category === 'letter') {
		for (i = 0; i < word.length; i++) {
			newWord += addSpan(word[i])
		}
		return newWord
	} else if (category === 'word') {
		const category = [
			'kitchen',
			'music',
			'pics',
			'boooks',
			'cat',
			'laptop',
			'enjoy',
		]
		let splittedWord = word.split(' ')

		const result = splittedWord.map((word, index) => {
			if (category.includes(word)) {
				return addSpan(splittedWord[index])
			} else {
				return splittedWord[index]
			}
		})
		return result.join(' ').replace(/\n /g, '<br>').replace(/\n/g, '<br>')
	}
}

const parseDate = (startDate, endDate) => {
	const monthNames = [
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'May',
		'Jun',
		'Jul',
		'Aug',
		'Sep',
		'Oct',
		'Nov',
		'Dec',
	]
	const startDateMonth = monthNames[prismicH.asDate(startDate).getMonth()]
	const startDateYear = prismicH.asDate(startDate).getFullYear()
	const endDateMonth = monthNames[prismicH.asDate(endDate).getMonth()]
	const endDateYear = prismicH.asDate(endDate).getFullYear()
	if (startDateYear === endDateYear) {
		if (startDateMonth === endDateMonth) {
			return `${endDateMonth} ${endDateYear}`
		}
		return `${startDateMonth} - ${endDateMonth} ${endDateYear}`
	}
	return `${startDateMonth} ${startDateYear} - ${endDateMonth} ${endDateYear}`
}

const mapCategoriesIntoIndex = (uid) => {
	switch (uid) {
		case 'cook':
			return 0
		case 'music':
			return 1
		case 'ui-ux':
			return 2
		case 'webdev':
			return 3
		case 'others':
			return 4
	}
}

const compareWorks = (a, b) => {
	if (a.index < b.index) {
		return -1
	} else if (a.index > b.index) {
		return 1
	}
	return 0
}

const handleRequest = async (page) => {
	const meta = await client.getSingle('meta')

	const about = await client.getSingle('about')
	const blogs = await client.getAllByType('blog', {
		fetchLinks: ['work.title', 'work.image', 'work.category'],
	})
	const home = await client.getSingle('home')
	const navbar = await client.getSingle('navbar')
	const preloader = await client.getSingle('preloader')

	const works = await client.getAllByType('work')

	let worksWithIndex = works.map((work) => ({
		...work,
		index: mapCategoriesIntoIndex(work.data.category.uid),
	}))

	worksWithIndex.sort(compareWorks)

	navbar.data.route = page

	const assets = []

	about.data.section.forEach((item) => {
		assets.push(item.section_image.url)
	})

	home.data.story_images.forEach((item) => {
		assets.push(item.story_images_image.url)
	})

	worksWithIndex.forEach((item) => {
		assets.push(item.data.image.url)
	})

	console.log(blogs)
	blogs.forEach((blog) => {
		blog.data.body.forEach((section) => {
			if (section.slice_type === 'text_section') {
				if (!isEmpty(section.primary.section_image)) {
					assets.push(section.primary.section_image.url)
				}
			} else if (section.slice_type === 'gallery') {
				section.items.forEach((media) => {
					assets.push(media.gallery_image.url)
				})
			}
		})
	})

	return {
		assets,
		meta,
		about,
		blogs,
		home,
		navbar,
		preloader,
		works: worksWithIndex,
	}
}
app.use((req, res, next) => {
	const ua = UAParser(req.headers['user-agent'])

	res.locals.isDesktop = ua.device.type === undefined
	res.locals.isPhone = ua.device.type === 'mobile'
	res.locals.isTablet = ua.device.type === 'tablet'
	res.locals.ctx = {
		prismicH,
	}
	res.locals.prismicDOM = prismicDOM

	next()
})

const repoName = 'akmalportfolio'
const accessToken = process.env.PRISMIC_ACCESS_TOKEN

const routes = [
	{
		type: 'home',
		path: '/',
	},
	{
		type: 'about',
		path: '/about',
	},
	{
		type: 'work',
		path: '/works',
	},
	{
		type: 'blog',
		path: '/works/:uid',
	},
]

const client = prismic.createClient(repoName, {
	fetch,
	accessToken,
	routes,
})

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.get('/', async (req, res) => {
	const defaults = await handleRequest('home')
	const { home, works } = defaults

	res.locals.addSpanHandler = addSpanHandler

	let number
	let workImages = []

	for (let i = 0; i < home.data.personalities.length; i++) {
		number = Math.floor(Math.random() * works.length)
		workImages.push(works[number].data.image)
	}

	res.render('pages/home', {
		...defaults,
		workImages,
	})
})

app.get('/about', async (req, res) => {
	const defaults = await handleRequest('about')

	res.render('pages/about', {
		...defaults,
	})
})

app.get('/works', async (req, res) => {
	const categories = await client.getAllByType('category', {
		orderings: {
			field: 'my.category.order',
			direction: 'asc',
		},
	})

	const defaults = await handleRequest('works')

	res.render('pages/works', {
		...defaults,
		categories,
	})
})

app.get('/works/:uid', async (req, res) => {
	const defaults = await handleRequest('blog')
	const { blogs } = defaults

	const blog = blogs.find((blog) => blog.uid === req.params.uid)
	const { id: blogId } = blog

	const blogIndex = blogs.findIndex((blog) => blog.id === blogId)

	const next = blogs[(blogIndex + 1) % blogs.length].data.work

	res.locals.parseDate = parseDate
	res.locals.isEmpty = isEmpty

	res.render('pages/blog', {
		...defaults,
		blog,
		next,
	})
})

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})
