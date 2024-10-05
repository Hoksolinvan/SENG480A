require("dotenv").config();
const pgp = require('pg-promise')();


const PostGresDB= process.env.PostGresDB


const connection = pgp({PostGresDB})


module.exports = connection;