const express = require("express");
const router = express.Router();
const { CountryController } = require("../controllers");

//  @route  GET
router.get("/", (req, res) => {
  const MCC = req.query.hasOwnProperty("MCC") ? req.query.MCC : "";
  const MNC = req.query.hasOwnProperty("MNC") ? req.query.MNC : "";
  CountryController.filterByMCCandMNC(MCC, MNC, (err, data) => {
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(200).json(data);
    }
  });
});

router.get("/all", (req, res) => {
  const MCC = req.query.hasOwnProperty("MCC") ? req.query.MCC : "";
  const Country = req.query.hasOwnProperty("Country") ? req.query.Country : "";
  CountryController.filterByMCCorCountry(MCC, Country, (err, data) => {
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(200).json(data);
    }
  });
});

module.exports = router;
