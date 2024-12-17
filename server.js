const {data}=require('./data.js');

const http = require('node:http');
const server=http.createServer((req,res)=>{
    res.end(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${data.title}</title>
        </head>
        <body>
            <header>
                <h1>${data.title}</h1>
                <h2>${data.subtitle}</h2>
            </header>
            <div>
                <p>${data.description}</p>
                <p><em>${data.author}</em></p>
            </div>
            <footer>
                <p><strong>Contacto</strong></p>
                <ul>
                    <li>Email: ${data.email}</li>
                    <li>Teléfono: ${data.phone}</li>
                </ul>
            </footer>
        </body>
        </html>`)
});
server.listen(0,()=>{
    console.log(`Server listening on port http://localhost:${server.address().port}`)
})
