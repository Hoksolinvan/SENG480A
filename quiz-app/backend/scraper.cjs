const axios = require('axios');
const cheerio = require('cheerio');
masterarray=[]

const SFUurl='https://www.sfu.ca/students/deadlines/admission_scholarships.html';
const UBCurl='https://you.ubc.ca/applying-ubc/dates-deadlines/';
const UVICurl='https://www.uvic.ca/undergraduate/admissions/application-deadlines/index.php';
const UFVurl='https://www.ufv.ca/future-students/dates-deadlines/';

//SFU
const SFU_function = async () => {
    try {
        const res = await axios.get(SFUurl);  // Wait for the axios request to complete

        indexlocation = 0;
        const $ = cheerio.load(res.data);

        $('table tr').each((index, element) => {
            if (index > indexlocation) {
                return false;  // Stops after the first row
            }

            const row = $(element).find('td').map((i, element) => $(element).text()).get();
            masterarray[0]=row[0];  // Push the row into masterarray
        });


    } catch (error) {
        console.error("Error fetching data:", error);
    }
};


//UBC
const UBC_function = async () => {
    try{

        const res = await axios.get(UBCurl);
        indexlocation = 4;
        const $ = cheerio.load(res.data);
    
        $('table tr').each((index,element) =>{


            if (index > indexlocation) {
                return false;  // Stops after the first row
            }

            const row = $(element).find('td').map((i, element) => $(element).text()).get();
            masterarray[1]=row[0].match(/\n(.*?)\n/)[1];  // Push the row into masterarray
            
        });

    }
    catch (error) {
        console.error("Error fetching data:", error);
    }

}


//UVIC
const UVIC_function = async () =>{
    try{
        const res = await axios.get(UVICurl);

        indexlocation = 10;
        const $ = cheerio.load(res.data);

        $('ul li').each((index,element) =>{

            if (index > indexlocation) {
                return false;  // Stops after the first row
            }

            const row = $(element).find('strong').map((i, element) => $(element).text()).get();
            masterarray[2]=row[0];  // Push the row into masterarray
            
        });

        

    }
    catch (error) {
        console.error("Error fetching data:", error);
    }



}


//UFV
const UFV_function = async () => {
    try {
        const res = await axios.get(UFVurl);  
        const $ = cheerio.load(res.data);    

        const indexlocation = 40;            

        $('ul li').each((index, element) => {
            if (index === indexlocation) {
                const text = $(element).text();  
                masterarray[3] = text.match(/\n(.*?):/)[1];  
                return false;  
            }
        });

    } catch (error) {
        console.error("Error fetching data:", error);
    }
};

async function Updater() {
    await SFU_function();
    await UBC_function();
    await UVIC_function();
    await UFV_function();
    
    return masterarray; 
};

module.exports = {
    Updater
};





