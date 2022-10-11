console.log(process.env.DB_HOST);
module.exports = {
  "type": "postgress",
  "host": process.env.HOST,
  "port": process.env.PORT,
  "synchronize": false,
  "username": process.env.DB_USER,
  "password": process.env.DB_PASS,
  "database": process.env.DATABASE,
  "entities": [
    "dist/models/**/*.js"
 ],
 "migrations": [
  "dist/migrations/**/*.js"
],
 "cli":{
  "migrationsDir": [
    "src/database/migrations/"
  ],
  "entitiesDir": "src/models"
  }
}
