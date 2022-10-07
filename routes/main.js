const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");
const homeController = require("../controllers/home");
const bugsController = require("../controllers/bugs");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Main Routes - simplified for now
router.get("/", homeController.getIndex);
router.get("/profile", ensureAuth, bugsController.getProfile);
router.get("/feed", ensureAuth, bugsController.getFeed);
router.get("/login", authController.getLogin);
router.post("/login", authController.bugLogin);
router.get("/logout", authController.logout);
router.get("/signup", authController.getSignup);
router.post("/signup", authController.bugSignup);

module.exports = router;
