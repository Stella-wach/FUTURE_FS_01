import jwt from 'jsonwebtoken'
import Admin from '../models/Admin.model.js'

export const login = async (req, res) => {
  try {
    const { email, password } = req.body
    const admin = await Admin.findOne({ email })
    if (!admin) return res.status(401).json({ error: 'Invalid credentials' })

    const isMatch = await admin.comparePassword(password)
    if (!isMatch) return res.status(401).json({ error: 'Invalid credentials' })

    const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, { expiresIn: '7d' })

    res.status(200).json({
      success: true,
      token,
      user: { id: admin._id, email: admin.email }
    })
  } catch (err) {
    res.status(500).json({ error: 'Server error' })
  }
}

export const seedAdmin = async (req, res) => {
  try {
    const existing = await Admin.findOne({ email: process.env.ADMIN_EMAIL })
    if (existing) return res.status(400).json({ error: 'Admin already exists' })

    await Admin.create({
      email: process.env.ADMIN_EMAIL,
      password: process.env.ADMIN_PASSWORD,
    })
    res.status(201).json({ success: true, message: 'Admin created' })
  } catch (err) {
    console.error('Seed error:', err.message)
    res.status(500).json({ error: err.message })
  }
}