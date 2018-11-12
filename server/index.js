const mongoose = require('mongoose');
const http = require('http');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/coding_resources', { useNewUrlParser: true }).then(() => console.log('Database Connected!'));

const app = require('./app');

const PORT = process.env.PORT || 5000;

const server = http.createServer(app);

server.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
