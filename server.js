import { router } from './things/items/items_router.js'
import express from 'express';
const port = 5000;
const app = express()

//routes goes here
app.use('/', express.static('public'))

app.use('/api/things', router);
//

export const start = () => {
	try {
		app.listen(port, () => {
			console.log(`Listening to port ${port}`)
		})
	} catch (error) {
		console.error(error)
	}
}
