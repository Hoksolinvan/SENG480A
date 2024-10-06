const express = require('express');
const app = express();
const port = process.env.PORT || 2000;
const cors = require('cors');
const path = require('path');
const clientDB= require('./config.cjs');

// Middleware to enable CORS and parse JSON request bodies
app.use(cors());
app.use(express.json()); // This middleware is required to parse JSON data in POST requests




app.get('/numbers', async (req, res) => {
   try {
     const numbers = await clientDB.any('SELECT * FROM number');  // Query the 'number' table
     res.json(numbers);  // Send the fetched rows as JSON response
   } catch (error) {
     console.error('Error fetching numbers:', error.message);
     res.status(500).json({ error: 'Error fetching numbers lmao' `${error.message}` });
   }
 });



// Endpoint to handle quiz result submission
app.post('/quiz_result', async (req, res) => {
   const { answers } = req.body;
   if (!answers || answers.length < 2) {
      return res.status(400).json({ error: 'Not enough answers provided' });
   }

   try {
      // Insert the answers into the database
      await clientDB.none('INSERT INTO quiz_results (Answer1, Answer2) VALUES ($1, $2)', [answers[0], answers[1]]);
      res.status(200).json({ message: 'Quiz results successfully saved', answers });
   } catch (error) {
      console.error('Error saving quiz results:', error.message);
      res.status(500).json({ error: 'Error saving quiz results' });
   }
});




// Serve static files (your front-end)
app.use(express.static('public'));

// Catch-all route for serving your front-end (for single-page applications)
app.get('*', (req, res) => {
   res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(port, () => {
   console.log(`Server is up at port ${port}`);
});
