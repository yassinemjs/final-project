const express = require('express');
const auth = require('../middleware/authAdmin');
const { check, validationResult } = require('express-validator');
const Inspector = require('../models/Inspector');
const router = express.Router();

// http://localhost:4000/api/inspecteur
// @Route    Post inspector
// @desc     Post an inspector
// @access   Private
router.post(
  '/',
  auth,
  [check('inspector', 'Inspector is required').not().isEmpty()],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).send(error.array());
    }
    const { inspector } = req.body;
    try {
      const newIns = new Inspector({
        inspector,
      });
      await newIns.save();
      res.send(newIns);
    } catch (error) {
      console.error(error);
      res.status(500).send('Server Error');
    }
  }
);

// http://localhost:4000/api/inspecteur
// @Route    GEt inspector
// @desc     get all inspectors
// @access   Private

router.get('/', async (req, res) => {
  try {
    const insp = await Inspector.find();

    res.send(insp);
  } catch (err) {
    res.status(500).send([{ msg: 'server error' }]);
  }
});

module.exports = router;
