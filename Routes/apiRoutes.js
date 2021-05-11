const router = require('express').Router()
const fs = require('fs')

let notes = require('../db/db.json')

// Retrieve current notes
router.get('/notes', (req, res) => {
    res.json(notes)
})

//This will allow you to create a new note
router.post('/notes', (req, res) => {
    var newNote = req.body
    if (notes.length) {
        newNote.id = notes[notes.length - 1].id + 1
    } else {
        newNote.id = 1
    }
    notes.push(newNote)
    fs.writeFile('./db/db.json', JSON.stringify(notes), err => {
        console.log(err)
        res.sendStatus(200)
    })
})

// This will allow you to delete a new note
router.delete("/notes/:id", (req, res) => {
    const removeNote = req.params.id;
    console.log(removeNote);
    const newArr = notes.filter(note => note.id !== removeNote)
    fs.writeFile('./db/db.json', JSON.stringify(newArr), err => {
        notes = newArr
        res.sendStatus(200)
    })
})

module.exports = router;