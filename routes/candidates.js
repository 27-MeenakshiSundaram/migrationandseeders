const express = require('express');
const router = express.Router();
const { Candidate } = require('../models/index');

router.get('/', async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const offset = (page - 1) * limit;

    const { count, rows} = await Candidate.findAndCountAll({
      limit,
      offset,
      order: [['createdAt', 'DESC']]
    });

    const totalPages = Math.ceil(count / limit);

    res.json({
      currentPage: page,
      totalPages,
      totalUsers: count,
      rows
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch users' });
  }
});

module.exports = router;
