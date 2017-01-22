const database = require('../database');
const type = database.type;

module.exports = database.createModel('aes_data', {
  aes_data: type.string().required(),
  burn: type.number().required(),
  created: type.date().default(database.r.now())
});

// TODO: convert this to sequelize model