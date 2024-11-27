const express = require('express');
const app = express();
const port = process.env.PORT || 2000;
const cors = require('cors');
const path = require('path');
const dotenv = require("dotenv").config();
const SibApiV3Sdk = require('sib-api-v3-sdk');
const clientDB= require('./config.cjs');
const bcrypt = require('bcrypt');
const {Updater}= require('./scraper.cjs');


const defaultClient = SibApiV3Sdk.ApiClient.instance;
var apiKey = defaultClient.authentications["api-key"];
apiKey.apiKey = process.env.BREVOAPI;



// Middleware to enable CORS and parse JSON request bodies
app.use(cors());
app.use(express.json()); // This middleware is required to parse JSON data in POST requests

app.get('/', (req, res) => {
   res.send('Hello World!');
});

// Endpoint to handle quiz result submission
app.post('/quiz_result', async (req, res) => {
   const { answers } = req.body;
   if (!answers) {
      return res.status(400).json({ error: 'Not enough answers provided :(' });
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

   try {

   const data = await Updater();
     const rows = await clientDB.one('SELECT * FROM deadlines')
     const resultArray = [rows.sfu, rows.ubc, rows.uvic, rows.ufv, rows.bcit, rows.tru, rows.ecuad, rows.capilano]
     res.status(200).json(resultArray);
   }
    catch (error) {
     console.error('Error obtaining web-scrape details: ', error.message);
     res.status(500).json({ error: 'Error obtaining web-scrape data', error_message: error.message });
   }

 });


 app.post('/send-email', async (req,res) => {
   const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
   const sender = {

       email: "donotreply.easypath@gmail.com",
       name: "Easypath"
   };
   const receivers = [{
       email: req.body.Email,
   }];
   try{ 
       const sendEmail = await apiInstance.sendTransacEmail({
           sender,
           to: receivers,
           subject: "Welcome to Easypath – Your Academic Journey Planner",
           textContent:
           `
           Dear Student,

           Thank you for choosing Easypath to assist you in planning your academic future! We are dedicated to helping you stay organized, meet deadlines, and confidently explore your major options.
           Our platform simplifies the process, allowing you to focus on what matters most: finding your path. Whether you're interested in social sciences, engineering, or business, we’ve got the tools to help you succeed.
           At Easypath, we believe every student deserves equal access to the resources they need, and we're here to empower you with simple, powerful planning tools.

           Best of luck on your journey!

           Warm regards,
           The Easypath Team
           This is an automated email. Please do not reply.

           `,
           
       });

       return res.send(sendEmail);


   }
   catch(error){
       console.log(error);
   }

});



app.post("/registration", async (req,res) => {

   async function hasher(){

      try{

         const hashedPassword = await bcrypt.hash(req.body.password,10);
         return hashedPassword;


      }
      catch(error){
         console.error("Failed");
      }

   }


   try{

      let hashedpassowrd = await hasher();


      await clientDB.none('INSERT INTO accounts (email,hash_password) VALUES ($1, $2)',[req.body.email,hashedpassowrd]);
      res.status(200).send("");
   }
   catch(error){
      console.error("registration failed");
      res.status(500).send("Registration failed");
   }


});


app.get("/temp_scholarships", async (req,res) => {

   try{
      temp_result = await clientDB.any('SELECT * from temp_table');
      res.json(temp_result);

   }
   catch (error){
      console.error(error);
      res.status(500).send('There was an issue accessing the database');
   }


});


app.post("/insert_temp_scholarships", async (req,res) => {

   try{
      const { scholarship_name, value, description, amount, university, classification } = req.body;
      temp_result = await clientDB.none('DELETE FROM temp_table');
      temp_result = await clientDB.any('INSERT INTO temp_table (scholarship_name,value,description,amount,university,classification) VALUES ($1,$2,$3,$4,$5,$6',[scholarship_name, value, description, amount, university, classification]);
      res.json(temp_result);

   }
   catch (error){
      console.error(error);
      res.status(500).send('There was an issue accessing the database');
   }


});


app.get("/scholarships", async (req,res) => {

   try{

      temp_result = await clientDB.any('SELECT * FROM scholarships');
      res.json(temp_result);
      
   }
   catch (error){
      console.error(error);
      res.status(500).send('There was an issue handling the GET request!');
   }


});







// Start the server
app.listen(port, () => {
   console.log(`Server is up at port ${port}`);
});
