import express from 'express'
import { getProjects, createProject, updateProject, deleteProject } from '../controllers/project.controller.js'
import protect from '../middleware/auth.middleware.js'

const router = express.Router()

router.get('/', getProjects)           // public — anyone can view
router.post('/', protect, createProject)      // admin only
router.put('/:id', protect, updateProject)    // admin only
router.delete('/:id', protect, deleteProject) // admin only

export default router