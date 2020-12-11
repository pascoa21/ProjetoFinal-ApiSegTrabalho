const http = require('http');
const debug = require('debug')('nodestr:server');
const app = require('./SRC/app')

const port = normalizePort(process.env.PORT) || '1991'; /*No e interessante fixar a porta do servidor, sera modificado*/
const server = http.createServer(app);

server.listen(port);
server.on('error', onError);
server.on('listening', onListening)
console.log('API rodando na porta ' + port);

/*Function disponibilizada no gerador de codigo do Express*/
function normalizePort(val) {
    const port = parseInt(val, 10);

    if (isNaN(port)) {
        return val;
    }

    if (port >= 0) {
        return port;
    }

    return false;
}

/*Function tratativa de erros possiveis no servidor*/
function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }
    const bind = typeof port === 'string' ? 'Pipe' + port : 'Port' + port;

    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);

        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);

        default:
            throw error;
    }
}

/*Function para inicar o debug*/
function onListening() {
    const addr = server.address();
    const bind = typeof addr ==='string' ? 'pipe' + addr : 'port' + addr.port;

    debug('Listening on ' + bind)
}