const http = require('http');
const fs = require('fs');

const server = http.createServer ((req, res) => {
    const url = req.url;
    const method = req.method;
    if(url === '/'){
        res.write('<html>')
        res.write('<head><title>This is the home</title></head>')
        res.write('<body><form action="message" method="POST"><input type="text" name="message"><button type="submit">send</button></form></body>')
        res.write('</html>')
        return res.end()
    }
    if(url === '/message' && method === 'POST') {
        res.statusCode = 302;
        fs.writeFileSync('message.txt' , 'Mruad is here');
        res.setHeader('location', '/');
        return res.end();
    }
    res.setHeader('Content-Type', 'text.html')
    res.write('<html>')
    res.write('<head><title>Beginners with node.js</title></head>')
    res.write('<body><h1>The reason i started with node.js</h1></body>')
    res.write('</html>')
    res.end()
})

server.listen(9000);

