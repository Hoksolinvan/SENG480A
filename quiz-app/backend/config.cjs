require("dotenv").config();
const pgp = require('pg-promise')();


const PostGresDB = `postgresql://postgres:${process.env.PGPASSWORD}@${process.env.PGHOST}:${process.env.PGPORT}/${process.env.PGDATABASE}`;



const connection = pgp({PostGresDB})

module.exports = connection;