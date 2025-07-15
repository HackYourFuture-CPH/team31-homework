import express from 'express'
import util from 'util'
import { getMeals } from './db.js'
const options = {
  port: {
    type: 'string',
  },
  appName: {
    type: 'string',
  },
}
const { values } = util.parseArgs({ options })

console.log(values)
const port = values.port || 8000
const appName = values.appName
const app = express()

app.get('/', (request, response) => {
  response.send(`hello home from ${appName}`)
})
app.get('/meals', async (request, response) => {
  const meals = await getMeals()

  response.json(meals)
})
app.listen(port, () => {
  console.log('server ready', port)
})
