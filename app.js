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

const fetch = (...args) =>
	import('node-fetch').then(({ default: fetch }) => fetch(...args))

const app = express()
const port = 3000

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(methodOverride())
app.use(errorHandler())

// const handleLinkResolver = (doc) => {
// 	if (doc.type === 'blog') {
// 		return `/works/${doc.uid}`
// 	}

// 	if (doc.type === 'works') {
// 		return '/works'
// 	}

// 	if (doc.type === 'about') {
// 		return '/about'
// 	}

// 	return '/'
// }

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
	// res.locals.Link = handleLinkResolver if needed
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

	res.render('pages/home', {
		...defaults,
		home,
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
	const categories = await client.getAllByType('category')
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

	const { id: blogId } = blog

	const allBlogs = await client.getAllByType('blog', {
		fetchLinks: 'work.title',
	})

	const blogIndex = allBlogs.findIndex((blog) => blog.id === blogId)

	res.render('pages/blog', {
		...defaults,
		blog,
		next: allBlogs[(blogIndex + 1) % allBlogs.length].data.work,
	})
})

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})
