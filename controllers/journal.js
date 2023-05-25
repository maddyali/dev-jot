const Journal = require("../models/Journal");

module.exports = {
  getEntries: async (req, res) => {
    try {
      const entries = await Journal.find();
      const totalEntries = await Journal.countDocuments();
      res.render("entries.ejs", { entries, totalEntries });
    } catch (err) {
      console.log(err);
    }
  },
  newEntry: async (req, res) => {
    try {
      res.render("new.ejs");
    } catch (err) {
      console.log(err);
    }
  },
  createEntry: async (req, res) => {
    try {
      await Journal.create({ content: req.body.entryItem });
      console.log("Entry has been added!");
      res.redirect("/journal");
    } catch (err) {
      console.log(err);
    }
  },
};
