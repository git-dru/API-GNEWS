const http = require('http');
const express = require('express');
const compression = require('compression');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');

const app = express();

app.use(helmet());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(compression());

app.get("/", (req, res) => {
  res.json({ message: "Welcome to OnPLAY API!" });
});

const server = http.createServer(app);

const PORT = process.env.PORT || 3001;
server.listen(PORT);

server.on('listening', () => {
  logger.info(`Server is Listening on PORT ${PORT}`);
});

module.exports = app;