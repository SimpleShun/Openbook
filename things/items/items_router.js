import { parsecsv } from '../csv/parser.js'
import { Router } from 'express'

export const router = Router()

router.get('/', async (req, res) => {
	let result = await parsecsv();
	console.log(result)
	res.json(result)
})

