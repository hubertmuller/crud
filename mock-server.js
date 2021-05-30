const http = require('http');
const port = 3200;

const server = http.createServer( (req, res) => {
    console.log('wlasnie przyszlo zapytanie.');

    res.setHeader('Content-type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', '*');

    if (req.method === 'GET' && req.url === '/api/lista') {
        res.end(`[
            {
                "id": 1,
                "imie": "Tomasz",
                "nazwisko": "Król"
            },
            {
                "id": 2,
                "imie": "Adam",
                "nazwisko": "Nowak"
            }
        ]`);
    } else {
        res.end();
    }
} );

server.listen(port, '127.0.0.1', () => {
    console.log('Serwer wystartowal na porcie ' + port);
});