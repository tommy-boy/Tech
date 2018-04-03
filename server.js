const express = require('express')
const bodyParser = require('body-parser');
const path = require("path");

const local = process.env.NODE_ENV === 'local';
const port = process.env.PORT || 3001;
const app = express();

const survey = [];

app.use(bodyParser.json())

app.set('port', process.env.PORT)

app.get('/api/surveyAPI', (req, res) => res.json(data))

app.post('/api/submitAPI', (req, res) => res.json(data = req.body))
app.get('/ping', function (req, res) {
  return res.send('pong');
 });
// express will serve up index.html if it doesn't recognize the route
app.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'public', 'index.html'));
});

if (!local) {
  app.use(express.static(path.join(__dirname, '../client/build')));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'public', 'index.html'));
  })
}

app.listen(port, () => console.log(`Listening on port ${port}`));
