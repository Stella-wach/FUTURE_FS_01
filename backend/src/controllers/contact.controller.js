import Contact from '../models/Contact.model.js'

export const sendMessage = async (req, res) => {
  try {
    const { name, email, message } = req.body
    if (!name || !email || !message)
      return res.status(400).json({ error: 'All fields are required' })

    const contact = await Contact.create({ name, email, message })
    res.status(201).json({ success: true, message: 'Message sent!', contact })
  } catch (err) {
    res.status(500).json({ error: 'Server error' })
  }
}

export const getMessages = async (req, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 })
    res.status(200).json(messages)
  } catch (err) {
    res.status(500).json({ error: 'Server error' })
  }
}