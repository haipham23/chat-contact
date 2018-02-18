const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');

const ContactSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Missing username']
  },
  contact: {
    type: String,
    required: [true, 'Missing contact']
  }
});

ContactSchema.plugin(timestamps);

ContactSchema.index({ username: 1 });

module.exports = mongoose.model('Contact', ContactSchema);
