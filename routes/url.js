const express = require("express")
const { handleCreateShortId, handleGetShortId, handleGetAnalyticsShortId, handleServerSideRendering } = require("../controllers/url")
const router = express.Router()

router.post('/', handleCreateShortId)
router.get('/:shortId', handleGetShortId)
router.get('/analytics/:shortId', handleGetAnalyticsShortId)
router.get('/show', handleServerSideRendering)

module.exports = router