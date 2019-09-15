const path = require('path');
const dotenv = require('dotenv');
const express = require('express');
const chalk = require('chalk');
const debug = require('debug');
const cors = require('cors');

dotenv.config();
const app = express();
const log = debug('prod');
const port = process.env.PORT || 3000;
const staticFolder = path.join(__dirname, '../', 'build');

app.use(cors());
app.use(express.static(staticFolder));

app.get('*', (req, res) => {
  res.sendFile(path.join(staticFolder, 'index.html'));
});

app.listen(port, () => {
  log(`Server running on port ${chalk.green(port)}`);
});
