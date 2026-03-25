import Project from '../models/Project.model.js'

export const getProjects = async (req, res) => {
  try {
    const projects = await Project.find().sort({ order: 1 })
    res.status(200).json(projects)
  } catch (err) {
    res.status(500).json({ error: 'Server error' })
  }
}

export const createProject = async (req, res) => {
  try {
    const project = await Project.create(req.body)
    res.status(201).json(project)
  } catch (err) {
    res.status(500).json({ error: 'Server error' })
  }
}

export const updateProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (!project) return res.status(404).json({ error: 'Project not found' })
    res.status(200).json(project)
  } catch (err) {
    res.status(500).json({ error: 'Server error' })
  }
}

export const deleteProject = async (req, res) => {
  try {
    await Project.findByIdAndDelete(req.params.id)
    res.status(200).json({ success: true, message: 'Project deleted' })
  } catch (err) {
    res.status(500).json({ error: 'Server error' })
  }
}