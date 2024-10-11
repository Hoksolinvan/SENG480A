const axios = require('axios');
const cheerio = require('cheerio');
const clientDB= require('./config.cjs');



let currentYear = new Date().getFullYear();

masterarray=[]

const SFUurl='https://www.sfu.ca/students/deadlines/admission_scholarships.html';
const UBCurl='https://you.ubc.ca/applying-ubc/dates-deadlines/';
const UVICurl='https://www.uvic.ca/undergraduate/admissions/application-deadlines/index.php';
const UFVurl='https://www.ufv.ca/future-students/dates-deadlines/';
const BCITurl='https://www.bcit.ca/admission/program-availability/when-to-apply/';
const TRUurl='https://www.tru.ca/future/admissions/undergrad.html';
const ECUADurl='https://www.ecuad.ca/admissions/application-info/undergraduate-applications/how-to-apply#fall-2-0-2-5-intake-details-and-deadlines.';
const Capilanourl='https://www.capilanou.ca/programs--courses/capu-for-you/study-abroad/full-term-exchanges/how-to-apply/';


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
            
            masterarray[0]=row[0]+" - "+row[1].replace(/\n/g,'');  // Push the row into masterarray
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
            masterarray[2]=row[0] + `, ${currentYear+1}`;  // Push the row into masterarray
            
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
                masterarray[3] = text.match(/\n(.*?):/)[1] + `, ${currentYear+1}`;  
                return false;  
            }
        });

    } catch (error) {
        console.error("Error fetching data:", error);
    }
};




//BCIT

const BCIT_function = async () => {
    try {
        const res = await axios.get(BCITurl);  
        const $ = cheerio.load(res.data);    

        const indexlocation = 1;  // Location where you want to stop

        $('table tbody tr').each((index, element) => {

            if (index > indexlocation) {
                return false;  // Stops after the first row that exceeds the indexlocation
            }

            const row = $(element).find('td').map((i, el) => $(el).text().trim()).get();  
            if (row.length > 0) {
                masterarray[4] = row[2] + ` (${currentYear+1})`;  
            }
        });

    } catch (error) {
        console.error("Error fetching data:", error);
    }
};

const TRU_function = async () => {
    try {
        const res = await axios.get(TRUurl);  
        const $ = cheerio.load(res.data);    

        const indexlocation = 0;  // Location where you want to stop (specific row)

        $('table tbody tr').each((index, element) => {
            if (index === indexlocation) {
                const row = $(element).find('td').map((i, el) => $(el).text().trim()).get();  // Select `td` instead of `th`
                    
                    masterarray[5] = row[1] + `, ${currentYear}`;  // Store the third `td` text (index 2) into `masterarray`
                
                return false;  // Stop after finding the desired row
            }
        });

    } catch (error) {
        console.error("Error fetching data:", error);
    }
};

const ECUAD_function = async () =>{
    try{
        const res = await axios.get(ECUADurl);  
        const $ = cheerio.load(res.data);

        const specificDiv = $('#content-spring-2-0-2-5-intake-details-and-deadlines\\. ul li').eq(3);
       
        masterarray[6]= specificDiv.find('strong').text().trim()+`, ${currentYear+1}`;

        

    }
    catch (error){
        console.error("Error fetching data:",error);
    }



}


const Capilano_function = async () =>{
    try{
        const res = await axios.get(Capilanourl);
        const $ = cheerio.load(res.data);

        const specifictable = $('tr').eq(1).find('td').eq(3).text().trim();
        masterarray[7]=specifictable;

    }
    catch (error) {
        console.error("Error fetching data:", error);
    }



}






async function Updater() {
    await SFU_function();
    await UBC_function();
    await UVIC_function();
    await UFV_function();
    await BCIT_function();
    await TRU_function();
    await ECUAD_function();
    await Capilano_function();

    clientDB.none('UPDATE deadlines SET SFU = $1 , UBC = $2, UVIC = $3, UFV = $4, BCIT= $5, TRU =$6, ECUAD =$7, CAPILANO =$8 WHERE id=1', [masterarray[0],masterarray[1],masterarray[2],masterarray[3],masterarray[4],masterarray[5],masterarray[6],masterarray[7]])

    return masterarray;
    
};





// setTimeout( async ()=> {let data= await Updater(); 
   
//     for(let i=0; i<masterarray[0].length;i++){
//         //console.log(String(masterarray[0][i][1].replace(/\n/g,'')) + "\n\n           " + masterarray[0][i][0]);
//     }

//    console.log(data);
    
    
// },3000);













module.exports = {
    Updater
};





