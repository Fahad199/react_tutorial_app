const express = require('express');
const tutorialController = require('../controller/tutorialController');
const router = express.Router();
const cors = require('cors');


router.use(cors());

// Get all Tutorials
router.get('/tutorials', tutorialController.getAllTutorials);

// Get single Tutorial
router.get('/tutorial/:id', tutorialController.getSingleTutorial);

// Add new Tutorial
router.post('/tutorial', tutorialController.addNewTutorial);

// Delete Tutorial
router.delete('/tutorial/:id', tutorialController.deleteTutorial);

// Delete all Tutorials
router.delete('/tutorials', tutorialController.deleteAllTutorial);

// Edit Tutorial
router.put('/tutorial/:id', tutorialController.editTutorial);

// Get By Title
router.get('/tutorial:title', tutorialController.getByTitle);


module.exports = router;