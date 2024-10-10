import {Updater} from '../../../backend/scraper.cjs';

let SFUData, UBCData, UVICData, UFVData; // Declare globally



const processArrayElements = async () => {
    const data = await Updater();  // Wait for the array to be filled
    
    // Assign specific elements to global variables
    SFUData = data[0];  // SFU data
    UBCData = data[1];  // UBC data
    UVICData = data[2]; // UVIC data
    UFVData = data[3];  // UFV data

    // Now SFUData, UBCData, etc. are accessible globally
   
};

// Run the function to populate the global variables
processArrayElements();

// You can now use SFUData or other elements elsewhere in the program
setTimeout(() => {
    console.log("Using SFUData outside the function:", SFUData, UBCData, UVICData, UFVData);
}, 1000);  // Wait for async function to complete