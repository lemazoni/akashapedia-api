module.exports = {
  "type": "mysql",
  "host": "us-cdbr-east-06.cleardb.net",
  "port": 3306,
  "username": "b7a13257094872",
  "password": "b27bad24",
  "database": "heroku_d4bb46ee197b208",
  "entities": [
    "src/models/**/*{.ts,.js}"
  ],
  "migrations": [
    "src/database/migrations/**/*{.ts,.js}"
  ],
  "cli":{
    "migrationsDir": [
      "src/database/migrations/"
    ],
    "entitiesDir": "src/models"
  }
}
