console.log(process.env.Host);
module.exports = {
  "type": "postgress",
  "host": process.env.Host,
  "port": process.env.Port,
  "synchronize": false,
  "username": process.env.Username,
  "password": process.env.Password,
  "database": process.env.Database,
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
