import fs from 'fs'
import { parse } from 'csv-parse'

const path = import.meta.dirname.concat('/pg_catalog.csv')
export default async function csv_parser(id) {
	let records = {}
	const parsed = fs.createReadStream(path)
		.pipe(parse());
	for await (const record of parsed) {
		if (record[0] == id) {
			records = {
				webver: `https://www.gutenberg.org/cache/epub/${record[0]}/pg${record[0]}-images.html`,
				textver: `https://www.gutenberg.org/cache/epub/${record[0]}/pg${record[0]}.txt`,
				imglink: `https://www.gutenberg.org/cache/epub/${record[0]}/pg${record[0]}.cover.medium.jpg `,
				name: `${record[3]}`,
				genre: `${record[6]}`,
				lang: `${record[4]}`,
			}
			return records
		}
	}
}
