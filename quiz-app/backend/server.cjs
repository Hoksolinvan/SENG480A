//node packages import
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
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import 'dotenv/config';


const firebaseConfig = {
  apiKey: process.env.APIKEY,
  authDomain: process.env.AUTHDOMAIN,
  projectId: process.env.PROJECTID,
  storageBucket: process.env.STORAGEBUCKET,
  messagingSenderId: process.env.MESSAGINGSENDERAPP,
  appId: process.env.APPID,
  measurementId: process.env.MEASUREMENTID
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
const auth = getAuth(appFirebase);

//brevo sdk initialization
const defaultClient = SibApiV3Sdk.ApiClient.instance;
var apiKey = defaultClient.authentications["api-key"];
apiKey.apiKey = process.env.BREVOAPI;

const signUp = async (email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log('User signed up:', userCredential.user);

      return 1;
    } catch (error) {
      console.error('Error during sign up:', error.message);

      return 0;
    }
  };

const signIn = async(email, password) => {
    try{
        const userCredential = await signInWithEmailAndPassword(auth,email,password);
        console.log('login successful');
        return 1;
    }
    catch(error){
        console.error('Error for signing in');
        return 0;
    }

};


// Middleware to enable CORS and parse JSON request bodies
app.use(cors());
app.use(express.json()); // This middleware is required to parse JSON data in POST requests

//required root endpoint
app.get('/', (req, res) => {
   res.send('Hello World!');
});


app.get('/firebase_login', async (req,res) => {

   const {Forms} = req.body;
   if(!Forms){
      return res.status(400).json({});

   }
   else{
      let return_val = signIn(Forms.email,Forms.password);
      if(return_val){
         return res.status(200);
      }
      else{
         return res.status(400);
      }
   }
});


app.get('/firebase_signup',async (req,res) =>{

   const {Forms} = req.body;
   if(!Forms){
      return res.status(400).json({});
   }
   else{
      let return_val = signUp(Forms.email,Forms.password);
      if(return_val){
         return res.status(200);
      }
      else{
         return res.status(400);
      }
   }
})

//Endpoint to handle Contact forms Requests

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

});


//Brevo SDK API feature
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

         Thank you for choosing Easypath to assist you in planning your academic future! We are dedicated to helping you stay organized, meet deadlines, confidently explore your scholarships options, and hit your academic goals!
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


//scholarship API handling


app.get("/temp_scholarships", async (req,res) => {

   try{
      temp_result = await clientDB.any('SELECT * from temp_scholarship;');
      res.json(temp_result);

   }
   catch (error){
      console.error(error);
      res.status(500).send('There was an issue accessing the database');
   }


});


app.post("/insert_temp_scholarships", async (req,res) => {

   try{
      const { Forms } = req.body; // Extract Forms from the request body
      const { scholarship_name, value, description, amount, university, classification } = Forms;
      temp_result = await clientDB.any('INSERT INTO temp_scholarship (scholarship_name,value,description,amount,university,classification) VALUES ($1,$2,$3,$4,$5,$6)',[scholarship_name, value, description, amount, university, classification]);
      res.json(temp_result);

   }
   catch (error){
      console.error(error);
      res.status(469).send('There was an issue accessing the database');
   }


});


app.delete("/delete_scholarships/:id", async (req, res) => {
   try {
       const { id } = req.params;
       await clientDB.none('DELETE FROM temp_scholarship WHERE id=$1;', [id]);

       res.status(200).send({ message: 'Success!' });
   } catch (error) {
       console.error(error);
       res.status(500).send({ error: 'There was an issue deleting the entries' });
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
