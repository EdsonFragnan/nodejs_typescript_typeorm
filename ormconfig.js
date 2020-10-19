module.exports = {
  "type": "mysql",
  "host": process.env.DB_HOST,
  "port": +process.env.DB_PORT,
  "username": process.env.DB_USERNAME,
  "password": process.env.DB_PASSWORD,
  "database": process.env.DB_NAME,
  "entities": [process.env.ENTITIES],
  "synchronize": false,
  "entitiesDir": "src/models/"
  },
 }
