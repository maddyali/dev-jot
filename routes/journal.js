const express = require("express");
const router = express.Router();
const journalController = require("../controllers/journal");

router.get("/", journalController.getEntries);

router.get("/new", journalController.newEntry);

router.post("/createEntry", journalController.createEntry);

router.delete("/deleteEntry", journalController.deleteEntry);

module.exports = router;
