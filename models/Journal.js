const mongoose = require("mongoose");

const journalSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: () => Date.now(),
    immutable: true,
  },
  userId: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Journal", journalSchema);
