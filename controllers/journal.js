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
  edit: async (req, res) => {
    try {
      const JE = await Journal.findById(req.params.id);
      res.render("edit", { el: JE });
    } catch (err) {
      console.log(err);
    }
  },
  updateEntry: async (req, res) => {
    try {
      const JE = await Journal.findById(req.params.id);
      console.log(req.body, JE);
      JE.content = req.body.entryItem;
      await JE.save();
      console.log("Entry has been updated!");
      res.redirect("/journal");
    } catch (err) {
      console.log(err);
    }
  },
  deleteEntry: async (req, res) => {
    try {
      console.log(req);
      await Journal.findOneAndDelete({ _id: req.body.entryIdFromJSFile });
      console.log("Entry has been deleted!");
      res.json("Deleted Entry");
    } catch (err) {
      console.log(err);
    }
  },
  show: async (req, res) => {
    try {
      const JE = await Journal.findById(req.params.id);
      if (JE == null) res.redirect("/journal");
      res.render("show", { el: JE });
    } catch (err) {
      console.log(err);
    }
  },
};
