import express from 'express'
import { login, seedAdmin } from '../controllers/auth.controller.js'

const router = express.Router()

router.post('/login', login)
router.post('/seed', seedAdmin) // run this once to create your admin account

export default router