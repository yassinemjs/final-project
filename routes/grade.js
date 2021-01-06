const express = require("express");
const { check, validationResult } = require("express-validator");
const Grade = require("../models/Grade");
const router = express.Router();
const auth = require("../middleware/authAdmin");

//http://localhost:4000/api/enseignant/grade
// @route  Post /api/enseignant/grade
// @desc   Post grade
// @access Private
router.post(
  "/",
  auth,
  [check("grade", "grade is required").not().isEmpty()],
  async (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).send(error.array());
    }
    const { grade } = req.body;
    try {
      const newGrade = new Grade({
        grade,
      });
      await newGrade.save();
      res.send(newGrade);
    } catch (error) {
      res.status(500).send("Server Error");
    }
  }
);

// //http://localhost:4000/api/grade
// // @route  Get /api/grade
// // @desc   Get All grade
// // @access Private
// router.get("/", auth, async (req, res) => {
//   try {
//     const grades = await Grade.find();
//     res.json(grades);
//   } catch (error) {
//     console.error(error);
//     res.status(401).send("Server Error");
//   }
// });

module.exports = router;
