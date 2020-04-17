const server = require('./api/server');
// add .env file as stretch
const PORT = 5000

server.listen(PORT, () => {
    console.log(`!!!!! Server is LIVE on ${PORT} !!!!!`)
})