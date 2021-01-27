const express = require('express');
const { check, validationResult } = require('express-validator');
const auth = require('../middleware/authAdmin');
const Note = require('../models/Note');
const router = express.Router();
const authAdmin = require('../middleware/authAdmin');

// http://localhost:4000/api/note
// @Route    Post /api/note
// @desc     Post a note for enseignant
// @access   Private
router.post(
  '/',
  auth,
  [check('note', 'Note is required').not().isEmpty()],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).send(error.array());
    }
    const { enseignant, inspector, note, nature, date } = req.body;
    try {
      const newNote = new Note({
        enseignant,
        inspector,
        note,
        nature,
        date,
      });
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
      .populate('enseignant', { Id_unique: 1, name: 1, lastName: 1 })
      .populate('inspector');

    res.send(notes);
  } catch (err) {
    res.status(500).send([{ msg: 'server error' }]);
  }
});

module.exports = router;
