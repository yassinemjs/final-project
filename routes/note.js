const express = require('express');
const { check, validationResult } = require('express-validator');
const Note = require('../models/Note');
const Enseignant = require('../models/Enseignant');
const router = express.Router();
const authAdmin = require('../middleware/authAdmin');

// http://localhost:4000/api/note
// @Route    Post /api/note
// @desc     Post a note for enseignant
// @access   Private
router.post(
  '/',
  authAdmin,
  [check('note', 'Note is required').not().isEmpty()],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).send(error.array());
    }
    const { enseignant, inspector, note, nature } = req.body;
    try {
      const newNote = new Note({
        enseignant,
        inspector,
        note,
        nature,
      });
      const prof = await Enseignant.findById(enseignant);
      if (!prof) {
        return res.status(400).send([{ msg: 'prof not found' }]);
      }
      await newNote.save();
      res.send(newNote);
    } catch (error) {
      console.error(error);
      res.status(500).send('Server Error');
    }
  }
);

//@ x  *get all notes by admin  *private
router.get('/all', authAdmin, async (req, res) => {
  try {
    const notes = await Note.find()
      .sort({ date: -1 })
      .populate('enseignant')
      .populate('inspector');

    res.send(notes);
  } catch (err) {
    res.status(500).send([{ msg: 'server error' }]);
  }
});

module.exports = router;
