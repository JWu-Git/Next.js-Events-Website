import client from '../../utils/db';

async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const email = req.body.email;

      if (!email || !email.includes('@')) {
        return res.status(500).json({ message: 'Invalid email address' });
      }
      const db = client.db();
      await db.collection('emails').insertOne({ email });
      return res.status(201).json({ message: 'Signed up' });
    } catch (e) {
      return res.status(500).json({ message: 'Inserting data failed' });
    }
  }
}

export default handler;
