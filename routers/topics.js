const router = require('express').Router();
const {getAllTopics, getArticlesByTopic} = require('../controllers');

router.route('/')
  .get(getAllTopics);
router.route('/:topic/articles')
  .get(getArticlesByTopic);
module.exports = router;