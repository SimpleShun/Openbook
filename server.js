const express = require("express")
const port = 5000;
const app = express()

//routes goes here
app.get('/', express.static('public'))
//

const start = () => {
	try {
		app.listen(port, () => {
			console.log(`Listening to port ${port}`)
		})
	} catch (error) {
		console.error(error)
	}
}

module.exports = { start }

