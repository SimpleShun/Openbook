import fs from 'fs'
import { parse } from 'csv-parse'
import neatCsv from 'neat-csv'

const result = []

// async function getCsv() {
// 	let res = await neatCsv('./pg_catalog.csv')
// 	let res2 = []
// 	for (const i of res) {
// 		if (i['Text#'] === 2) {
// 			res2.push(i);
// 		}
// 	}
// 	return res2
// }
//


export const parsecsv = () => {
	return getCsv()
}
