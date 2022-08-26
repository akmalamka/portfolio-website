require('dotenv').config()

const bodyParser = require('body-parser')
const errorHandler = require('errorhandler')
const express = require('express')
const logger = require('morgan')
const methodOverride = require('method-override')
const path = require('path')
const prismic = require('@prismicio/client')
const prismicDOM = require('prismic-dom')
const prismicH = require('@prismicio/helpers')

const isEmpty = require('lodash/isEmpty')

const fetch = (...args) =>
	import('node-fetch').then(({ default: fetch }) => fetch(...args))

const app = express()
const port = 3000

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(methodOverride())
app.use(errorHandler())
app.use(express.static(path.join(__dirname, 'public')))

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
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
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
const handleRequest = async () => {
	const meta = await client.getSingle('meta')
	const navbar = await client.getSingle('navbar')
	const preloader = await client.getSingle('preloader')

	return {
		meta,
		navbar,
		preloader,
	}
}
app.use((req, res, next) => {
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
	const defaults = await handleRequest()
	const home = await client.getSingle('home')
	const works = await client.getAllByType('work')

	// const mediaQuery = window.matchMedia('(min-width: 768px)')
	// if (mediaQuery) {
	// 	console.log('aaa')
	// }

	res.locals.addSpanHandler = addSpanHandler

	let number
	let workImages = []

	for (let i = 0; i < home.data.personalities.length; i++) {
		number = Math.floor(Math.random() * works.length)
		workImages.push(works[number].data.image)
	}

	res.render('pages/home', {
		...defaults,
		home,
		workImages,
	})
})

app.get('/about', async (req, res) => {
	const about = await client.getSingle('about')
	const defaults = await handleRequest()

	res.render('pages/about', {
		...defaults,
		about,
	})
})

app.get('/works', async (req, res) => {
	const categories = await client.getAllByType('category', {
		orderings: {
			field: 'my.category.order',
			direction: 'asc',
		},
	})
	const defaults = await handleRequest()
	const works = await client.getAllByType('work')

	res.render('pages/works', {
		...defaults,
		categories,
		works,
	})
})

app.get('/works/:uid', async (req, res) => {
	const blog = await client.getByUID('blog', req.params.uid, {
		fetchLinks: ['work.title', 'work.image', 'work.category'],
	})
	const defaults = await handleRequest()

	res.locals.parseDate = parseDate
	res.locals.isEmpty = isEmpty

	const { id: blogId } = blog

	const allBlogs = await client.getAllByType('blog', {
		fetchLinks: ['work.title', 'work.category'],
	})

	const blogIndex = allBlogs.findIndex((blog) => blog.id === blogId)

	const next = allBlogs[(blogIndex + 1) % allBlogs.length].data.work

	res.render('pages/blog', {
		...defaults,
		blog,
		next,
	})
})

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})
