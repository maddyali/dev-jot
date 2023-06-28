const express = require("express");
const router = express.Router();
const journalController = require("../controllers/journal");

router.get("/", journalController.getEntries);

router.get("/new", journalController.newEntry);

router.post("/createEntry", journalController.createEntry);

router.get("/edit/:id", journalController.edit);

router.get("/:id", journalController.show);

router.put("/:id", journalController.updateEntry);

router.delete("/deleteEntry", journalController.deleteEntry);

module.exports = router;
