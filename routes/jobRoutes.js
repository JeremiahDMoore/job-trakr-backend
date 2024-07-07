const express = require('express');
const Job = require('../models/Job');
const multer = require('multer');
const router = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage: storage });

// Create a job
router.post('/', upload.single('jobPhoto'), async (req, res) => {
    try {
        const job = new Job({
            ...req.body,
            jobPhoto: req.file ? req.file.path : ''
        });
        await job.save();
        res.status(201).json(job);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Get all jobs
router.get('/', async (req, res) => {
    try {
        const jobs = await Job.find();
        res.status(200).json(jobs);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
