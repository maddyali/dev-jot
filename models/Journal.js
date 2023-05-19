const mongoose = require("mongoose");

const journalSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Journal", journalSchema);
