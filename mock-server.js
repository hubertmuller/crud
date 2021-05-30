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
            },
            {
                "id": 3,
                "imie": "Stefan",
                "nazwisko": "Kowalski"
            }
        ]`);
    } else if (req.method === 'GET' && req.url.startsWith('/api/lista/')) {
        var id = req.url.split("/")[3];
        res.end(`{
            "id": ` + id +`,
            "imie": "Tomasz",
            "nazwisko": "Król`+ Math.ceil(Math.random()*32) +`",
            "wiek": 32,
            "pesel": "2412421412"
        }`);
    }
    else {
        res.end();
    }
} );

server.listen(port, '127.0.0.1', () => {
    console.log('Serwer wystartowal na porcie ' + port);
});