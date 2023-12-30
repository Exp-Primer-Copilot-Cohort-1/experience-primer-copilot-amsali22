// Create web server
var express = require('express');
var router = express.Router();
var db = require('../models');
var helpers = require('../helpers/comments');

// Prefix: /api/posts/:id/comments
router.route('/')
    .get(helpers.getComments)
    .post(helpers.createComment)

// Prefix: /api/posts/:id/comments/:commentId
router.route('/:commentId')
    .get(helpers.getComment)
    .put(helpers.updateComment)
    .delete(helpers.deleteComment)

module.exports = router;
