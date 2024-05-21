const fs = require('fs')
const { default: neatCsv } = require('neat-csv')

const result = []
const filepath = __dirname.concat('/pg_catalog.csv')

// async function parsecsv() {
// 	fs.createReadStream(filepath)
// 		.pipe(csv())
// 		.on('data', data => {
// 			if (data['Title'] == "Give Me Liberty or Give Me Death") {
// 				result.push(data)
// 			}
// 		})
// 		.on('end', () => {
// 			console.log("done")
// 			console.log(result)
// 		})
// 		.on('error', e => console.error(e))
//
// }

async function getCsv() {
	let res = await neatCsv(filepath)
	return res
}
const parsecsv = () => {
	return getCsv()
}

module.exports = { parsecsv }
