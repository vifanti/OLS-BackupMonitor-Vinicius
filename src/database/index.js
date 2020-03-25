const mongoose = require('mongoose');

mongoose.connect(
  'mongodb+srv://test:test@fantinattocluster-vf8hk.mongodb.net/test?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  }
);
mongoose.Promise = global.Promise;

module.exports = mongoose;
