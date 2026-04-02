import http from 'http'

const server = http.createServer((req, res) => {
  res.end('Hello 333')
})

const port = 8000

server.listen(8000)
console.log(`running server on port ${port}`)
