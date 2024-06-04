import csv_parser from '../csv/parser.js'
import { Router } from 'express'

export const router = Router()

router.get('/', async (req, res) => {
	const result = await csv_parser(Math.floor(Math.random() * 5000))
	res.json(result)
})

router.get('/:id', async (req, res) => {
	const result = await csv_parser(req.params.id)
	res.json(result)
})

