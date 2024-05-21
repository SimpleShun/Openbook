const { parsecsv } = require('../csv/parser.js')
const { Router } = require('express')
const router = Router()

router.get('/', async (req, res) => {
	let result = await parsecsv();
	console.log(result)
	res.json(result)
})

module.exports = router
