const Journal = require("../models/Journal");

module.exports = {
  getEntries: async (req, res) => {
    try {
      const entries = await Journal.find();
      res.render("entries.ejs", { entries });
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
