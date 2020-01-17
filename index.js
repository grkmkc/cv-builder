const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');

// IMPORT MODELS
require('./models/User');
require('./models/Categories');

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(
  process.env.MONGODB_URI || `mongodb://localhost:27017/node-react-starter`,
  { useUnifiedTopology: true, useNewUrlParser: true }
);

app.use(helmet());
app.use(cors());
app.use(bodyParser.json());

//IMPORT ROUTES
require('./routes/loginRoutes')(app);
require('./routes/userRoutes')(app);
require('./routes/categoryRoutes')(app);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.use(compression());
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`);
});
