
import express from "express";

const router = express.Router();

// controllers
const {
  signup,
  signin,
  forgotPassword,
  resetPassword,
  currentUser
} = require("../controllers/auth");

// middleware
import {requireSignin,isAdmin} from "../middlewares/index";

router.get("/", (req, res) => {
  return res.json({
    data: "hello world from auth API",
  });
});

router.post("/signup", signup);
router.post("/signin", signin);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);
router.post("/current-admin",requireSignin,isAdmin,currentUser);


export default router;
