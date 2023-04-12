import client from '../../../utils/db';

async function handler(req, res) {
  const eventId = req.query.commentId;

  if (req.method === 'POST') {
    const { email, name, text } = req.body;
    if (
      !email ||
      !email.includes('@') ||
      !name ||
      name.trim() === '' ||
      !text ||
      text.trim() === ''
    ) {
      return res.status(500).json({ message: 'Invalid inputs' });
    }

    try {
      const comment = {
        eventId,
        text,
        name,
        email,
      };

      const db = client.db();
      await db.collection('comments').insertOne(comment);
      return res.status(201).json({ message: 'Successfully inserted comment' });
    } catch (e) {
      return res.status(500).json({ message: 'DB error' });
    }
  }
  if (req.method === 'GET') {
    try {
      const db = client.db();
      const comments = await db
        .collection('comments')
        .find({ eventId: eventId })
        .project({ _id: 1, text: 1, name: 1 })
        .toArray();
      return res.status(200).json(comments);
    } catch (e) {
      return res.status(500).json({ message: 'DB error' });
    }
  }
}

export default handler;
