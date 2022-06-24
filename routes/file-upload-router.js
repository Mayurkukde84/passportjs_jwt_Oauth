'use strict'

const express = require('express');
const upload = require('../helpers/filehelper')
const singleFileUpload = require('../controllers/fileuploaderController');

const uploadRouter = express.Router();

uploadRouter.post('/singlefile',upload.single('file'),singleFileUpload);

module.exports = uploadRouter
