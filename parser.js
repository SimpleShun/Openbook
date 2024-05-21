const csv = require('csv-parser')
const fs = require('fs')
const result = []

async function parsecsv() {
	fs.createReadStream('./pg_catalog.csv')
		.pipe(csv())
		.on('data', data => {
			if (data.Language === 'en') {
				result.push(data)
			}
		})
		.on('end', () => {
			let op = []
			let i = 10
			while (i != 0) {
				console.log(result[0])
				--i
			}
			result.forEach((data) => {
				console.log(data.Title)
			})
		})
}
parsecsv()
