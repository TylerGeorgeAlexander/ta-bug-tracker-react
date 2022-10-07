const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const bugsController = require("../controllers/bugs");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Bug Routes - simplified for now
router.get("/:id", ensureAuth, bugsController.getBug);

router.post("/createBug", upload.single("file"), bugsController.createBug);

router.put("/likeBug/:id", bugsController.likeBug);

router.delete("/deleteBug/:id", bugsController.deleteBug);

module.exports = router;
