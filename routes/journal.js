const express = require("express");
const router = express.Router();
const journalController = require("../controllers/journal");

router.get("/", journalController.getEntries);

router.post("/createEntry", journalController.createEntry);

module.exports = router;