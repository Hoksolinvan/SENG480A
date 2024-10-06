require("dotenv").config();
const pgp = require('pg-promise')();


const PostGresDB = `postgresql://postgres:${process.env.PG_PASSWORD}@${process.env.PG_HOST}:${process.env.PGPORT}/${process.env.PGDATABASE}`;



const connection = pgp({PostGresDB})


module.exports = connection;