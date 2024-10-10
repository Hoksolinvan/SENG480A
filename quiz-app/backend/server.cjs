const express = require('express');
const app = express();
const port = process.env.PORT || 2000;
const cors = require('cors');
const path = require('path');
const clientDB= require('./config.cjs');
const webscrape = require('./scraper.cjs');

// Middleware to enable CORS and parse JSON request bodies
app.use(cors());
app.use(express.json()); // This middleware is required to parse JSON data in POST requests

app.get('/', (req, res) => {
   res.send('Hello World!');
});


// Endpoint to handle quiz result submission
app.post('/quiz_result', async (req, res) => {
   const { answers } = req.body;
   if (!answers || answers.length < 2) {
      return res.status(400).json({ error: 'Not enough answers provided' });
   }

   try {
      // Insert the answers into the database
      await clientDB.none('INSERT INTO quiz_results (answer1, answer2) VALUES ($1, $2)', [answers[0], answers[1]]);
      res.status(200).json({ message: 'Quiz results successfully saved'});
   } catch (error) {
      console.error('Error saving quiz results:', error.message);
      res.status(500).json({ error: 'Error saving quiz results' });
   }
});



//Endpoint to handle Forms Requests
app.post('/Forms',async (req,res) =>{
   const {Forms} = req.body;
   if(!Forms){
      return res.status(400).json({error: 'Something Went Wrong'});

   }
  

   try{
      //Insert the Submission Forms information into the database
      await clientDB.none('INSERT INTO forms (name,email,message) VALUES ($1, $2, $3)',[Forms[0],Forms[1],Forms[2]]);
      res.status(200).json({message: 'Form Successfully Submitted!'})
   }
   catch (error){
      console.error('Error submitting Form: ',error.message);
      res.status(500).json({error: 'Error saving Form details'});
   }




})


app.get('/webscrape', async (req, res) => {
   console.log("Received a request for /webscrape");  // Add this for debugging
   try {
     const data = await Updater();  
     setTimeout(() => {
      res.status(200).json({ deadlines: data });  // Send the scraped data after the delay
    }, 1000);
   } catch (error) {
     console.error('Error obtaining web-scrape details: ', error.message);
     res.status(500).json({ error: 'Error obtaining web-scrape data' });
   }
 });






// Start the server
app.listen(port, () => {
   console.log(`Server is up at port ${port}`);
});
