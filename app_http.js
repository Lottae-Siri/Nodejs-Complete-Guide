const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
  const url = req.url
  const method = req.method

  if (url === '/') {
    res.write('<html>')
    res.write('<header><title>Enter Message</title></header>')
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>')
    res.write('</html>')
    return res.end()
  }

  if (url === '/message' && method === 'POST') {
    const body = []
    req.on('data', (chunk) => {
      console.log(chunk)
      body.push(chunk)
      console.log('body: ', body)
    })

    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString()
      console.log('end', parsedBody)
      const message = parsedBody.split('=')[1]
      fs.writeFileSync('msg.txt', message)
    })
    fs.writeFileSync('message.txt', 'korpong')
    res.statusCode = 302
    res.setHeader('Location', '/')
  
    return res.end()
  }

  res.setHeader('Content-Type', 'text/html')
  res.write('<html>')
  res.write('<header><title>My First Page</title></header>')
  res.write('<body><h1>Hello Node.js Server!!</h1></body>')
  res.write('</html>')
  res.end()
})

server.listen(3000)