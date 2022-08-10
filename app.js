import 'dotenv/config'
import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import * as prismic from '@prismicio/client'
import * as prismicH from '@prismicio/helpers'
import * as prismicDOM from 'prismic-dom'
import { client } from './src/config/prismicConfig.js'

const app = express()
const port = 3000

app.use((req, res, next) => {
	res.locals.ctx = {
		prismicH,
	}
	// res.locals.prismicDOM = prismicDOM
	next()
})

const __dirname = path.dirname(fileURLToPath(import.meta.url))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.get('/', async (req, res) => {
	const document = await client.getSingle('home')
	console.log(document)
	res.render('pages/home')
	// res.render('pages/home')
})

app.get('/about', (req, res) => {
	res.render('pages/about')
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
