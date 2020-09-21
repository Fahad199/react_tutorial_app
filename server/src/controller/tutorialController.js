const Response = require('../utils/response');
const Tutorial = require('../models/tutorial');

// Get all 
const getAllTutorials = ((req, res, next) => {
  Tutorial.find().sort({ title: 1 }).then(results => {
    res.status(200).send(Response.Success(results, 'Success'));
  })
});

//Get By Title
const getByTitle = ((req, res, next) => {
  Tutorial.find(req.params.title).then(tutorial => {
    if (tutorial)
      res.status(200).send(Response.Success(tutorial, 'Success'));
    else
      res.status(404).send(Response.Failure('Tutorial not found'));
  })
})

// Get single tutorial
const getSingleTutorial = ((req, res, next) => {
  Tutorial.findById(req.params.id).then(tutorial => {
    if (tutorial)
      res.status(200).send(Response.Success(tutorial, 'Success'));
    else
      res.status(404).send(Response.Failure('Tutorial not found'));
  })
});



// Add new Tutorial
const addNewTutorial = ((req, res, next) => {
  const tutorial = new Tutorial();
  if (req.body && req.body !== '') {
    tutorial.title = req.body.title;
    tutorial.description = req.body.description;
    tutorial.published = req.body.published;
  }

  tutorial.save((err, tutorial) => {
    if (err)
      res.status(500).send(Response.Failure('Something went wrong'));
    else
      res.status(200).send(Response.Success(req.body, 'Tutorial successfuly added'));
  });
});



// Delete Tutorial
const deleteTutorial = ((req, res, next) => {
  Tutorial.findOneAndDelete({ _id: req.params.id }, (err, result) => {
    if (err)
      res.status(500).send(Response.Failure('Something went wrong'));
    else if (result == null)
      res.status(404).send(Response.Failure('No Tutorial found'));
    else
      res.status(200).send(Response.Success(req.body, 'Tutorial successfuly deleted'));
  })
});

// Delete All Tutorial
const deleteAllTutorial = ((req, res, next) => {

  Tutorial.remove({}, (err, result) => {
    if (err)
      res.status(500).send(Response.Failure('Something went wrong'));
    else if (result == null)
      res.status(404).send(Response.Failure('No Tutorial found'));
    else
      res.status(200).send(Response.Success(req.body, 'Tutorials successfuly deleted'));
  })
});



// Edit Tutorial
const editTutorial = ((req, res, next) => {
  Tutorial.findByIdAndUpdate(
    { _id: req.body._id },
    {
      $set: {
        title: req.body.title,
        description: req.body.description,
        published: req.body.published,
      }
    }, (err, tutorial) => {
      if (err)
        res.status(500).send(Response.Failure('Something went wrong'));
      else
        res.status(200).send(Response.Success('', 'Tutorial successfuly updated'));
    }
  )
});

module.exports = {
  getAllTutorials,
  getByTitle,
  getSingleTutorial,
  addNewTutorial,
  deleteTutorial,
  deleteAllTutorial,
  editTutorial,
};