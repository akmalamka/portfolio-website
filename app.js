require('dotenv').config()

const express = require('express')
const path = require('path')
const prismic = require('@prismicio/client')
const prismicDOM = require('prismic-dom')
const prismicH = require('@prismicio/helpers')
// const { default: fetch } = require('node-fetch')
const fetch = (...args) =>
	import('node-fetch').then(({ default: fetch }) => fetch(...args))

const app = express()
const port = 3000

app.use((req, res, next) => {
	res.locals.ctx = {
		prismicH,
	}
	// res.locals.prismicDOM = prismicDOM
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
]

const client = prismic.createClient(repoName, {
	fetch,
	accessToken,
	routes,
})

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.get('/', async (req, res) => {
	// client
	// 	.get(prismic.predicate.at('document.type', 'about'))
	// 	.then((response) => {
	// 		console.log(response.results)
	// 		res.render('pages/home')
	// 	})
	// client.getSingle('home').then((response) => {
	// 	console.log(response.data)
	// 	res.render('pages/home')
	// })
	// const document = await client.getSingle('home')
	// console.log(document)
	res.render('pages/home')
})

app.get('/about', (req, res) => {
	client
		.get(prismic.predicate.at('document.type', ['about', 'meta']))
		.then((response) => {
			console.log('Response', response)
			res.render('pages/about')
		})
})

app.get('/works', (req, res) => {
	res.render('pages/works')
})

app.get('/works/:uid', (req, res) => {
	res.render('pages/blog')
})

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})
