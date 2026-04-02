import util from 'util'

const options = {
  name: {
    type: 'string',
  },
  port: {
    type: 'string',
  },
}

const result = util.parseArgs({ options })

const { name, port } = result.values

console.log('hello', name)
