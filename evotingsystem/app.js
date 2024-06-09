const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const connectdb = async () => {
  const mongoURI ='mongodb+srv://caseysaga1303:bhNxJJCGI1RAklUC@database1.trbft53.mongodb.net/?retryWrites=true&w=majority&appName=Database1'

  try {
    await mongoose.connect(mongoURI, {
      dbName: 'voting',
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:');
  }
};

connectdb();

// Define schema for votes
const voteSchema = new mongoose.Schema({
  candidate: { type: String, required: true },
  voterAddress: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
});

// Define model for votes
const Vote = mongoose.model('Vote', voteSchema);

// Route to handle vote submissions
app.post('/api/votes', async (req, res) => {
  console.log('Vote submission called');
  const { candidate, voterAddress } = req.body;
  console.log('Candidate:', candidate);
  console.log('Voter Address:', voterAddress);

  try {
    // Validate candidate
    const validCandidates = ['candidate1', 'candidate2', 'candidate3', 'candidate4', 'candidate5', 'bjp', 'aap', 'inc', 'dmk', 'tdp'];
    if (!validCandidates.includes(candidate)) {
      return res.status(400).json({ message: 'Invalid candidate.' });
    }

    // Save the vote to the database
    const vote = new Vote({ candidate, voterAddress });
    await vote.save();
    return res.status(201).json({ message: 'Vote successfully recorded.' });
  } catch (error) {
    console.error('Error recording vote:', error);
    res.status(500).json({ message: 'Internal server error.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
